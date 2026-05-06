import Intro from "../components/Intro"
import AboutUs from "../components/about/AboutUs";

export default function Home() {
  return (
    <>
    <Intro title="About Us" href="/about" />
    <AboutUs />
    </>
  );
}
