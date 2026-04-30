"use client";

import { useState } from "react";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("*");

  const projects = [
    { img: "/images/portfolio/p1.jpg", classes: ["data_guard", "it_consult"] },
    { img: "/images/portfolio/p2.jpg", classes: ["it_consult", "it_strategize"] },
    { img: "/images/portfolio/p3.jpg", classes: ["it_strategize", "data_sense"] },
    { img: "/images/portfolio/p4.jpg", classes: ["it_strategize", "data_sense"] },
    { img: "/images/portfolio/p5.jpg", classes: ["data_sense", "data_guard"] },
    { img: "/images/portfolio/p6.jpg", classes: ["data_guard"] },
  ];

  const filters = [
    { title: "All", value: "*" },
    { title: "DataGuard", value: "data_guard" },
    { title: "DataSense", value: "data_sense" },
    { title: "ITConsult", value: "it_consult" },
    { title: "ITStrategize", value: "it_strategize" },
  ];

  const filteredProjects =
    activeFilter === "*"
      ? projects
      : projects.filter((project) => project.classes.includes(activeFilter));

  return (
    <section className="bg-white pt-20 pb-14 md:pt-[100px] md:pb-[76px] lg:pt-[120px] lg:pb-24">
      <div className="container mx-auto w-full max-w-[1317px] px-4 sm:px-5 lg:px-3">
        <div className="text-center">
          <div className="mb-3 flex items-center justify-center gap-3 sm:gap-5">
            <div className="h-[1.5px] w-[28px] bg-[#317EFE] sm:w-[40px]" />

            <span className="inline-block text-[11px] uppercase tracking-[1.5px] text-[#317EFE] sm:text-[13px] sm:tracking-[2px]">
              LATEST PORTFOLIOS
            </span>

            <div className="h-[1.5px] w-[28px] bg-[#317EFE] sm:w-[40px]" />
          </div>

          <h2 className="mb-[32px] text-[31px] font-[600] leading-tight text-[#131A2A] sm:text-[38px] md:mb-[42px] md:text-[48px] lg:mb-[45px] lg:text-[57px]">
            Latest Completed Tech <br className="hidden sm:block" /> Portfolio
            Showcase
          </h2>
        </div>

        <ul className="mb-[35px] flex flex-wrap items-center justify-center gap-x-3 gap-y-3 p-0 md:mb-[42px] md:gap-x-5 md:gap-y-4 lg:mb-[50px] lg:gap-x-[30px] lg:gap-y-5">
          {filters.map((filter) => (
            <li
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`inline-block cursor-pointer list-none rounded-[50px] border px-4 py-2 text-[14px] font-semibold leading-none tracking-[0.4px] transition-all duration-500 ease-out hover:border-[#317EFE] hover:bg-[#317EFE] hover:text-white sm:px-5 sm:text-[15px] md:px-5 md:py-2.5 md:text-[16px] lg:px-[22px] lg:text-[17px] lg:tracking-[0.6px] ${
                activeFilter === filter.value
                  ? "border-[#317EFE] bg-[#317EFE] text-white"
                  : "border-[#E1E1E1] bg-white text-[#335371]"
              }`}
            >
              {filter.title}
            </li>
          ))}
        </ul>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-7 lg:grid-cols-3 lg:gap-[30px]">
          {filteredProjects.map((project, index) => (
            <div key={index} className="lg:h-97">
              <div className="group overflow-hidden rounded-[20px] bg-white lg:mb-[30px]">
                <div className="relative h-[260px] w-full overflow-hidden rounded-[20px] sm:h-[300px] md:h-[330px] lg:h-[383px] lg:w-[411px]">
                  <img
                    src={project.img}
                    alt="portfolio"
                    className="h-full w-full scale-100 object-cover transition-all duration-500 ease-out group-hover:scale-110"
                  />

                  <div className="invisible absolute inset-0 h-full w-full p-2.5 opacity-0 transition-all duration-500 ease-out group-hover:visible group-hover:opacity-100 sm:p-3">
                    <div className="relative flex h-full flex-row items-end justify-between gap-2.5 rounded-[20px] bg-[#317efeb8] p-4 sm:p-5">
                      <div className="absolute left-1/2 top-1/2 shrink-0 -translate-x-1/2 -translate-y-1/2 p-0 transition-all duration-500 ease-out">
                        <Link
                          href="#"
                          className="inline-flex h-[56px] w-[56px] items-center justify-center rounded-[50px] bg-[#E7F914] text-[20px] text-[#14203A] transition-all duration-500 ease-out hover:bg-[#317EFE] hover:text-white md:h-[65px] md:w-[65px] md:text-[22px] lg:h-[73px] lg:w-[73px] lg:text-[24px]"
                        >
                          <FiArrowUpRight size={24} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}