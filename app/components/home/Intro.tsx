'use client';

const heroImage = '/images/home/slider-img.png';
const awardIcon = '/images/logo/favicon.png';

export default function Intro() {
    return (
        <section className="relative mt-[85px] h-[950px] w-full overflow-hidden bg-gradient-to-b from-[#A0D7FE] to-[#fff] px-[100px] text-[#14213d] [--photo-w:907px] max-[1500px]:px-[60px] max-[900px]:mt-[72px] max-[900px]:h-auto max-[900px]:min-h-[890px] max-[900px]:px-0 max-[900px]:pb-[390px]">
            <div className="pointer-events-none absolute right-0 top-0 z-[2] h-full w-[var(--photo-w)] max-[900px]:inset-0 max-[900px]:z-0 max-[900px]:h-full max-[900px]:w-full max-[900px]:opacity-20">
                <svg className="block h-full w-full" viewBox="0 0 907 950.431" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMaxYMid meet">
                    <path d="M1047.79 0V950.431H343.77C337.123 941.336 331.22 931.279 326.167 920.438C277.73 815.952 304.515 687.491 264.597 576.485C216.07 441.529 78.668 417.835 18.3071 292.089C-8.02125 237.229 -0.935242 156.008 15.1807 95.1532C27.0236 50.4328 46.8482 20.6233 71.3312 0.0366947L1047.79 0Z" fill="#D9D9D9" />
                    <path d="M1047.79 0V950.431H343.77C337.123 941.336 331.22 931.279 326.167 920.438C277.73 815.952 304.515 687.491 264.597 576.485C216.07 441.529 78.668 417.835 18.3071 292.089C-8.02125 237.229 -0.935242 156.008 15.1807 95.1532C27.0236 50.4328 46.8482 20.6233 71.3312 0.0366947L1047.79 0Z" fill="url(#introPhotoPattern)" />
                    <defs>
                        <pattern id="introPhotoPattern" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use href="#introPhotoImage" transform="matrix(0.000680485 0 0 0.000749625 -0.180485 0)" />
                        </pattern>
                        <image id="introPhotoImage" width="2000" height="1334" href={heroImage} />
                    </defs>
                </svg>
            </div>

            <div className="absolute right-[calc(var(--photo-w)-250px)] top-[382px] z-[6] flex h-[170px] w-[170px] items-center justify-center rounded-full bg-white shadow-[0_18px_45px_rgba(15,68,130,0.08)] max-[1500px]:right-[calc(var(--photo-w)-402px)] max-[900px]:bottom-[314px] max-[900px]:right-[24px] max-[900px]:top-auto max-[900px]:h-[132px] max-[900px]:w-[132px]">
                <svg className="absolute inset-0 h-full w-full animate-spin [animation-duration:18s]" viewBox="0 0 212 212" aria-hidden="true">
                    <defs>
                        <path id="introAwardTextPath" d="M106 106m-77 0a77 77 0 1 1 154 0a77 77 0 1 1-154 0" />
                    </defs>
                    <text className="fill-[#14213d] text-[18px] font-bold uppercase tracking-[7px] max-[900px]:text-[20px] max-[900px]:tracking-[5px]">
                        <textPath href="#introAwardTextPath" startOffset="50%" textAnchor="middle">
                            Award  Winning  Digital  Agency
                        </textPath>
                    </text>
                </svg>

                <span className="flex h-[86px] w-[86px] items-center justify-center overflow-hidden rounded-full max-[900px]:h-[56px] max-[900px]:w-[56px]">
                    <img className="block h-full w-full object-contain" src={awardIcon} alt="" />
                </span>
            </div>

            <div className="relative z-[5] mx-auto h-full max-w-[1630px] max-[1500px]:max-w-[1200px] max-[900px]:px-6">
                <div className="w-[735px] pt-[166px] max-[1500px]:w-[620px] max-[900px]:w-full max-[900px]:pt-[94px]">
                    <span className="inline-block text-[13px] font-bold uppercase leading-none tracking-[4px] text-[#317efe] max-[900px]:text-[14px] max-[900px]:tracking-[3px]">
                        Smart Solutions
                    </span>

                    <h1 className="mt-[34px] max-w-[690px] text-[69px] font-medium leading-[1.08] tracking-normal text-[#14213d] max-[1500px]:text-[68px] max-[900px]:max-w-full max-[900px]:text-[clamp(42px,12vw,58px)]">
                        We're The Best
                        <br />
                        Tech Leading
                        <br />
                        Company
                    </h1>

                    <p className="mt-[42px] max-w-[735px] text-[18px] font-normal leading-[1.9] text-[#17223a] max-[1500px]:text-[21px] max-[900px]:max-w-full max-[900px]:text-[18px] max-[900px]:leading-[1.65]">
                        We have been operating for over a decade providing tWe have been <br />
                        operating for over a decade providing top-notch
                    </p>

                    <div className="mt-[48px] flex items-center gap-[34px] max-[900px]:flex-wrap max-[900px]:gap-6">
                        <a className="inline-flex h-[58px] w-[153px] items-center justify-center rounded-[50px] bg-[#317efe] text-[18px] font-bold leading-none text-white no-underline shadow-[0_18px_35px_rgba(49,126,254,0.22)]" href="#about">
                            Read More
                        </a>

                        <a className="inline-flex min-w-[305px] items-center gap-6 text-inherit no-underline" href="tel:+12085550112" aria-label="Call (208) 555-0112">
                            <span className="relative inline-flex h-[55px] w-[55px] flex-none items-center justify-center rounded-full border-[5px] border-[#d6f400] bg-[#e3f2ff]">
                                <span className="absolute -inset-[5px] animate-ping rounded-full border-[3px] border-[#d6f400] opacity-75" />
                                <span className="absolute -inset-[5px] animate-ping rounded-full border-[3px] border-[#d6f400] opacity-75 [animation-delay:1.1s]" />
                                <svg className="relative z-[1] h-[31px] w-[31px] fill-[#317efe]" viewBox="0 0 24 24" role="img" aria-hidden="true">
                                    <path d="M20.35 17.25v2.25a1.55 1.55 0 0 1-1.69 1.55A15.38 15.38 0 0 1 12 18.69a15.05 15.05 0 0 1-4.64-4.64A15.38 15.38 0 0 1 5 7.39a1.55 1.55 0 0 1 1.54-1.69h2.27a1.55 1.55 0 0 1 1.55 1.33c.1.77.28 1.52.53 2.24a1.55 1.55 0 0 1-.35 1.59l-.96.96a12.39 12.39 0 0 0 4.64 4.64l.96-.96a1.55 1.55 0 0 1 1.59-.35c.72.25 1.47.43 2.24.53a1.55 1.55 0 0 1 1.34 1.57Z" />
                                </svg>
                            </span>

                            <span className="grid gap-1 uppercase">
                                <span className="text-[18px] font-normal leading-none text-[#395a78]">Need Help</span>
                                <strong className="text-[20px] font-medium leading-none tracking-[1.1px] text-[#14213d] normal-case">(208) 555-0112</strong>
                            </span>
                        </a>
                    </div>
                </div>
            </div>

        </section>
    );
}
