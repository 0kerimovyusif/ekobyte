import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaPaperPlane } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative lg:h-[620px] lg:px-[100px] overflow-hidden bg-[#131A2A] text-white">
      {/* Backgroundimage */}
      <img
        src="/images/footer/footer-bg.png"
        alt="footer bg"
        className="absolute left-0 top-0 lg:top-[103px] h-full lg:h-[545px] w-full lg:w-auto object-cover lg:object-contain opacity-70 pointer-events-none"
      />

      <div className="relative mx-auto max-w-[1612px] px-6 pt-12 lg:pt-[74px] pb-24 lg:pb-0">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-0">
          <Link href="/">
            <img src="/images/footer/logo.png" alt="Ekobyte" className="h-[40px] w-auto" />
          </Link>

          <div className="flex items-center gap-[18px]">
            <span className="text-[18px] lg:text-[20px] font-medium leading-none">
              Follow us:
            </span>

            <a href="#" className="flex h-[31px] w-[31px] items-center justify-center rounded-full bg-[#242C3E] hover:bg-[#E7F914] hover:text-[#131A2A] transition-colors">
              <FaFacebookF size={14} />
            </a>
            <a href="#" className="flex h-[31px] w-[31px] items-center justify-center rounded-full bg-[#242C3E] hover:bg-[#E7F914] hover:text-[#131A2A] transition-colors">
              <FaTwitter size={14} />
            </a>
            <a href="#" className="flex h-[31px] w-[31px] items-center justify-center rounded-full bg-[#242C3E] hover:bg-[#E7F914] hover:text-[#131A2A] transition-colors">
              <FaLinkedinIn size={14} />
            </a>
            <a href="#" className="flex h-[31px] w-[31px] items-center justify-center rounded-full bg-[#242C3E] hover:bg-[#E7F914] hover:text-[#131A2A] transition-colors">
              <FaYoutube size={14} />
            </a>
          </div>
        </div>
        <div className="mt-8 lg:mt-[34px] h-px w-full bg-white/20" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.1fr_0.68fr_0.68fr_1fr] gap-12 lg:gap-[86px] pt-10 lg:pt-[70px]">
          <div>
            <h3 className="mb-6 lg:mb-[40px] text-[22px] lg:text-[24px] font-bold leading-none">
              Recent Blog
            </h3>
            <a href="#" className="mb-[18px] flex gap-[20px] group">
              <img src="/images/footer/blog-1.jpg" alt="blog" className="h-[78px] w-[78px] rounded-[16px] object-cover"/>
              <div className="pt-[2px]">
                <p className="mb-[10px] text-[14px] lg:text-[15px] font-medium leading-none text-gray-300">January 11, 2023</p>
                <h4 className="max-w-[245px] text-[17px] lg:text-[19px] font-semibold leading-[1.4] group-hover:text-[#E7F914] transition-colors">
                  How To Impact Robot AI In The Future
                </h4>
              </div>
            </a>
            <a href="#" className="flex gap-[20px] group">
              <img
                src="/images/footer/blog-2.jpg"
                alt="blog"
                className="h-[78px] w-[78px] rounded-[16px] object-cover"
              />
              <div className="pt-[2px]">
                <p className="mb-[10px] text-[14px] lg:text-[15px] font-medium leading-none text-gray-300">
                  January 11, 2023
                </p>
                <h4 className="max-w-[245px] text-[17px] lg:text-[19px] font-semibold leading-[1.4] group-hover:text-[#E7F914] transition-colors">
                  Elevate Your Business With IT Expertise
                </h4>
              </div>
            </a>
          </div>
          <div>
            <h3 className="mb-6 lg:mb-[36px] text-[22px] lg:text-[24px] font-bold leading-none">
              Our Services
            </h3>
            <div className="flex flex-col gap-4 lg:gap-[19px]">
              {["Web Development", "Database Security", "App Development", "SEO Optimize", "Product Design", "Digital Marketing"].map((service, index) => (
                <a key={index} href="#" className="flex items-center gap-[12px] text-[17px] lg:text-[19px] font-medium leading-none hover:text-[#E7F914] transition-colors">
                  <span className="text-[24px] lg:text-[28px]">›</span> {service}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-6 lg:mb-[36px] text-[22px] lg:text-[24px] font-bold leading-none">
              Get Free Link
            </h3>
            <div className="flex flex-col gap-4 lg:gap-[19px]">
              {["Our Services", "Service Details", "About Us", "Our Team", "Our Portfolio", "Contact Us"].map((link, index) => (
                <a key={index} href="#" className="flex items-center gap-[12px] text-[17px] lg:text-[19px] font-medium leading-none hover:text-[#E7F914] transition-colors">
                  <span className="text-[24px] lg:text-[28px]">›</span> {link}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-6 lg:mb-[39px] text-[22px] lg:text-[24px] font-bold leading-none">
              Newsletter
            </h3>
            <p className="max-w-[350px] text-[17px] lg:text-[19px] font-medium leading-[1.75] text-gray-300">
              Lorem Ipsum is simply is dumi omy is text dummy text.
            </p>

            <form className="mt-[24px] flex h-[60px] lg:h-[66px] w-full max-w-[340px] items-center rounded-full border border-white px-[20px] lg:px-[34px] pr-[5px] bg-white/5">
              <input
                type="email"
                placeholder="Email here"
                className="min-w-0 flex-1 bg-transparent text-[16px] lg:text-[19px] font-medium text-white outline-none placeholder:text-[#737C91]"
                required
              />
              <button
                type="submit"
                className="flex absolute right-7 h-[48px] w-[48px] lg:h-[56px] lg:w-[56px] shrink-0 items-center justify-center rounded-full bg-[#DFFF00] hover:bg-white transition-colors"
              >
                <FaPaperPlane color="#131A2A" />
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full border-t border-white/20 bg-[#131A2A]/80 backdrop-blur-sm">
        <div className="mx-auto flex flex-col md:flex-row min-h-[62px] max-w-[1612px] items-center justify-between px-6 py-4 md:py-0 gap-4 text-center md:text-left">
          <p className="text-[15px] lg:text-[19px] font-semibold leading-none">
            © Ekobyte 2025 | All Rights Reserved
          </p>
          <div className="flex flex-wrap justify-center items-center gap-[15px] lg:gap-[24px]">
            <a href="#" className="text-[15px] lg:text-[19px] font-semibold leading-none hover:text-[#E7F914] transition-colors">
              Terms & Condition
            </a>
            <a href="#" className="text-[15px] lg:text-[19px] font-semibold leading-none hover:text-[#E7F914] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-[15px] lg:text-[19px] font-semibold leading-none hover:text-[#E7F914] transition-colors">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}