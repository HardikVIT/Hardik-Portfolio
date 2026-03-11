import { Element } from "react-scroll";
import { motion } from "framer-motion";

function Projects() {

  const aiProjects = [
    {
      title: "Zero Shot Learning NIDS",
      desc: "AI intrusion detection system detecting unseen cyber attacks using zero-shot learning.",
      img: "/images/nids.png"
    },
    {
      title: "Healthcare Prediction LLM",
      desc: "LLM powered healthcare prediction assisting in early diagnosis from patient data.",
      img: "/images/healthcare.png"
    },
    {
      title: "Hand Gesture Mouse",
      desc: "Computer vision system controlling a mouse using hand gestures with OpenCV.",
      img: "/images/Hand_Mouse.png"
    }
  ];

  const webProjects = [
    {
      title: "Collab Space",
      desc: "Real-time collaborative workspace with chatrooms and shared whiteboards.", 
      img: "/images/collab.png"
    },
    {
      title: "Gadget Lee",
      desc: "Tech ecommerce platform with ML product comparison and recommendation.",
      img: "/images/gadgetlee.png"
    },
    {
      title: "Weather App",
      desc: "Modern weather dashboard with maps, APIs and location based data.",
      img: "/images/weather.png"
    }
  ];

  return (
    <Element
      name="projects"
      id="projects"
      className="relative bg-black text-white min-h-[260vh] pt-40 pb-60"
    >

      <div className="max-w-[1400px] mx-auto px-10">

        {/* AI INTRO */}

        <motion.div
          initial={{ opacity: 0, x: -300 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mb-24"
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


        {/* AI PROJECT CARDS */}

        <div className="grid md:grid-cols-3 gap-12 mb-56">

          {aiProjects.map((project, i) => (

            <motion.div
              key={i}
              whileHover={{ scale: 1.05, y: -12 }}
              transition={{ type: "spring", stiffness: 150 }}
              className="bg-neutral-900 border border-neutral-700 rounded-xl shadow-xl cursor-pointer overflow-hidden"
            >

              {/* IMAGE */}

              <div className="w-full h-[200px] bg-neutral-800">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* TEXT */}

              <div className="p-6">

                <h3 className="text-xl font-semibold mb-3">
                  {project.title}
                </h3>

                <p className="text-neutral-400 text-sm">
                  {project.desc}
                </p>

              </div>

            </motion.div>

          ))}

        </div>


        {/* WEB INTRO */}

        <motion.div
          initial={{ opacity: 0, x: 300 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="max-w-4xl ml-auto text-right mb-24"
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


        {/* WEB PROJECT CARDS */}

        <div className="grid md:grid-cols-3 gap-12 mb-24">

          {webProjects.map((project, i) => (

            <motion.div
              key={i}
              whileHover={{ scale: 1.05, y: -12 }}
              transition={{ type: "spring", stiffness: 150 }}
              className="bg-neutral-900 border border-neutral-700 rounded-xl shadow-xl cursor-pointer overflow-hidden"
            >

              {/* IMAGE */}

              <div className="w-full h-[200px] bg-neutral-800">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* TEXT */}

              <div className="p-6">

                <h3 className="text-xl font-semibold mb-3">
                  {project.title}
                </h3>

                <p className="text-neutral-400 text-sm">
                  {project.desc}
                </p>

              </div>

            </motion.div>

          ))}

        </div>


        {/* FEATURED PROJECT CARD */}

        <div className="flex justify-center mt-16">

          <motion.div
            whileHover={{ scale: 1.05, y: -12 }}
            transition={{ type: "spring", stiffness: 150 }}
            className="bg-neutral-900 border border-neutral-700 rounded-xl shadow-xl cursor-pointer
                       w-full md:w-[32%] h-[520px] overflow-hidden"
          >

            <div className="w-full h-[320px] bg-neutral-800">
              <img
                src="/images/featured.png"
                alt="Featured project"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6">

              <h3 className="text-xl font-semibold mb-3">
                Featured Project
              </h3>

              <p className="text-neutral-400 text-sm">
                This larger flashcard highlights a key project. You can place
                a preview image above and redirect users to GitHub or a live
                demo when clicked.
              </p>

            </div>

          </motion.div>

        </div>

      </div>

    </Element>
  );
}

export default Projects;