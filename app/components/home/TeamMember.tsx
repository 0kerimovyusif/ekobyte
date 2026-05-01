"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterest } from "react-icons/fa";

export default function TeamMember() {
  const teamMembers = [
    {
      image: "/images/team/team-1.jpg",
      name: "Sakib Tamim",
      role: "WebOptimize",
    },
    {
      image: "/images/team/team-2.jpg",
      name: "Bessie Coopero",
      role: "Marketing Coordinator",
    },
    {
      image: "/images/team/team-3.jpg",
      name: "Courtney Henry",
      role: "Medical Assistant",
    },
    {
      image: "/images/team/team-4.jpg",
      name: "Ronald Richards",
      role: "Dog Trainer",
    },
    {
      image: "/images/team/team-1.jpg",
      name: "Cameron Williamson",
      role: "Web Designer",
    },
  ];

  return (
    <section className="w-full overflow-hidden bg-white pt-[103px] pb-[95px]">
      <div className="mx-auto w-full max-w-[1317px] px-[13.5px]">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="mb-[33px] flex items-center gap-[14px]">
              <span className="text-[13px] font-[600] uppercase leading-none tracking-[4px] text-[#2f73ff]">
                Our Team Member
              </span>
              <span className="block h-[2px] w-[50px] bg-[#2f73ff]"></span>
            </div>

            <h2 className="max-w-[760px] text-[42px] font-[500] leading-[1.09] text-[#101b35] sm:text-[56px]">
              Meet Our Experience <br className="hidden sm:block" />
              Professional IT Employee
            </h2>
          </div>

          <div className="flex items-center gap-[26px] lg:pt-[78px]">
            <button className="team-slider-prev flex h-[67px] w-[67px] items-center justify-center rounded-full bg-[#e9ecfb] text-[#2f73ff] transition-all duration-300 hover:bg-[#2f73ff] hover:text-white">
            <GoArrowLeft className="text-[18px] stroke-[1]" />

            </button>

            <button className="team-slider-next flex h-[67px] w-[67px] items-center justify-center rounded-full bg-[#e9ecfb] text-[#2f73ff] transition-all duration-300 hover:bg-[#2f73ff] hover:text-white">
                <GoArrowRight className="text-[18px] stroke-[1]" />
            </button>
          </div>
        </div>
      </div>

      <div className="mt-[65px] w-full">
        <Swiper
          modules={[Navigation, Autoplay]}
          loop={true}
          speed={700}
          spaceBetween={37}
          slidesPerView="auto"
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: ".team-slider-prev",
            nextEl: ".team-slider-next",
          }}
          className="!overflow-visible"
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index} className="!h-[400px] !w-[358px]" >
              <div className="group relative h-[400px] w-[358px] overflow-hidden rounded-[23px] bg-[#eef0f5]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#1232d9] via-[#1232d9]/70 to-[#1232d9]/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

                <div className="absolute inset-x-0 bottom-[52px] translate-y-5 px-6 text-center opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="mb-[22px] flex items-center justify-center gap-[18px]">
                    <a
                      href="#"
                      className="flex h-[35px] w-[35px] items-center justify-center rounded-full bg-white text-[14px] text-[#101b35] transition-all duration-300 hover:bg-[#EBFA3B]"
                    >
                      <FaFacebookF />
                    </a>

                    <a
                      href="#"
                      className="flex h-[35px] w-[35px] items-center justify-center rounded-full bg-white text-[14px] text-[#101b35] transition-all duration-300 hover:bg-[#EBFA3B]"
                    >
                      <FaTwitter />
                    </a>

                    <a
                      href="#"
                      className="flex h-[35px] w-[35px] items-center justify-center rounded-full bg-white text-[14px] text-[#101b35] transition-all duration-300 hover:bg-[#EBFA3B]"
                    >
                      <FaLinkedinIn />
                    </a>

                    <a
                      href="#"
                      className="flex h-[35px] w-[35px] items-center justify-center rounded-full bg-white text-[14px] text-[#101b35] transition-all duration-300 hover:bg-[#EBFA3B]"
                    >
                      <FaPinterest />
                    </a>
                  </div>

                  <h3 className="text-[24px] font-semibold leading-none text-white transition duration-300 hover:text-[#317EFE]">
                    <a href="#"> {member.name} </a>
                  </h3>

                  <p className="mt-[20px] text-[18px] font-medium leading-none text-white">
                    {member.role}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}