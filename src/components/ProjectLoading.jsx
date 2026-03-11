import { useEffect, useRef } from "react";

function ProjectLoading() {
  const rocketRef = useRef();

  useEffect(() => {

    const handleScroll = () => {

      const scrollY = window.scrollY;
      const maxScroll = 2500; // same value used in CameraMove

      const progress = Math.min(scrollY / maxScroll, 1);

      if (rocketRef.current) {
        rocketRef.current.style.transform =
          `translateY(${-400 * progress}px)`;
      }

    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  return (
    <div className="w-full h-full bg-black flex flex-col items-center justify-center relative overflow-hidden">

      {/* Rocket */}
      <div ref={rocketRef} className="transition-transform">

        <svg width="80" height="160" viewBox="0 0 100 200">
          <rect x="40" y="60" width="20" height="80" fill="#3b82f6"/>
          <polygon points="50,20 35,60 65,60" fill="#60a5fa"/>
          <polygon points="40,140 20,160 40,160" fill="#3b82f6"/>
          <polygon points="60,140 80,160 60,160" fill="#3b82f6"/>
          <circle cx="50" cy="90" r="6" fill="#0ea5e9"/>
        </svg>

      </div>

      {/* smoke */}
      <div className="absolute bottom-8 flex gap-2">
        <div className="w-6 h-6 bg-gray-400 rounded-full opacity-40 animate-bounce"></div>
        <div className="w-5 h-5 bg-gray-500 rounded-full opacity-40 animate-bounce delay-200"></div>
        <div className="w-4 h-4 bg-gray-600 rounded-full opacity-40 animate-bounce delay-300"></div>
      </div>

    </div>
  );
}

export default ProjectLoading;