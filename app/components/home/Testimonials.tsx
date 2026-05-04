"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { FaQuoteRight } from "react-icons/fa6";
import { GoArrowLeft, GoArrowRight } from 'react-icons/go';
import TCounter from './TCounter';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const testimonials = [
  {
    id: 1,
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form by injected humour, or randomised words.",
    name: "Cameron Williamson",
    designation: "UI/UX Design",
    image: "/images/testimonial/t-1.jpg",
  },
  {
    id: 2,
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form by injected humour, or randomised words.",
    name: "Jasika Pitterson",
    designation: "Marketing Manager",
    image: "/images/testimonial/t-2.jpg",
  },
  {
    id: 3,
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form by injected humour, or randomised words.",
    name: "Madaline Gibson",
    designation: "Web Developer",
    image: "/images/testimonial/t-3.jpg",
  },
];

export default function Testimonials() {
  return (
    
    <section className=" relative z-10 py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-6  max-w-[1317px]">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <div className="mb-4 flex items-center gap-2">
              <span className="text-[#317EFE] text-sm font-semibold uppercase tracking-wider relative">
                Testimonial
              </span>
              <div className="w-[40px] h-[2px] bg-[#317EFE]"/>
            </div>
            <h2 className="text-[#14203A] text-4xl md:text-[57px] font-medium leading-tight md:leading-[65px]">
              Our Client's Review <br /> About Us
            </h2>
          </div>
          <div className="flex self-start md:self-auto items-center gap-[26px] lg:pt-[78px]">
            <button id='testimonial_prev' className="team-slider-prev flex h-[67px] w-[67px] items-center justify-center rounded-full bg-[#e9ecfb] text-[#2f73ff] transition-all duration-300 hover:bg-[#2f73ff] hover:text-white">
            <GoArrowLeft className="text-[18px] stroke-[1]" />

            </button>

            <button id='testimonial_next' className="team-slider-next flex h-[67px] w-[67px] items-center justify-center rounded-full bg-[#e9ecfb] text-[#2f73ff] transition-all duration-300 hover:bg-[#2f73ff] hover:text-white">
                <GoArrowRight className="text-[18px] stroke-[1]" />
            </button>
          </div>
        </div>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 5000 }}
          navigation={{
            prevEl: '#testimonial_prev',
            nextEl: '#testimonial_next',
          }}
          pagination={{
            clickable: true,
            el: '.custom-pagination',
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
          }}
          className="pb-16"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="bg-[#fff] mt-[5px] ml-[5px] border border-gray-100 rounded-[20px] p-8 md:p-12 h-full flex flex-col justify-between shadow-[0px_0px_20px_0px_rgba(0,0,0,0.05)]">
                <div className="mb-8">
                  <p className="text-[#335371] text-lg leading-[36px]">
                    {item.text}
                  </p>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-[74px] h-[84px] rounded-[20px] overflow-hidden flex-shrink-0">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-[#14203A] text-xl md:text-2xl font-medium">
                        {item.name}
                      </h4>
                      <span className="text-[#335371] text-base md:text-lg">
                        {item.designation}
                      </span>
                    </div>
                  </div>
                  <div className="text-[#E1E1E1]">
                    <FaQuoteRight size={55} fill="currentColor" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="custom-pagination flex justify-center gap-2 mt-[80px]" />
      </div>
      <TCounter />
    </section>
    
    
  );
}
