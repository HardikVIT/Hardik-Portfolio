import { Element } from "react-scroll";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import IntroLoader from "../components/IntroLoader";
import ScrollTrigger from "gsap/ScrollTrigger";
import ProjectLoading from "../components/ProjectLoading";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {

  const laptopRef = useRef(null);
  const screenRef = useRef(null);

  const [progress, setProgress] = useState(0);
  const [ready, setReady] = useState(false);

  // 🔥 circle loader progress (0 → 100)
  const [loader, setLoader] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!ready) return;

    const ctx = gsap.context(() => {
      // Hide initially
      gsap.set([laptopRef.current, screenRef.current], {
        autoAlpha: 0,
      });

      // SHOW BOTH TOGETHER
      gsap.set(laptopRef.current, { autoAlpha: 1 });
      gsap.set(screenRef.current, { autoAlpha: 1 });

      // Laptop animation
      gsap.to(laptopRef.current, {
        scale: 6.2,
        y: -120,
        ease: "none",
        transformOrigin: "center center",
        scrollTrigger: {
          trigger: "#home",
          start: "top top",
          end: "+=1200",
          scrub: true,
          pin: true,
          onUpdate: (self) => {
            setProgress(self.progress * 100);
          },
        },
      });

      // Screen animation
      gsap.to(screenRef.current, {
        scale: 2.4,
        ease: "none",
        transformOrigin: "center center",
        scrollTrigger: {
          trigger: "#home",
          start: "top top",
          end: "+=2500",
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, [ready]);

  return (
    <Element
      name="home"
      id="home"
      className="relative h-[110vh] w-full overflow-hidden flex items-center justify-center"
    >
      {/* Intro Loader */}
      {!ready && (
        <IntroLoader
          duration={500}
          onComplete={() => setReady(true)}
        />
      )}

        {/* LEFT */}
        <div className="absolute left-[6%] top-1/2 -translate-y-1/2 max-w-md z-20">
          <p className="text-blue-500 text-xl font-semibold">
            Hi, I'm
          </p>

          <h1 className="mt-2 text-6xl font-bold leading-tight text-gray-800">
            Hardik
            <br />
            Sondhi
          </h1>

          <h2 className="mt-8 text-3xl font-medium text-blue-500">
            Upcoming Specialist
            <br />
            @ Infosys
          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-600">
            Building intelligent systems, scalable AI products,
            and modern full-stack applications that solve
            real-world problems.
          </p>
        </div>

        {/* MODEL + SCREEN */}
        <div
          ref={laptopRef}
          className="relative z-40 flex items-center justify-center"
        >
          <model-viewer
            src="/models/laptop.glb"
            loading="eager"
            reveal="auto"
            interaction-prompt="none"
            camera-controls={false}
            disable-pan
            disable-zoom
            exposure="1"
            shadow-intensity="0"
            camera-orbit="183deg 75deg 2.8m"
            field-of-view="28deg"
            tabIndex={-1}
            style={{
              width: "650px",
              height: "650px",
              background: "transparent",
              outline: "none",
              userSelect: "none",
              pointerEvents: "none",
            }}
          />

          <div
            ref={screenRef}
            className="absolute overflow-hidden"
            style={{
              top: "183px",
              left: "198px",
              width: "270px",
              height: "254px",
            }}
          >
            <ProjectLoading progress={progress} />
          </div>
        </div>

        {/* RIGHT */}
        <div className="absolute right-[6%] top-1/2 -translate-y-1/2 max-w-md text-right z-20">
          <h1 className="text-6xl font-light text-blue-500">
            Portfolio
          </h1>

          <p className="mt-8 text-xl leading-9 text-gray-600">
            Explore my projects, certifications,
            and experience in Artificial Intelligence,
            Robotics, Machine Learning,
            and Full-Stack Development.
          </p>
        </div>

        {/* SCROLL */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <span className="text-xs tracking-[0.35em] text-gray-500">
            SCROLL
          </span>

          <div className="mt-3 h-14 w-[2px] bg-gradient-to-b from-blue-500 to-transparent animate-pulse" />
        </div>
    </Element>
  );
}