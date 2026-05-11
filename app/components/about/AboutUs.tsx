const checkItems = [
  "Seamless Solutions a Digtal",
  "Experience the difference",
  "Opening doors to your future",
  "The Art of Tech, Perfected",
];

const infoItems = [
  {
    icon: "/images/about/settings.png",
    title: "Professional",
    text: "professional Engineers play",
  },
  {
    icon: "/images/about/data-center.png",
    title: "DataSense",
    text: "professional Engineers play",
  },
];

export default function AboutUs() {
  return (
    <>
      <section className="w-full overflow-x-hidden bg-white pb-[80px] pt-[70px] md:pb-[95px] md:pt-[90px] xl:pb-[110px] xl:pt-[120px]">
        <div className="mx-auto w-full max-w-[1317px]">
          <div className="grid grid-cols-1 items-center gap-y-[55px] md:gap-y-[70px] xl:grid-cols-[minmax(0,640px)_minmax(0,1fr)]">
            {/* Left Content */}
            <div className="order-2 min-w-0 px-[13.5px] xl:order-1 xl:pl-[43.5px]">
              <span className="relative mb-[22px] inline-block pr-[62px] text-[13px] font-bold uppercase leading-[24px] tracking-[4px] text-[#317EFE] after:absolute after:right-0 after:top-1/2 after:h-[2px] after:w-[48px] after:-translate-y-1/2 after:bg-[#317EFE] md:mb-[28px]">
                About Us
              </span>

              <h2 className="mb-[20px] max-w-[720px] text-[34px] font-[500] leading-[42px] tracking-[-1px] text-[#111B35] sm:text-[40px] sm:leading-[50px] md:text-[50px] md:leading-[60px] xl:mb-[25px] xl:text-[57px] xl:leading-[65px]">
                We&apos;re Leading The
                <br className="hidden sm:block" />
                Power Of Technology
              </h2>

              <p className="mb-[26px] max-w-[735px] text-[16px] font-normal leading-[30px] text-[#284969] md:text-[18px] md:leading-[36px] xl:mb-[29px] xl:leading-[42px]">
                Lorem ipsum dolor sit amet consectetur adipiscing elit platea pharetra,
                <br className="hidden md:block" />
                nostra mattis hendrerit proin mollis pretium facilisi in ligula
              </p>

              <div className="mb-[20px] grid grid-cols-1 gap-y-[13px] sm:grid-cols-2 md:grid-cols-[300px_1fr]">
                {checkItems.map((item) => (
                  <div key={item} className="flex items-center gap-[12px]">
                    <span className="flex h-[20px] w-[20px] shrink-0 items-center justify-center rounded-full bg-[#317EFE] text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-[12px] w-[12px]"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </span>

                    <span className="text-[16px] font-normal leading-[28px] text-[#173A5C] md:text-[18px] md:leading-[30px]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mb-[35px] h-px w-full max-w-[600px] bg-[#E0E5EA] md:mb-[48px]" />

              <div className="grid max-w-[665px] grid-cols-1 gap-[26px] sm:grid-cols-2 md:flex md:items-start md:gap-0">
                {infoItems.map((item) => (
                  <div
                    key={item.title}
                    className="flex flex-1 items-start gap-[12px] md:block"
                  >
                    <div>
                      <img
                        src={item.icon}
                        alt={item.title}
                        className="mb-[10px] w-[55px] object-contain md:ml-[20px] md:w-[60px]"
                      />

                      <h3 className="text-[22px] font-semibold leading-[34px] tracking-[-0.5px] text-[#091A35] md:text-[24px] md:leading-[38px]">
                        {item.title}
                      </h3>

                      <p className="text-[16px] font-normal leading-[28px] text-[#244665] md:text-[18px] md:leading-[32px]">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Images */}
            <div className="order-1 min-w-0 px-[13.5px] xl:order-2">
              <div className="relative mx-auto h-[430px] w-full max-w-[360px] sm:h-[500px] sm:max-w-[520px] md:h-[535px] md:max-w-[631px] xl:mx-0 xl:mt-[33px] xl:h-[527px] xl:max-w-[631px]">
                <img
                  src="/images/about/about-2.jpg"
                  alt="About main image"
                  className="absolute left-0 top-0 h-[335px] w-[285px] rounded-[20px] object-cover sm:h-[430px] sm:w-[410px] md:h-[500px] md:w-[480px] xl:h-auto xl:w-auto"
                />

                <img
                  src="/images/about/arrow-shape.png"
                  alt="Arrow shape"
                  className="absolute -right-[40px] top-[50px] hidden animate-[floatY_3s_ease-in-out_infinite] object-contain motion-reduce:animate-none xl:block"
                />

                <div className="absolute right-0 top-[245px] rounded-[18px] bg-[#E5E5E5] p-[5px] shadow-[0px_3px_0px_0px_rgba(0,0,0,0.10)] sm:-right-[10px] sm:top-[210px]">
                  <img
                    src="/images/about/about-4.jpg"
                    alt="About secondary image"
                    className="h-[145px] w-[145px] rounded-[14px] object-cover sm:h-auto sm:w-auto"
                  />
                </div>

                <a
                  href="https://www.youtube.com/watch?v=7e90gBu4pas"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Play video"
                  className="absolute left-[44%] top-[145px] z-20 isolate flex h-[58px] w-[58px] -translate-x-1/2 items-center justify-center overflow-visible rounded-[16px] bg-[#317EFE] text-white before:absolute before:inset-0 before:-z-10 before:rounded-[inherit] before:bg-[#317EFE]/75 before:content-[''] before:animate-[radioWave_3s_ease-out_infinite] after:absolute after:inset-0 after:-z-10 after:rounded-[inherit] after:bg-[#317EFE]/25 after:content-[''] after:animate-[radioWave_3s_ease-out_infinite] after:[animation-delay:1.5s] motion-reduce:before:animate-none motion-reduce:after:animate-none sm:left-[180px] sm:top-[175px] sm:h-[76px] sm:w-[76px] sm:translate-x-0 sm:rounded-[20px] xl:left-[180px] xl:top-[175px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="ml-[3px] h-[28px] w-[22px] sm:h-[32px] sm:w-[24px]"
                  >
                    <path d="M8 5v14l11-7L8 5z" />
                  </svg>
                </a>

                <div className="absolute animate-[moveX_3s_ease-in-out_infinite] motion-reduce:animate-none left-[20px] top-[340px] z-30 flex h-[76px] w-[215px] items-center gap-[11px] rounded-[18px] bg-white px-[14px] py-[14px] shadow-[0px_15px_45px_0px_rgba(17,27,53,0.10)] sm:left-[70px] sm:top-[360px] sm:h-[80px] sm:w-[225px] sm:px-[15px]">
                  <div className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full bg-[#EFE7FF] text-[#317EFE] sm:h-[52px] sm:w-[52px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-[32px] w-[32px] sm:h-[35px] sm:w-[35px]"
                    >
                      <path d="M11 2a10 10 0 1 0 10 10h-9V3a10.4 10.4 0 0 0-1-1Z" />
                      <path d="M14 2.5V10h7.5A10 10 0 0 0 14 2.5Z" />
                    </svg>
                  </div>

                  <div className="">
                    <h4 className="mb-[1px] text-[18px] font-semibold leading-[28px] text-[#111B35] sm:text-[20px] sm:leading-[30px]">
                      Daily Activity
                    </h4>
                    <p className="text-[12px] font-normal leading-[20px] text-[#31506D]">
                      Loream is ispam
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes radioWave {
          0% {
            transform: scale(1);
            opacity: 0.55;
          }
          70% {
            transform: scale(1.75);
            opacity: 0;
          }
          100% {
            transform: scale(1.9);
            opacity: 0;
          }
        }

        @keyframes floatY {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes moveX {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(10px);
          }
        }
      `}</style>
    </>
  );
}