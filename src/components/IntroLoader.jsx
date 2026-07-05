import { useEffect, useMemo, useState } from "react";

function IntroLoader({ duration = 1500, onComplete }) {
  const [progress, setProgress] = useState(0);

  // Static stars
  const stars = useMemo(
    () =>
      Array.from({ length: 250 }, () => ({
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.5 + 0.3,
      })),
    []
  );



  useEffect(() => {
    let animationId;
    let completed = false;

    const start = performance.now();

    const animate = (time) => {
      const elapsed = time - start;
      const value = Math.min((elapsed / duration) * 100, 100);

      setProgress(value);

      if (value < 100) {
        animationId = requestAnimationFrame(animate);
        return;
      }

      // FORCE FINAL STATE
      setProgress(100);

      if (!completed) {
        completed = true;

        // IMPORTANT: wait so UI actually shows 100%
        setTimeout(() => {
          onComplete?.();
        }, 300); // 👈 increase delay (this fixes early switch)
      }
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, [duration, onComplete]);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black flex items-center justify-center">

      {/* =======================
          STATIC STARS
      ======================== */}
      <div className="absolute inset-0">

        {stars.map((star, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              top: `${star.top}%`,
              left: `${star.left}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
              boxShadow: `
                0 0 4px rgba(255,255,255,.9),
                0 0 8px rgba(255,255,255,.4),
                0 0 12px rgba(255,255,255,.15)
              `,
            }}
          />
        ))}

      </div>


      {/* =======================
            LOADER
      ======================== */}

      <div className="relative z-10 text-center">

        <div className="w-16 h-16 border-2 border-white/20 border-t-white rounded-full animate-spin mx-auto" />

        <p className="mt-5 text-sm tracking-[0.35em] text-white">
          INITIALIZING EXPERIENCE
        </p>

        <p className="mt-2 text-xs text-gray-400">
          {Math.floor(progress)}%
        </p>

        <div className="mt-5 mx-auto h-[2px] w-44 overflow-hidden rounded-full bg-white/10">

          <div
            className="h-full bg-white transition-all"
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