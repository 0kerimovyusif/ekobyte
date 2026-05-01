import Image from "next/image";

const processSteps = [
  {
    number: "01",
    icon: "/images/process/line-chart.png",
    title: "Generate Ideas",
    desc: "Corporate restructuring refers to the process of reorganizing a man company's womas out.",
  },
  {
    number: "02",
    icon: "/images/process/desktop.png",
    title: "Market Research",
    desc: "Corporate restructuring refers to the process of reorganizing a man company's womas out.",
  },
  {
    number: "03",
    icon: "/images/process/web-solutions.png",
    title: "Product Create",
    desc: "Corporate restructuring refers to the process of reorganizing a man company's womas out.",
  },
];

export default function Process() {
  return (
    <section className="w-full bg-white pt-[60px] pb-[70px] lg:pt-[62px] lg:pb-[74px]">
      <div className="mx-auto w-full max-w-[1630px] px-4 sm:px-6 lg:px-[13.5px]">
        <div className="text-center">
          <div className="mb-[28px] flex items-center justify-center gap-[24px]">
            <span className="h-[2px] w-[50px] bg-[#2f73ff]" />
            <span className="text-[13px] font-semibold uppercase tracking-[7px] text-[#2f73ff]">
              Work Process
            </span>
            <span className="h-[2px] w-[50px] bg-[#2f73ff]" />
          </div>

          <h2 className="text-[42px] font-medium leading-[1.12] tracking-[-1.5px] text-[#111a33] sm:text-[54px] md:text-[57px]">
            Our Working Process <br />
            How We Do
          </h2>
        </div>

        <div className="mt-[68px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto max-w-[1317px]">
          {processSteps.map((step) => (
            <div
              key={step.number}
              className="group relative overflow-hidden rounded-[22px] bg-[#131a2a] mb-[20px] px-[40px] pb-[65px] pt-[50px] text-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl w-[363px] md:w-[345px] lg:w-[412px] lg:min-h-[437px]"
            >
              {/* Hover blue growing square */}
              <span className="pointer-events-none absolute bottom-[18px] left-1/2 z-0 h-[10px] w-[10px] -translate-x-1/2 rounded-[2px] bg-[#317EFE] opacity-0 transition-all duration-[650ms] ease-out group-hover:scale-[95] group-hover:opacity-100" />

              <div className="relative z-10 mb-[48px] flex items-start justify-between">
                <span className="text-[57px] font-semibold leading-none tracking-[-2px] text-white">
                  {step.number}
                </span>

                <div className="mr-[2px] mt-[-10px] opacity-35">
                  <Image
                    src="/images/process/shape.png"
                    alt="Shape"
                    width={74}
                    height={86}
                    className="h-[86px] w-[74px] object-contain"
                  />
                </div>
              </div>

              <div className="relative z-10 mb-[30px] flex items-center gap-[28px]">
              <Image
  src={step.icon}
  alt={step.title}
  width={60}
  height={60}
  className="h-[60px] w-[60px] origin-center object-contain transition-transform duration-700 ease-in-out group-hover:[transform:rotateY(360deg)]"
/>

                <h3 className="text-[24px] font-semibold leading-[1.2] tracking-[-0.4px] text-white">
                  {step.title}
                </h3>
              </div>

              <p className="relative z-10 max-w-[380px] text-[18px] font-normal leading-[1.8] tracking-[-0.4px] text-white">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}