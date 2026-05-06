import Link from "next/link";

type IntroProps = {
  title: string;
  href: string;
};

export default function Intro({ title, href }: IntroProps) {
  return (
    <section className="relative flex min-h-[520px] w-full items-center justify-center overflow-hidden bg-[linear-gradient(180deg,_#A0D7FE_0%,_#F6FBFF_100%)]">
      <div className="absolute inset-0 bg-[url('/images/intro/page-header.png')] bg-left-center bg-no-repeat bg-contain opacity-70" />

      <div className="relative z-10 text-center">
        <h1 className="mb-8 text-[48px] font-semibold text-[#101b3d] md:text-[57px]">
          {title}
        </h1>

        <div className="flex items-center justify-center gap-3 text-[18px] md:text-[20px]">
          <Link href="/" className="text-black transition hover:text-[#317EFE]">
            Home
          </Link>

          <span className="text-black">›</span>

          <Link href={href} className="text-[#317EFE] transition hover:text-[#101b3d]">
            {title}
          </Link>
        </div>
      </div>
    </section>
  );
}