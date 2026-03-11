import { Element } from "react-scroll";
import { motion } from "framer-motion";

function Projects() {

  const aiProjects = [
    "Zero Shot Learning NIDS",
    "Healthcare Prediction LLM",
    "Hand Gesture Mouse"
  ];

  const webProjects = [
    "Collab Space",
    "Gadget Lee",
    "Weather App"
  ];

  const allProjects = [...aiProjects, ...webProjects];

  return (
    <Element
      name="projects"
      id="projects"
      className="relative z-10 bg-black min-h-screen flex items-center justify-center font-space"
    >
      <div className="max-w-[1200px] w-full px-10 text-center">

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-6xl font-bold text-white mb-20 tracking-tight"
        >
          Projects
        </motion.h1>

        {/* AI PROJECT TEXT */}
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-left mb-14"
        >
          <p className="text-2xl text-green-400 mb-6 font-semibold">
            AI / Machine Learning Projects
          </p>

          {aiProjects.map((p, i) => (
            <motion.p
              key={i}
              initial={{ x: -120, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: i * 0.3 }}
              viewport={{ once: true }}
              className="text-xl text-white mb-2"
            >
              {p}
            </motion.p>
          ))}
        </motion.div>

        {/* WEB PROJECT TEXT */}
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-right mb-20"
        >
          <p className="text-2xl text-blue-400 mb-6 font-semibold">
            Web / Full-Stack Projects
          </p>

          {webProjects.map((p, i) => (
            <motion.p
              key={i}
              initial={{ x: 120, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: i * 0.3 }}
              viewport={{ once: true }}
              className="text-xl text-white mb-2"
            >
              {p}
            </motion.p>
          ))}
        </motion.div>

        {/* PROJECT CARDS */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-10"
        >
          {allProjects.map((project, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.06, y: -6 }}
              className="bg-zinc-900 border border-zinc-700 rounded-xl p-7 shadow-lg cursor-pointer"
            >
              <h3 className="text-white text-xl font-semibold">
                {project}
              </h3>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </Element>
  );
}

export default Projects;