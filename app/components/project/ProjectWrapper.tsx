"use client";

import React from "react";
import Link from "next/link";
import { FiArrowUpRight, FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";

// Mock data
const projects = [
  {
    id: 1,
    title: "Tech Solutions",
    category: "Fummy text of the printing",
    image: "https://themeearth.com/tf/php/ekobyte/images/project/project-1.jpg",
  },
  {
    id: 2,
    title: "Web Design",
    category: "Fummy text of the printing",
    image: "https://themeearth.com/tf/php/ekobyte/images/project/project-2.jpg",
  },
  {
    id: 3,
    title: "Web Development",
    category: "Fummy text of the printing",
    image: "https://themeearth.com/tf/php/ekobyte/images/project/project-3.jpg",
  },
  {
    id: 4,
    title: "Idea Making",
    category: "Fummy text of the printing",
    image: "https://themeearth.com/tf/php/ekobyte/images/project/project-4.jpg",
  },
  {
    id: 5,
    title: "Blockchain Solutions",
    category: "Fummy text of the printing",
    image: "https://themeearth.com/tf/php/ekobyte/images/project/project-5.jpg",
  },
  {
    id: 6,
    title: "App Development",
    category: "Fummy text of the printing",
    image: "https://themeearth.com/tf/php/ekobyte/images/project/project-6.jpg",
  },
  {
    id: 7,
    title: "Market Analytics",
    category: "Fummy text of the printing",
    image: "https://themeearth.com/tf/php/ekobyte/images/project/project-7.jpg",
  },
  {
    id: 8,
    title: "Cloud Solutions",
    category: "Fummy text of the printing",
    image: "https://themeearth.com/tf/php/ekobyte/images/project/project-8.jpg",
  },
  {
    id: 9,
    title: "IT Solutions",
    category: "Fummy text of the printing",
    image: "https://themeearth.com/tf/php/ekobyte/images/project/project-9.jpg",
  },
];

const ProjectCard = ({
  title,
  category,
  image,
}: {
  title: string;
  category: string;
  image: string;
}) => {
  return (
    <div className="col-lg-4 col-sm-6 col-xs-12 px-[13.5px]">
      <motion.div
        className="te-portfolio-card style-3 group relative mb-[30px] cursor-pointer overflow-hidden rounded-[20px] bg-white"
        initial="initial"
        whileHover="hover"
      >
        <div className="image relative overflow-hidden rounded-[20px]">
          {/* Main Image */}
          <motion.img
            src={image}
            alt={title}
            className="h-full w-full object-cover"
            variants={{
              initial: { scale: 1 },
              hover: { scale: 1.1 },
            }}
            transition={{
              duration: 0.5,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          />

          {/* Overlay */}
          <motion.div
            className="te-content-wrapper absolute inset-0 flex items-end bg-black/20 p-[10px]"
            variants={{
              initial: {
                opacity: 0,
                visibility: "hidden",
              },
              hover: {
                opacity: 1,
                visibility: "visible",
              },
            }}
            transition={{ duration: 0.1, ease: "easeOut" }}
          >
            {/* Yellow Circle Button */}
            <motion.div
              className="btn-wrapper absolute z-20"
              variants={{
                initial: {
                  opacity: 0,
                  top: "-70px",
                  right: "-70px",
                },
                hover: {
                  opacity: 1,
                  top: "30px",
                  right: "30px",
                },
              }}
              transition={{ duration: 0.55, ease: "easeOut" }}
            >
              <Link
                href="/project-details"
                className="inline-flex h-[73px] w-[73px] items-center justify-center rounded-full bg-[#e7f914] text-[24px] text-[#14203a] transition-all duration-300 hover:bg-[#317efe] hover:text-white"
              >
                <FiArrowUpRight size={24} />
              </Link>
            </motion.div>

            {/* Bottom Content */}
            <div className="content relative flex w-full items-center justify-between">
              <motion.div
                className="content-inner flex w-full origin-bottom flex-col justify-center rounded-[20px] bg-white px-[30px] py-[25px]"
                variants={{
                  initial: {
                    scaleY: 0.3,
                    opacity: 0,
                  },
                  hover: {
                    scaleY: 1,
                    opacity: 1,
                  },
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <h3 className="title mb-[5px] text-[24px] font-medium leading-[1.2] text-[#131a2a]">
                  <Link href="/project-details">{title}</Link>
                </h3>

                <span className="sub-title block text-[18px] text-[#335371]">
                  {category}
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

const ProjectWrapper: React.FC = () => {
  return (
    <div className="project-page-wrapper overflow-hidden bg-white py-[120px] pb-[80px] font-sans">
      <div className="container mx-auto max-w-[1320px] px-[15px]">
        <div className="row mx-[-13.5px] flex flex-wrap">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              category={project.category}
              image={project.image}
            />
          ))}
        </div>

        {/* Pagination */}
        <div className="te-basic-pagination mt-[40px] flex justify-center">
          <ul className="flex list-none items-center gap-[12px]">
            <li>
              <span className="flex h-[30px] w-[30px] text-[16px] md:h-[60px] md:w-[60px] items-center justify-center rounded-full border border-[#317efe] bg-[#317efe] md:text-[24px] font-medium text-white">
                1
              </span>
            </li>

            {[2, 3].map((num) => (
              <li key={num}>
                <Link
                  href="#"
                  className="flex h-[30px] w-[30px] text-[16px] md:h-[60px] md:w-[60px] items-center justify-center rounded-full border border-[#dfe2e9] bg-white md:text-[24px] font-medium text-[#14203a] transition-all duration-300 hover:bg-[#317efe] hover:text-white"
                >
                  {num}
                </Link>
              </li>
            ))}

            <li>
              <span className="flex h-[30px] w-[30px] text-[16px] md:h-[60px] md:w-[60px] items-center justify-center rounded-full border border-[#dfe2e9] bg-white md:text-[24px] font-medium text-[#14203a] transition-all duration-300 hover:bg-[#317efe] hover:text-white">
                ...
              </span>
            </li>
            <li>
              <span className="flex h-[30px] w-[30px] text-[16px] cursor-pointer md:h-[60px] md:w-[60px] items-center justify-center rounded-full border border-[#dfe2e9] bg-white md:text-[24px] font-medium text-[#14203a] transition-all duration-300 hover:bg-[#317efe] hover:text-white">
                5
              </span>
            </li>


            <li>
              <Link
                href="#"
                className="flex h-[30px] w-[30px] text-[16px] md:h-[60px] md:w-[60px] items-center justify-center rounded-full border border-[#dfe2e9] bg-white md:text-[24px] font-medium text-[#14203a] transition-all duration-300 hover:bg-[#317efe] hover:text-white"
              >
                <FiArrowRight />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectWrapper; 