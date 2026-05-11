import Intro from "../components/Intro"
import AboutUs from "../components/about/AboutUs";
import Process from "../components/home/Process";
import TCounter from "../components/home/TCounter";
import Testimonials from "../components/home/Testimonials";

export default function Home() {
  return (
    <>
    <Intro title="About Us" href="/about" />
    <AboutUs />
    <Process />
    <TCounter />
    <Testimonials/>
    </>
  );
}
