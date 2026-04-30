import { GoArrowRight } from "react-icons/go";

export default function Subscribe() {
    return (
        <section className="subscribe flex bg-[linear-gradient(to_bottom,#F9F4F1_50%,#FFF_50%)]">
            <div className="sub-area mx-auto flex w-full max-w-[1317px] items-center mb-[80px] gap-[36px]">
                <div className="sub-left hidden lg:block w-[520px] shrink-0 overflow-hidden rounded-[20px]">
                    <img src="/images/subscribe/subscribe-bg.jpg" alt="" className="h-full w-full object-cover" />
                </div>

                <div className="sub-right w-90 mx-[15px] lg:mx-0 flex-1">
                    <div className="newsletter flex min-h-[360px] flex-col justify-center rounded-[20px] bg-[#317EFE] px-[56px] py-[52px]">
                        <div className="text-area mb-[34px]">
                            <h2 className="mb-[18px] text-[36px] lg:text-[57px] font-semibold leading-[1.12] text-white">
                                Subscribe To Our Newsletter
                            </h2>

                            <p className="max-w-[570px] text-[18px] leading-[1.75] text-white/80">
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout
                            </p>
                        </div>

                        <div className="input-area flex flex-col  lg:p-0 lg:flex-row items-center gap-[16px]">
                            <input
                                type="email"
                                placeholder="Your email here"
                                className="h-[56px] w-[240px] lg:[377px] rounded-[50px] bg-white px-[26px] text-[18px] text-[#1B1B1B] outline-none placeholder:text-[#8B8B8B]"
                            />

                            <button
                                type="submit"
                                className="flex h-[56px] text-[17px] cursor-pointer hover:bg-black hover:text-white transition duration-500  font-[500] w-[240px] lg:w-[220px] items-center justify-center gap-[10px] rounded-[50px] bg-[#E7F914] text-black"
                            >
                                Submit
                                <GoArrowRight className="text-[18px] stroke-[1]" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    );
}