"use client";

import { useState } from "react";
import { Turnstile } from "@marsidev/react-turnstile";
import {
  FaLocationDot,
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";

type FormData = {
  email: string;
  phone: string;
  message: string;
};

type FormErrors = Partial<
  Record<"email" | "phone" | "message" | "turnstile" | "general", string>
>;

const defaultFormData: FormData = {
  email: "",
  phone: "",
  message: "",
};

const RATE_LIMIT_KEY = "contact_form_rate_limit";
const RATE_LIMIT_MAX = 3;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(defaultFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [turnstileToken, setTurnstileToken] = useState("");
  const [turnstileKey, setTurnstileKey] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successPopupOpen, setSuccessPopupOpen] = useState(false);

  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
  const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  function resetTurnstile() {
    setTurnstileToken("");
    setTurnstileKey((prev) => prev + 1);
  }

  function getRateLimitStatus() {
    if (typeof window === "undefined") {
      return {
        allowed: true,
        count: 0,
        resetAt: Date.now() + RATE_LIMIT_WINDOW_MS,
        retryAfter: 0,
      };
    }

    const now = Date.now();
    const saved = localStorage.getItem(RATE_LIMIT_KEY);

    if (!saved) {
      return {
        allowed: true,
        count: 0,
        resetAt: now + RATE_LIMIT_WINDOW_MS,
        retryAfter: 0,
      };
    }

    try {
      const parsed = JSON.parse(saved) as {
        count: number;
        resetAt: number;
      };

      if (!parsed.count || !parsed.resetAt || parsed.resetAt <= now) {
        localStorage.removeItem(RATE_LIMIT_KEY);

        return {
          allowed: true,
          count: 0,
          resetAt: now + RATE_LIMIT_WINDOW_MS,
          retryAfter: 0,
        };
      }

      if (parsed.count >= RATE_LIMIT_MAX) {
        return {
          allowed: false,
          count: parsed.count,
          resetAt: parsed.resetAt,
          retryAfter: Math.ceil((parsed.resetAt - now) / 1000),
        };
      }

      return {
        allowed: true,
        count: parsed.count,
        resetAt: parsed.resetAt,
        retryAfter: 0,
      };
    } catch {
      localStorage.removeItem(RATE_LIMIT_KEY);

      return {
        allowed: true,
        count: 0,
        resetAt: now + RATE_LIMIT_WINDOW_MS,
        retryAfter: 0,
      };
    }
  }

  function increaseRateLimit() {
    if (typeof window === "undefined") return;

    const now = Date.now();
    const status = getRateLimitStatus();

    localStorage.setItem(
      RATE_LIMIT_KEY,
      JSON.stringify({
        count: status.count + 1,
        resetAt: status.resetAt || now + RATE_LIMIT_WINDOW_MS,
      })
    );
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
      general: "",
    }));
  }

  function validateForm() {
    const nextErrors: FormErrors = {};

    const email = formData.email.trim();
    const phone = formData.phone.trim();
    const message = formData.message.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[+()\d\s-]{7,25}$/;

    if (!serviceId || !templateId || !publicKey) {
      nextErrors.general = "EmailJS env məlumatları yoxdur.";
    }

    if (!turnstileSiteKey) {
      nextErrors.turnstile = "Turnstile site key yoxdur.";
    }

    if (!email) {
      nextErrors.email = "Email boş ola bilməz.";
    } else if (!emailRegex.test(email)) {
      nextErrors.email = "Düzgün email yaz.";
    }

    if (phone && !phoneRegex.test(phone)) {
      nextErrors.phone = "Telefon nömrəsi düzgün deyil.";
    }

    if (!message) {
      nextErrors.message = "Mesaj boş ola bilməz.";
    } else if (message.length < 10) {
      nextErrors.message = "Mesaj ən azı 10 simvol olmalıdır.";
    } else if (message.length > 1000) {
      nextErrors.message = "Mesaj 1000 simvoldan uzun ola bilməz.";
    }

    if (!turnstileToken) {
      nextErrors.turnstile = "Cloudflare yoxlamasını tamamla.";
    }

    setErrors(nextErrors);

    return Object.keys(nextErrors).length === 0;
  }

  async function sendEmail() {
    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        template_params: {
          email: formData.email.trim(),
          phone: formData.phone.trim() || "Not provided",
          message: formData.message.trim(),
        },
      }),
    });

    const responseText = await response.text();

    console.log("EmailJS status:", response.status);
    console.log("EmailJS response:", responseText);

    if (!response.ok) {
      throw new Error(`EmailJS ${response.status}: ${responseText}`);
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (isSubmitting) return;

    const rateStatus = getRateLimitStatus();

    if (!rateStatus.allowed) {
      setErrors({
        general: `Çox cəhd etdin. ${rateStatus.retryAfter} saniyə sonra yenidən yoxla.`,
      });

      return;
    }

    const isValid = validateForm();

    if (!isValid) return;

    try {
      setIsSubmitting(true);
      setErrors({});

      await sendEmail();

      increaseRateLimit();

      setFormData(defaultFormData);
      resetTurnstile();
      setSuccessPopupOpen(true);
    } catch (error: unknown) {
      const message =
        error instanceof Error
          ? error.message
          : "Mesaj göndərilmədi. EmailJS ayarlarını yoxla.";

      console.error("EmailJS real error:", message);

      setErrors({
        general: message,
      });

      resetTurnstile();
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <section className="bg-white py-[110px] pb-[120px] font-['Inter',sans-serif]">
        <div className="container mx-auto max-w-[1320px] px-[13.5px]">
          <div className="flex flex-wrap -mx-[13.5px]">
            {/* Left Column: Form */}
            <div className="w-full lg:w-2/3 px-[13.5px] order-2 lg:order-1 mt-12 lg:mt-0">
              <div className="bg-[#f9f4f1] p-6 sm:p-8 lg:p-10 rounded-[20px] te-comment-respond">
                <h2 className="text-[38px] sm:text-[46px] lg:text-[57px] font-medium leading-tight text-[#14203a] mb-[30px]">
                  Get A Quote
                </h2>

                <form className="te-comment-form" onSubmit={handleSubmit} noValidate>
                  <div className="flex flex-wrap -mx-2">
                    <div className="w-full xl:w-1/2 px-2 mb-6">
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email*"
                        autoComplete="email"
                        className={`w-full h-[60px] px-5 bg-white border-[0.8px] rounded-[20px] text-[18px] text-[#778196] focus:outline-none transition-colors ${
                          errors.email
                            ? "border-red-500 focus:border-red-500"
                            : "border-[#e1e1e1] focus:border-[#317efe]"
                        }`}
                      />

                      {errors.email && (
                        <p className="mt-2 text-sm text-red-600">{errors.email}</p>
                      )}
                    </div>

                    <div className="w-full xl:w-1/2 px-2 mb-6">
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Your Phone"
                        autoComplete="tel"
                        className={`w-full h-[60px] px-5 bg-white border-[0.8px] rounded-[20px] text-[18px] text-[#778196] focus:outline-none transition-colors ${
                          errors.phone
                            ? "border-red-500 focus:border-red-500"
                            : "border-[#e1e1e1] focus:border-[#317efe]"
                        }`}
                      />

                      {errors.phone && (
                        <p className="mt-2 text-sm text-red-600">{errors.phone}</p>
                      )}
                    </div>

                    <div className="w-full px-2 mb-6">
                      <textarea
                        id="contact-message"
                        name="message"
                        rows={3}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Write your Message here"
                        maxLength={1000}
                        className={`w-full h-[190px] p-5 bg-white border-[0.8px] rounded-[20px] text-[18px] text-[#778196] focus:outline-none transition-colors resize-none ${
                          errors.message
                            ? "border-red-500 focus:border-red-500"
                            : "border-[#e1e1e1] focus:border-[#317efe]"
                        }`}
                      />

                      <div className="mt-2 flex items-center justify-between gap-4">
                        {errors.message ? (
                          <p className="text-sm text-red-600">
                            {errors.message}
                          </p>
                        ) : (
                          <p className="text-sm text-[#778196]">
                            Minimum 10 characters.
                          </p>
                        )}

                        <p className="text-sm text-[#778196]">
                          {formData.message.length}/1000
                        </p>
                      </div>
                    </div>

                    {errors.general && (
                      <div className="w-full px-2 mb-5">
                        <div className="rounded-[14px] border border-red-200 bg-red-50 px-4 py-3 text-red-700 break-words">
                          {errors.general}
                        </div>
                      </div>
                    )}

                    <div className="w-full px-2">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="bg-[#317efe] text-white px-10 py-[13px] rounded-[50px] text-[17px] font-semibold capitalize hover:bg-[#14203a] transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-60"
                        >
                          {isSubmitting ? "Sending..." : "Send Now"}
                        </button>

                        <div className="min-h-[65px]">
                          {turnstileSiteKey ? (
                            <Turnstile
                              key={turnstileKey}
                              siteKey={turnstileSiteKey}
                              options={{
                                theme: "light",
                                size: "normal",
                              }}
                              onSuccess={(token) => {
                                setTurnstileToken(token);
                                setErrors((prev) => ({
                                  ...prev,
                                  turnstile: "",
                                  general: "",
                                }));
                              }}
                              onExpire={() => {
                                setTurnstileToken("");
                                setErrors((prev) => ({
                                  ...prev,
                                  turnstile:
                                    "Cloudflare yoxlamasının vaxtı bitdi. Yenidən təsdiqlə.",
                                }));
                              }}
                              onError={() => {
                                setTurnstileToken("");
                                setErrors((prev) => ({
                                  ...prev,
                                  turnstile:
                                    "Cloudflare yoxlaması yüklənmədi. Səhifəni refresh elə.",
                                }));
                              }}
                            />
                          ) : (
                            <p className="text-sm text-red-600">
                              Turnstile site key yoxdur.
                            </p>
                          )}
                        </div>
                      </div>

                      {errors.turnstile && (
                        <p className="mt-2 text-sm text-red-600">
                          {errors.turnstile}
                        </p>
                      )}
                    </div>
                  </div>
                </form>
              </div>
            </div>

            {/* Right Column: Contact Info */}
            <div className="w-full lg:w-1/3 px-[13.5px] order-1 lg:order-2">
              <div className="te-contact-info-wrapper">
                <div className="mb-[30px]">
                  <h2 className="text-[38px] sm:text-[46px] lg:text-[57px] font-medium leading-tight text-[#14203a] mb-[15px]">
                    Get in touch
                  </h2>

                  <p className="text-[18px] leading-[36px] text-[#335371]">
                    It is a long established fact that a reader will distro
                    bioiiy desig the rea dablea content
                  </p>
                </div>

                <div className="flex flex-col gap-[30px] mb-[40px]">
                  <div className="flex items-center gap-[15px] bg-white">
                    <div className="w-[60px] h-[60px] flex items-center justify-center bg-[#f9f4f1] text-[#317efe] text-[22px] rounded-full shrink-0">
                      <FaLocationDot />
                    </div>

                    <div>
                      <h3 className="text-[20px] font-medium text-[#14203a] mb-0">
                        Location
                      </h3>

                      <span className="text-[18px] text-[#335371]">
                        Dhaka 102, utl 1216, road 45 house
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-[15px] bg-white">
                    <div className="w-[60px] h-[60px] flex items-center justify-center bg-[#f9f4f1] text-[#317efe] text-[22px] rounded-full shrink-0">
                      <FaPhone />
                    </div>

                    <div>
                      <h3 className="text-[20px] font-medium text-[#14203a] mb-0">
                        Call Us
                      </h3>

                      <a
                        href="tel:0123456789"
                        className="text-[18px] text-[#335371] hover:text-[#317efe] transition-colors"
                      >
                        +88 0123456789
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-[15px] bg-white">
                    <div className="w-[60px] h-[60px] flex items-center justify-center bg-[#f9f4f1] text-[#317efe] text-[22px] rounded-full shrink-0">
                      <FaEnvelope />
                    </div>

                    <div>
                      <h3 className="text-[20px] font-medium text-[#14203a] mb-0">
                        E-Mail
                      </h3>

                      <a
                        href="mailto:Ekobyte@gmail.com"
                        className="text-[18px] text-[#335371] hover:text-[#317efe] transition-colors"
                      >
                        Ekobyte@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex gap-[10px]">
                  {[
                    { icon: <FaFacebookF />, href: "#" },
                    { icon: <FaTwitter />, href: "#" },
                    { icon: <FaLinkedinIn />, href: "#" },
                    { icon: <FaYoutube />, href: "#" },
                  ].map((social, idx) => (
                    <a
                      key={idx}
                      href={social.href}
                      className="w-[50px] h-[50px] flex items-center justify-center bg-[#f9f4f1] border-[0.8px] border-[#e1e1e1] text-[#14203a] rounded-full hover:bg-[#317efe] hover:text-white hover:border-[#317efe] transition-all duration-300"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {successPopupOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 px-4">
          <div className="w-full max-w-[430px] rounded-[24px] bg-white p-8 text-center shadow-2xl">
            <div className="mx-auto mb-5 flex h-[70px] w-[70px] items-center justify-center rounded-full bg-[#317efe]/10 text-[34px] text-[#317efe]">
              ✓
            </div>

            <h3 className="mb-3 text-[28px] font-semibold text-[#14203a]">
              Message Sent!
            </h3>

            <p className="mb-7 text-[17px] leading-[28px] text-[#335371]">
              Your message was sent successfully. We will contact you soon.
            </p>

            <button
              type="button"
              onClick={() => setSuccessPopupOpen(false)}
              className="rounded-[50px] bg-[#317efe] px-8 py-3 text-white font-semibold hover:bg-[#14203a] transition-all duration-300"
            >
              Okay
            </button>
          </div>
        </div>
      )}
    </>
  );
}