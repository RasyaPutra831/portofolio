import { MotionConfig } from "framer-motion";
import Navbar from "./components/layout/Navbar";
import Cursor from "./components/ui/Cursor";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Work from "./components/sections/Work";
import Expertise from "./components/sections/Expertise";
import Experience from "./components/sections/Experience";
import TechStack from "./components/sections/TechStack";
import Contact from "./components/sections/Contact";
import useSmoothScroll from "./hooks/useSmoothScroll";

export default function App() {
  useSmoothScroll();

  return (
    <MotionConfig reducedMotion="user">
      <Navbar />
      <Cursor />
      <main>
        <Hero />
        <About />
        <Work />
        <Expertise />
        <TechStack />
        <Experience />
        <Contact />
      </main>
    </MotionConfig>
  );
}