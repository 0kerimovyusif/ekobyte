"use client";

import CountUp from "react-countup";

const counterData = [
    {
        title: "Winning award",
        end: 200,
        suffix: "+",
        icon: "/images/testimonial/badge.png",
    },
    {
        title: "Happy Clients",
        end: 200,
        suffix: "K+",
        icon: "/images/testimonial/review-user.png",
    },
    {
        title: "Complete project",
        end: 500,
        suffix: "+",
        icon: "/images/testimonial/thumb-up.png",
    },
    {
        title: "Client review",
        end: 400,
        suffix: "+",
        icon: "/images/testimonial/review-users.png",
    },
];

export default function TCounter() {
    return (
        <section className="relative w-full bg-white">
            <div className="mx-auto max-w-[1317px] px-[13.5px]">
                <div className="bg-[url('/images/testimonial/world-map.png')] bg-center bg-no-repeat bg-contain py-[70px] md:py-[90px] lg:py-[70px]">
                    <div className="grid grid-cols-1 gap-y-[60px] text-center md:grid-cols-2 lg:grid-cols-4 lg:gap-y-0">
                        {counterData.map((item, index) => (
                            <div
                                key={index}
                                className="group z-20 flex flex-col items-center"
                            >
                                <div className="mb-[30px] flex h-[100px] w-[100px] items-center justify-center rounded-full bg-[#317EFE]">
                                    <img
                                        src={item.icon}
                                        alt={item.title}
                                        className="h-[55px] object-contain transition-transform duration-700 ease-in-out group-hover:[transform:rotateY(360deg)]"
                                    />
                                </div>

                                <h6 className="mb-[18px] text-[18px] font-normal text-[#173B63]">
                                    {item.title}
                                </h6>

                                <h2 className="text-[57px] font-medium leading-none text-[#111C3A]">
                                    <CountUp
                                        end={item.end}
                                        duration={3}
                                        enableScrollSpy
                                        scrollSpyOnce
                                    />
                                    {item.suffix}
                                </h2>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}