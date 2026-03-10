import { Element } from "react-scroll";

function Projects() {
  return (
    <Element
      name="projects"
      id="projects"
      className="relative z-10 min-h-screen w-full bg-black flex items-center justify-center"
    >

      <div className="w-full max-w-[1200px] mx-auto px-10 text-center">

        {/* Section Title */}
        <h1 className="text-5xl font-bold text-blue-400 mb-16 drop-shadow-[0_0_10px_#3b82f6]">
          Projects
        </h1>

        {/* Projects Grid */}
        <div className="grid grid-cols-3 gap-10">

          {/* Project Card 1 */}
          <div className="bg-gray-900 p-8 rounded-xl border border-blue-400 hover:scale-105 transition">
            <h2 className="text-2xl text-blue-400 mb-4">Project 1</h2>
            <p className="text-gray-400">
              Description of your project. AI / ML / Fullstack etc.
            </p>
          </div>

          {/* Project Card 2 */}
          <div className="bg-gray-900 p-8 rounded-xl border border-blue-400 hover:scale-105 transition">
            <h2 className="text-2xl text-blue-400 mb-4">Project 2</h2>
            <p className="text-gray-400">
              Description of your project. AI / ML / Fullstack etc.
            </p>
          </div>

          {/* Project Card 3 */}
          <div className="bg-gray-900 p-8 rounded-xl border border-blue-400 hover:scale-105 transition">
            <h2 className="text-2xl text-blue-400 mb-4">Project 3</h2>
            <p className="text-gray-400">
              Description of your project. AI / ML / Fullstack etc.
            </p>
          </div>

        </div>

      </div>

    </Element>
  );
}

export default Projects;