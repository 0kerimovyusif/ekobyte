import Image from "next/image";
import { Check } from "lucide-react";

export default function About() {
    return (
        <section className="bg-[#F9F4F1] py-16 lg:py-28">
            <div className="mx-auto grid max-w-[1320px] items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
                <div className="order-2 lg:order-1">
                    <div className="mb-8 flex items-center gap-4 text-[13px] font-semibold uppercase tracking-[0.15em] text-[#2f7bff]">
                        <span>About Us</span>
                        <span className="h-[2px] w-[40px] bg-[#2f7bff]" />
                    </div>

                    <h2 className="max-w-[620px] text-[25px] font-medium leading-[1.14] text-[#111a34] sm:text-[35px] lg:text-[57px]">
                        We're Leading The Power Of Technology
                    </h2>

                    <p className="mt-8 max-w-[680px] text-[18px] leading-[36px] text-[#17466f]">
                        It is a long established fact that a reader will be distracted by the
                        Design readablejk content of a page when looking at its layout.
                        Lorem Ipsum is simply dummyjl text of the printing
                    </p>

                    <div className="mt-10 grid gap-x-9 gap-y-6 text-[18px] text-[#071432] sm:grid-cols-2">
                        {[
                            "Best IT Solutions & Service",
                            "Always Latest Technology",
                            "24 Hour's Customer Service",
                            "World Best Service",
                        ].map((item) => (
                            <div key={item} className="flex items-center gap-3">
                                <Check className="h-[24px] w-[21px] shrink-0 text-[#2f7bff]" strokeWidth={2} />
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="relative order-1 mx-auto w-full max-w-[620px] lg:order-2">
                    <Image
                        src="/images/about/about-dots.png"
                        alt=""
                        width={137}
                        height={137}
                        className="absolute right-2 top-8 z-0  animate-[spin_6s_linear_infinite] lg:-right-12 lg:top-10"
                    />

                    <div className="relative z-10 lg:w-[453px] lg:ml-auto lg:h-[541] overflow-hidden [border-radius:500px_500px_0_0]">
                        <Image
                            src="/images/about/about-1.jpg"
                            alt="About us"
                            width={620}
                            height={735}
                            priority
                            className="h-auto w-full object-cover"
                        />
                    </div>

                    <div className="absolute flex flex-col gap-[10px] bottom-[58px] left-0 z-20 -translate-x-1/2 animate-about-float bg-[#eaff00] px-[60px] pt-[36px] pb-[40px] text-[#111a34] [clip-path:polygon(9%_0,96%_0,100%_100%,0_100%)] sm:bottom-[72px] lg:left-23 lg:bottom-[42px] lg:translate-x-0">
                        <div className="text-[45px] font-bold leading-none">12 Year's</div>
                        <div className="text-[14.35px] w-[150px] font-semibold leading-tight">
                            years of experiences in this industry
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
