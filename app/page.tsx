import Image from "next/image";
import Intro from "./components/home/Intro"
import Services from "./components/home/Services"
import About from "./components/home/About"
import Subscribe from "./components/home/Subscribe"
import Portfolio from "./components/home/Portfolio"
import TeamMember from "./components/home/TeamMember"
import Process from "./components/home/Process"

export default function Home() {
  return (
<>
<Intro/>
<Services/>
<About/>
<Subscribe />
<Portfolio />
<TeamMember />
<Process />
</>
  );
}
