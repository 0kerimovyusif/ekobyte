import Image from 'next/image';
import Link from 'next/link';
import { GoArrowRight } from "react-icons/go";

interface FeatureItem {
  title: string;
  description: string;
  image: string;
  link: string;
}

const features: FeatureItem[] = [
  {
    title: "Web Optimize",
    description: "This generator uses a dictionary of Latin words to construct",
    image: "https://themeearth.com/tf/php/ekobyte/images/service/service-1.jpg",
    link: "#",
  },
  {
    title: "Tech Support Pro",
    description: "This generator uses a dictionary of Latin words to construct",
    image: "https://themeearth.com/tf/php/ekobyte/images/service/service-2.jpg",
    link: "#",
  },
  {
    title: "Web Solutions",
    description: "This generator uses a dictionary of Latin words to construct",
    image: "https://themeearth.com/tf/php/ekobyte/images/service/service-3.jpg",
    link: "#",
  },
  {
    title: "Web Optimize",
    description: "This generator uses a dictionary of Latin words to construct",
    image: "https://themeearth.com/tf/php/ekobyte/images/service/service-4.jpg",
    link: "#",
  },
  {
    title: "Tech Support Pro",
    description: "This generator uses a dictionary of Latin words to construct",
    image: "https://themeearth.com/tf/php/ekobyte/images/service/service-5.jpg",
    link: "#",
  },
  {
    title: "Web Solutions",
    description: "This generator uses a dictionary of Latin words to construct",
    image: "https://themeearth.com/tf/php/ekobyte/images/service/service-6.jpg",
    link: "#",
  },
];

export  default function Feature(){
  return (
    <section className="feature-area py-[120px] pb-[96px] bg-[#fff]">
      <div className="container mx-auto px-[13.5px] max-w-[1317px]">
        <div className="feature-area-wrapper">
          {/* Section Header */}
          <div className="flex flex-col items-center text-center mb-[60px]">
            <span className="short-title text-[#317efe] text-[13px] font-semibold uppercase tracking-wider mb-2">
              Latest service
            </span>
            <h2 className="title text-[#14203a] text-[40px] md:text-[57px] font-medium leading-[1.2]">
              Where Technology Meets <br className="hidden md:block" /> Excellence
            </h2>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 md:gap-x-[27px]">
            {features.map((feature, index) => (
              <div key={index} className="te-info-card group border-[0.8px] rounded-[20px] overflow-hidden border-[#e1e1e1] bg-white transition-all duration-500 hover:shadow-lg">
                <div className="te-info-card-inner flex flex-col">
                  {/* Image wrapper */}
                  <div className="image overflow-hidden">
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  
                  {/* Content wrapper */}
                  <div className="te-content-wrapper p-10 pb-[30px] flex flex-col items-start text-left">
                    <div className="te-title-wrapper mb-[15px]">
                      <h2 className="title text-[#14203a] text-2xl font-medium leading-tight">
                        <Link href={feature.link} className="hover:text-[#317efe] transition-colors duration-500">
                          {feature.title}
                        </Link>
                      </h2>
                    </div>
                    <div className="content">
                      <p className="desc text-[#335371] text-lg font-normal leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                    <a href="#" className='flex items-center text-[17px] text-[#317efe] font-[600] mt-[10px]'>Read More  <GoArrowRight className='ml-[10px]'/></a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};