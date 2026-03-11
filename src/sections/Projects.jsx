import { Element } from "react-scroll";
import { motion } from "framer-motion";

function Projects() {

  const projects = [
    {
      title: "Zero Shot Learning NIDS",
      desc: "AI intrusion detection system detecting unseen cyber attacks using zero-shot learning."
    },
    {
      title: "Healthcare Prediction LLM",
      desc: "LLM powered healthcare prediction assisting in early diagnosis from patient data."
    },
    {
      title: "Hand Gesture Mouse",
      desc: "Computer vision system controlling a mouse using hand gestures with OpenCV."
    },
    {
      title: "Collab Space",
      desc: "Real-time collaborative workspace with chatrooms and shared whiteboards."
    },
    {
      title: "Gadget Lee",
      desc: "Tech ecommerce platform with ML product comparison and recommendation."
    },
    {
      title: "Weather App",
      desc: "Modern weather dashboard with maps, APIs and location based data."
    }
  ];

  return (

    <Element
      name="projects"
      id="projects"
      className="relative bg-black text-white min-h-[240vh] pt-40 pb-60"
    >

      <div className="max-w-[1400px] mx-auto px-10">

        {/* AI SECTION */}

        <motion.div
          initial={{ opacity: 0, x: -300 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mb-52"
        >

          <p className="text-sm tracking-widest text-neutral-400 mb-6">
            AI / MACHINE LEARNING
          </p>

          <h1 className="text-[4rem] md:text-[6rem] font-semibold leading-tight text-neutral-100 mb-10">
            Built for AI. <br />
            Projects that learn, <br />
            adapt and automate.
          </h1>

          <p className="text-lg text-neutral-400 leading-relaxed max-w-3xl">
            My AI systems focus on solving real world problems through
            machine intelligence. From intrusion detection using zero shot
            learning to healthcare prediction powered by large language
            models, these projects explore how AI can improve security,
            accessibility and human computer interaction.
          </p>

        </motion.div>


        {/* WEB SECTION */}

        <motion.div
          initial={{ opacity: 0, x: 300 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="max-w-4xl ml-auto text-right mb-60"
        >

          <p className="text-sm tracking-widest text-neutral-400 mb-6">
            WEB / FULL STACK
          </p>

          <h1 className="text-[4rem] md:text-[6rem] font-semibold leading-tight text-neutral-100 mb-10">
            Built for the web. <br />
            Fast scalable <br />
            interactive systems.
          </h1>

          <p className="text-lg text-neutral-400 leading-relaxed max-w-3xl ml-auto">
            My web applications combine modern front-end frameworks with
            scalable backend systems. These platforms focus on usability,
            real-time collaboration and data driven features.
          </p>

        </motion.div>


        {/* FLASH CARD PROJECT AREA */}

        <div className="grid md:grid-cols-3 gap-12">

          {projects.map((project, i) => (

            <motion.div
              key={i}
              whileHover={{ scale: 1.05, y: -12 }}
              transition={{ type: "spring", stiffness: 150 }}
              className="bg-neutral-900 border border-neutral-700 p-8 rounded-xl shadow-xl cursor-pointer"
            >

              <h3 className="text-xl font-semibold mb-4">
                {project.title}
              </h3>

              <p className="text-neutral-400 text-sm">
                {project.desc}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </Element>
  );
}

export default Projects;