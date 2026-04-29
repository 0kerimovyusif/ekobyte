import { GoArrowRight } from "react-icons/go";

const services = [
    { title: 'Web Development', image: '/images/services/frame.png', bg: 'bg-[#fff1f1]' },
    { title: 'App Development', image: '/images/services/driven.png', bg: 'bg-[#e8fbff]' },
    { title: 'Database Security', image: '/images/services/powered.png', bg: 'bg-[#fbfad9]' },
    { title: 'SEO Optimize', image: '/images/services/line-bar.png', bg: 'bg-[#fbfad9]' },
    { title: 'Digital Marketing', image: '/images/services/data-center.png', bg: 'bg-[#fff1f1]' },
    { title: 'Product Design', image: '/images/services/product.png', bg: 'bg-[#e8fbff]' },
];

export default function Services() {
    return (
        <section className="w-full bg-white px-6 py-[90px] text-[#07183b] max-[600px]:px-4">
            <div className="mx-auto flex max-w-[1317px] flex-col items-center">
                <div className="mb-5 flex items-center gap-4">
                    <span className="h-[1px] w-[40px] bg-[#317EFE]" />
                    <h6 className="text-[13px] font-bold uppercase leading-none tracking-[2.5px] text-[#317EFE]">
                        Latest Service
                    </h6>
                    <span className="h-[1px] w-[40px] bg-[#317EFE]" />
                </div>

                <h1 className="mb-[32px] max-w-[820px] text-center text-[56px] font-medium leading-[1.12] text-[#07183b] max-[900px]:text-[42px] max-[520px]:text-[34px]">
                    Explore Our Best Premium Quality Service
                </h1>

                <div className="flex w-full flex-wrap justify-center">
                    {services.map((service) => (
                        <div
                            key={service.title}
                            className="w-full md:w-1/2 lg:w-1/3 px-[13.5px] mb-[24px]"
                        >
                            <div className={`${service.bg} group flex h-[470px] w-full max-w-[410px] flex-col items-center justify-center rounded-[12px] p-[40px] text-center transition-all duration-300 hover:-translate-y-[5px] hover:bg-white max-[640px]:mx-auto`}>
                                <div className="flex items-center justify-center relative border-[2px] border-[#131a2a1a] rounded-full mb-6 w-[105px] h-[105px]">
                                     <div className="absolute w-[10px] h-[10px] bg-[#317EFE] rounded-full top-[15px] left-[5px]" />
                                     <div className="absolute w-[10px] h-[10px] bg-[#317EFE] rounded-full bottom-[15px] right-[5px]" />
                                     <img
                                    className=" h-[60px] w-[60px] object-contain transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(360deg)]"
                                    src={service.image}
                                    alt=""
                                /></div>

                                <h3 className="mb-3 text-[24px] font-medium leading-tight text-[#00183f]">
                                    {service.title}
                                </h3>

                                <span className="mb-5 h-[1px] w-[44px] bg-[#317EFE]" />

                                <p className="mb-7 text-[18px] font-normal leading-[1.7] text-[#164064]">
                                    Corporate restructuring refers to the process of reorganizing a man company's womas out.
                                </p>

                                <a
                                    href="#"
                                    className="flex h-[55px] items-center justify-center gap-2 rounded-full border border-[#07183b] px-[28px] py-[8px] text-[17px] font-bold leading-none text-[#317EFE] no-underline transition-all duration-300 group-hover:bg-[#317EFE] group-hover:border-[#317EFE] group-hover:text-white "
                                >
                                    Read More
                                    <GoArrowRight className="text-[18px] stroke-[1]" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
