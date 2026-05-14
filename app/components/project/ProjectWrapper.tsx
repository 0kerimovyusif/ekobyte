"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { FiArrowUpRight, FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";

type NewsItem = {
  id: string;
  title: string;
  category: string;
  image: string;
  href: string;
};

const ProjectCard = ({
  title,
  category,
  image,
  href,
}: {
  title: string;
  category: string;
  image: string;
  href: string;
}) => {
  return (
    <div className="col-lg-4 col-sm-6 col-xs-12 px-[13.5px]">
      <motion.div
        className="te-portfolio-card style-3 group relative mb-[30px] cursor-pointer overflow-hidden rounded-[20px] bg-white"
        initial="initial"
        whileHover="hover"
      >
        <div className="image relative overflow-hidden rounded-[20px]">
          <motion.img
            src={image}
            alt={title}
            className="h-[490px] w-[412px] object-cover"
            variants={{
              initial: { scale: 1 },
              hover: { scale: 1.1 },
            }}
            transition={{
              duration: 0.5,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          />

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
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-[73px] w-[73px] items-center justify-center rounded-full bg-[#e7f914] text-[24px] text-[#14203a] transition-all duration-300 hover:bg-[#317efe] hover:text-white"
              >
                <FiArrowUpRight size={24} />
              </a>
            </motion.div>

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
                  <a href={href} target="_blank" rel="noopener noreferrer">
                    {title}
                  </a>
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
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 9;
  const totalPages = 5;

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);

      try {
        const response = await axios.get(
          `/api/news?category=technology&page=${currentPage}&max=${itemsPerPage}`
        );

        const formattedNews: NewsItem[] = response.data.articles
          .filter((article: any) => article.image)
          .map((article: any, index: number) => ({
            id: `${currentPage}-${index}`,
            title: article.title,
            category: article.source?.name || "Technology News",
            image: article.image,
            href: article.url,
          }));

        setNews(formattedNews);
      } catch (error) {
        console.error("Xəbərlər yüklənmədi:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [currentPage]);

  return (
    <div className="project-page-wrapper overflow-hidden bg-white py-[120px] pb-[80px] font-sans">
      <div className="container mx-auto max-w-[1320px] px-[15px]">
        {loading ? (
          <div className="py-20 text-center text-[24px] font-semibold text-[#14203a]">
            Loading news...
          </div>
        ) : news.length > 0 ? (
          <div className="row mx-[-13.5px] flex flex-wrap">
            {news.map((item) => (
              <ProjectCard
                key={item.id}
                title={item.title}
                category={item.category}
                image={item.image}
                href={item.href}
              />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center text-[24px] font-semibold text-[#14203a]">
            News not found.
          </div>
        )}

        {!loading && news.length > 0 && (
          <div className="te-basic-pagination mt-[40px] flex justify-center">
            <ul className="flex list-none items-center gap-[12px]">
              {[1, 2, 3, 4, 5].map((num) => (
                <li key={num}>
                  <button
                    type="button"
                    onClick={() => setCurrentPage(num)}
                    className={`flex h-[30px] w-[30px] items-center justify-center rounded-full border text-[16px] font-medium transition-all duration-300 md:h-[60px] md:w-[60px] md:text-[24px] ${
                      currentPage === num
                        ? "border-[#317efe] bg-[#317efe] text-white"
                        : "border-[#dfe2e9] bg-white text-[#14203a] hover:bg-[#317efe] hover:text-white"
                    }`}
                  >
                    {num}
                  </button>
                </li>
              ))}

              <li>
                <button
                  type="button"
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(totalPages, prev + 1))
                  }
                  disabled={currentPage === totalPages}
                  className={`flex h-[30px] w-[30px] items-center justify-center rounded-full border border-[#dfe2e9] bg-white text-[16px] font-medium text-[#14203a] transition-all duration-300 hover:bg-[#317efe] hover:text-white md:h-[60px] md:w-[60px] md:text-[24px] ${
                    currentPage === totalPages
                      ? "cursor-not-allowed opacity-50"
                      : ""
                  }`}
                >
                  <FiArrowRight />
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectWrapper;
