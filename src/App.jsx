import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import Navbar from "./components/Navbar";
import NeuralBackground from "./components/NeuralBackground";
import GlitchCursor from "./components/cursor";

import Home from "./sections/Home";
import Projects from "./sections/Projects";
import Achievements from "./sections/Achievements";
import Certificates from "./sections/Certificates";

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 3.2,
      smoothWheel: true,
      wheelMultiplier: 0.6,
      touchMultiplier: 1.2,
      prevent: (node) => {
        return node.closest(".projects-scroll");
      },
    });

    // Make Lenis accessible from other components
    window.lenis = lenis;

    // Sync Lenis with GSAP
    lenis.on("scroll", ScrollTrigger.update);

    const raf = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(raf);
      delete window.lenis;
      lenis.destroy();
    };
  }, []);

  const isTouch =
    typeof window !== "undefined" &&
    window.matchMedia("(hover: none)").matches;

  return (
    <div className="relative bg-white w-full min-h-screen overflow-x-hidden">

      {/* Cursor (desktop only) */}
      {!isTouch && <GlitchCursor />}

      {/* Background */}
      <NeuralBackground />

      {/* Navbar */}
      <div className="relative z-50">
        <Navbar />
      </div>

      {/* Main Content */}
      <main className="relative z-10">
        <Home />
        <Achievements />
        <Projects />
        <Certificates />
      </main>

    </div>
  );
}

export default App;