import { useEffect, useMemo, useState } from "react";

function IntroLoader({ duration = 500, onComplete }) {
  const [progress, setProgress] = useState(0);

  // Generate stars only once
  const stars = useMemo(
    () =>
      Array.from({ length: 70 }, () => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        duration: `${1 + Math.random() * 2}s`,
      })),
    []
  );

  useEffect(() => {
    let animationId;

    const start = performance.now();

    const animate = (time) => {
      const elapsed = time - start;
      const value = Math.min((elapsed / duration) * 100, 100);

      setProgress(value);

      if (value < 100) {
        animationId = requestAnimationFrame(animate);
      } else {
        setProgress(100);

        // Small delay so user actually sees 100%
        setTimeout(() => {
          onComplete?.();
        }, 100);
      }
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, [duration, onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black overflow-hidden flex items-center justify-center">

      {/* Star Background */}
      <div className="absolute inset-0">
        {stars.map((star, i) => (
          <div
            key={i}
            className="absolute w-[2px] h-[2px] rounded-full bg-white opacity-40 animate-pulse"
            style={{
              top: star.top,
              left: star.left,
              animationDuration: star.duration,
            }}
          />
        ))}
      </div>

      {/* Loader */}
      <div className="relative z-10 text-center">

        <div className="w-16 h-16 border-2 border-white/20 border-t-white rounded-full animate-spin mx-auto" />

        <p className="mt-4 text-sm tracking-[0.25em] text-white">
          INITIALIZING EXPERIENCE
        </p>

        <p className="mt-2 text-xs text-gray-400">
          {Math.floor(progress)}%
        </p>

        <div className="mt-4 mx-auto h-[2px] w-40 overflow-hidden bg-white/10 rounded-full">
          <div
            className="h-full bg-white"
            style={{
              width: `${progress}%`,
            }}
          />
        </div>

      </div>
    </div>
  );
}

export default IntroLoader;