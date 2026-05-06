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
      <section className="w-full overflow-x-hidden bg-white pb-[110px] pt-[90px] lg:pt-[120px] xl:pt-[140px]">
        <div className="mx-auto w-full max-w-[1113px] px-[13.5px]">
          <div className="grid grid-cols-1 items-start gap-y-[70px] xl:grid-cols-[minmax(0,733px)_minmax(0,1fr)] xl:gap-x-[32px]">
            {/* Left Content */}
            <div className="order-2 min-w-0 xl:order-1">
              <span className="relative mb-[28px] inline-block pr-[62px] text-[13px] font-bold uppercase leading-[24px] tracking-[4px] text-[#317EFE] after:absolute after:right-0 after:top-1/2 after:h-[2px] after:w-[48px] after:-translate-y-1/2 after:bg-[#317EFE]">
                About Us
              </span>
  
              <h2 className="mb-[25px] max-w-[720px] text-[40px] font-medium leading-[50px] tracking-[-2px] text-[#111B35] md:text-[57px] md:leading-[68px]">
                We&apos;re Leading The
                <br />
                Power Of Technology
              </h2>
  
              <p className="mb-[29px] max-w-[735px] text-[18px] font-normal leading-[34px] text-[#284969] md:leading-[42px]">
                Lorem ipsum dolor sit amet consectetur adipiscing elit platea pharetra,
                <br className="hidden md:block" />
                nostra mattis hendrerit proin mollis pretium facilisi in ligula
              </p>
  
              <div className="mb-[20px] grid grid-cols-1 gap-y-[13px] md:grid-cols-[330px_1fr] md:gap-x-[36px]">
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
  
                    <span className="text-[18px] font-normal leading-[30px] text-[#173A5C] md:text-[18px]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
  
              <div className="mb-[48px] h-px w-full max-w-[733px] bg-[#E0E5EA]" />
  
              <div className="flex max-w-[665px] flex-col gap-[35px] md:flex-row md:items-start md:gap-0">
                {infoItems.map((item, index) => (
                  <div
                    key={item.title}
                    className="flex flex-1 items-start gap-[12px] md:block"
                  >
                    <div>
                      <img
                        src={item.icon}
                        alt={item.title}
                        className="mb-[10px] w-[60px] object-contain md:ml-[20px]"
                      />
  
                      <h3 className="text-[24px] font-semibold leading-[38px] tracking-[-0.5px] text-[#091A35]">
                        {item.title}
                      </h3>
  
                      <p className="text-[18px] font-normal leading-[32px] text-[#244665]">
                        {item.text}
                      </p>
                    </div>
  
                    {index === 0 && (
                      <div className="mx-[38px] hidden h-[153px] w-px bg-[#DDE3E8] md:block" />
                    )}
                  </div>
                ))}
              </div>
            </div>
  
            {/* Right Images */}
            <div className="order-1 min-w-0 xl:order-2">
              <div className="relative mx-auto h-[540px] w-full max-w-[552px] sm:h-[610px] xl:mx-0 xl:mt-[33px]">
                <img
                  src="/images/about/about-2.jpg"
                  alt="About main image"
                  className="absolute left-0 top-0 h-[250px] w-[78%] max-w-[410px] rounded-[20px] object-cover sm:h-[292px]"
                />
  
                <img
                  src="/images/about/arrow-shape.png"
                  alt="Arrow shape"
                  className="absolute right-0 top-[95px] hidden w-[122px] object-contain xl:block"
                />
  
                <div className="absolute left-[10%] top-[270px] h-[260px] w-[78%] max-w-[405px] rounded-[18px] bg-[#E5E5E5] p-[5px] shadow-[0px_3px_0px_0px_rgba(0,0,0,0.10)] sm:left-[58px] sm:top-[300px] sm:h-[298px]">
                  <img
                    src="/images/about/about-4.jpg"
                    alt="About secondary image"
                    className="h-full w-full rounded-[14px] object-cover"
                  />
                </div>
  
                <a
                  href="https://www.youtube.com/watch?v=7e90gBu4pas"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Play video"
                  className="absolute left-[10px] top-[225px] z-20 flex h-[70px] w-[70px] items-center justify-center rounded-[20px] bg-[#317EFE] text-white transition-all duration-300 hover:scale-105 sm:top-[252px] sm:h-[76px] sm:w-[76px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="ml-[3px] h-[32px] w-[24px]"
                  >
                    <path d="M8 5v14l11-7L8 5z" />
                  </svg>
                </a>
  
                <div className="absolute left-0 top-[420px] z-30 flex h-[96px] w-[260px] items-center gap-[17px] rounded-[18px] bg-white px-[15px] shadow-[0px_15px_45px_0px_rgba(17,27,53,0.10)] sm:top-[443px] sm:w-[272px] xl:left-[-50px] 2xl:left-[-86px]">
                  <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full bg-[#EFE7FF] text-[#317EFE]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-[35px] w-[35px]"
                    >
                      <path d="M11 2a10 10 0 1 0 10 10h-9V3a10.4 10.4 0 0 0-1-1Z" />
                      <path d="M14 2.5V10h7.5A10 10 0 0 0 14 2.5Z" />
                    </svg>
                  </div>
  
                  <div>
                    <h4 className="mb-[1px] text-[20px] font-semibold leading-[30px] text-[#111B35]">
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
    );
  }