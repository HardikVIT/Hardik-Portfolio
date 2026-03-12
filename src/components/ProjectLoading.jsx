import { useEffect, useState } from "react";

function ProjectLoading() {

  const [progress, setProgress] = useState(0);

  useEffect(() => {

    const handleScroll = () => {

      const scrollTop = window.scrollY;
      const maxScroll = 800;

      const percentage = Math.min((scrollTop / maxScroll) * 100, 100);

      setProgress(percentage);

    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  return (
    <section className="fixed inset-0 z-40 flex items-center justify-center bg-black pb-10">

      <div className="text-center">

        <h2 className="text-neutral-300 text-2xl mb-12 tracking-wide">
          Loading Portfolio ---
        </h2>

        <div className="w-[420px] h-[6px] bg-neutral-800 rounded-full overflow-hidden">

          <div
            className="h-full bg-blue-400 transition-all duration-200"
            style={{ width: `${progress}%` }}
          />

        </div>

        <p className="text-neutral-400 mt-6 text-sm">
          {Math.floor(progress)}%
        </p>

      </div>

    </section>
  );
}

export default ProjectLoading;