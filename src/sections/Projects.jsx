import { Element } from "react-scroll";
import { motion } from "framer-motion";
import {
  SiPython,
  SiTensorflow,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiThreedotjs,
  SiTailwindcss,
  SiJavascript,
  SiChartdotjs,
  SiOpencv
} from "react-icons/si";
import { FaBrain, FaDatabase } from "react-icons/fa";
import MovingRibbon from "../components/MovingRibbon";

function Projects() {

  const aiProjects = [
    {
      title: "Zero Shot Learning NIDS",
      headline:
        "AI intrusion detection system capable of identifying unseen cyber attacks using zero-shot learning.",
      desc: "AI intrusion detection system detecting unseen cyber attacks using zero-shot learning.",
      img: "/images/zero_day.png",
      github: "https://github.com/HardikVIT/Zero-Shot-Learning-NIDS-CNN-MLP-RNN",
      bullets: [
        "Zero-shot learning for unseen attack detection",
        "Hybrid CNN + MLP + RNN architecture",
        "Improved detection accuracy",
        "Designed for cybersecurity datasets"
      ],
      skills: [
        { icon: <SiPython />, name: "Python" },
        { icon: <FaBrain />, name: "Machine Learning" },
        { icon: <SiTensorflow />, name: "TensorFlow" },
        { icon: <FaDatabase />, name: "Data Processing" }
      ]
    },

    {
      title: "Healthcare Prediction LLM",
      headline:
        "LLM powered healthcare prediction system assisting early diagnosis from patient data.",
      desc: "LLM powered healthcare prediction assisting early diagnosis from patient symptoms.",
      img: "/images/healthcare.png",
      github: "https://github.com/HardikVIT/HealthCare-Prediction-Langchain-LLM-",
      bullets: [
        "Large Language Model healthcare assistant",
        "LangChain pipeline integration",
        "Symptom analysis and early prediction",
        "Accessible AI driven healthcare insights"
      ],
      skills: [
        { icon: <FaBrain />, name: "LLM" },
        { icon: <SiPython />, name: "Python" },
        { icon: <FaDatabase />, name: "AI Pipelines" }
      ]
    },

    {
      title: "Hand Gesture Mouse",
      headline:
        "Computer vision system enabling full mouse control using real-time hand gestures.",
      desc: "Computer vision system controlling mouse using OpenCV hand tracking.",
      img: "/images/Hand_Mouse.png",
      github: "https://github.com/HardikVIT/Hand-Mouse",
      bullets: [
        "Real-time gesture recognition",
        "OpenCV + Mediapipe hand tracking",
        "Finger gesture click and scroll detection",
        "Smooth cursor movement"
      ],
      skills: [
        { icon: <SiOpencv />, name: "OpenCV" },
        { icon: <SiPython />, name: "Python" },
        { icon: <FaBrain />, name: "Computer Vision" }
      ]
    }
  ];

  const webProjects = [
    {
      title: "Collab Space",
      headline:
        "Real-time collaborative workspace with chatrooms and shared whiteboards.",
      desc: "A collaborative productivity platform supporting real-time communication.",
      img: "/images/collab.png",
      deploy: "https://collab-space-pink.vercel.app/",
      bullets: [
        "Real-time chatrooms",
        "Collaborative whiteboard",
        "Multi-user collaboration",
        "Cloud based architecture"
      ],
      skills: [
        { icon: <SiReact />, name: "React" },
        { icon: <SiMongodb />, name: "MongoDB" },
        { icon: <SiNodedotjs />, name: "Node.js" }
      ]
    },

    {
      title: "Portfolio Webpage",
      headline:
        "Interactive developer portfolio with smooth animations and 3D visuals.",
      desc: "Personal portfolio showcasing projects and skills.",
      img: "/images/portfolio.png",
      deploy: "https://hardik-portfolio-virid.vercel.app/",
      bullets: [
        "Interactive project showcase",
        "Framer Motion animations",
        "3D laptop scene using Three.js",
        "Modern responsive UI"
      ],
      skills: [
        { icon: <SiReact />, name: "React" },
        { icon: <SiThreedotjs />, name: "Three.js" },
        { icon: <SiTailwindcss />, name: "Tailwind" },
        { icon: <SiJavascript />, name: "JavaScript" }
      ]
    },

    {
      title: "Shopify App",
      headline:
        "Next-generation SaaS analytics platform delivering insights for Shopify stores.",
      desc: "Analytics dashboard providing insights for ecommerce stores.",
      img: "/images/shopify.png",
      github: "https://github.com/yourusername/weather-app",
      bullets: [
        "Ecommerce analytics dashboard",
        "Store performance insights",
        "Data visualization tools",
        "Scalable SaaS architecture"
      ],
      skills: [
        { icon: <SiReact />, name: "React" },
        { icon: <SiChartdotjs />, name: "Chart.js" },
        { icon: <FaDatabase />, name: "Database" }
      ]
    }
  ];

  const ProjectBlock = ({ project, reverse }) => (

    <motion.div
      initial={{ opacity: 0, y: 120 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`grid md:grid-cols-[1.3fr_1fr] gap-20 items-center mb-40 ${
        reverse ? "md:grid-cols-[1fr_1.3fr]" : ""
      }`}
    >

      {!reverse && (

        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          whileHover={{ scale: 1.03 }}
          className="rounded-3xl p-10 min-h-[420px] bg-gradient-to-br from-blue-200 to-blue-400 shadow-[0_15px_40px_rgba(59,130,246,0.22)]"
        >

          <p className="text-blue-50 text-lg mb-6 flex justify-between">
            {project.headline} <span>→</span>
          </p>

          <div className="bg-black rounded-2xl p-3 h-[340px] overflow-hidden">

            <img
              src={project.img}
              alt={project.title}
              className="rounded-xl w-full h-full object-cover"
            />

          </div>

        </motion.div>

      )}

      <div>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-6 h-[3px] bg-blue-300"></div>
          <span className="text-blue-300">Project</span>
        </div>

        <div className="flex items-center justify-between mb-4">

          <h2 className="text-4xl font-semibold">
            {project.title}
          </h2>

          <div className="flex gap-3">

            {project.github && (
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href={project.github}
                target="_blank"
                className="px-4 py-2 bg-blue-300 text-black rounded-lg font-medium"
              >
                GitHub
              </motion.a>
            )}

            {project.deploy && (
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href={project.deploy}
                target="_blank"
                className="px-4 py-2 bg-blue-200 text-black rounded-lg font-medium"
              >
                Deploy
              </motion.a>
            )}

          </div>

        </div>

        <p className="text-neutral-400 mb-6">
          {project.desc}
        </p>

        <ul className="space-y-3 mb-6">

          {project.bullets.map((b, i) => (
            <li key={i} className="flex gap-3">
              <span className="text-blue-300">✦</span>
              {b}
            </li>
          ))}

        </ul>

        <div className="flex flex-wrap gap-3">

          {project.skills.map((s, i) => (

            <span
              key={i}
              className="flex items-center gap-2 px-4 py-2 text-sm bg-neutral-900 border border-neutral-700 rounded-full"
            >
              {s.icon}
              {s.name}
            </span>

          ))}

        </div>

      </div>

      {reverse && (

        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          whileHover={{ scale: 1.03 }}
          className="rounded-3xl p-10 min-h-[420px] bg-gradient-to-br from-blue-200 to-blue-400 shadow-[0_15px_40px_rgba(59,130,246,0.22)]"
        >

          <p className="text-blue-50 text-lg mb-6 flex justify-between">
            {project.headline} <span>→</span>
          </p>

          <div className="bg-black rounded-2xl p-3 h-[340px] overflow-hidden">

            <img
              src={project.img}
              alt={project.title}
              className="rounded-xl w-full h-full object-cover"
            />

          </div>

        </motion.div>

      )}

    </motion.div>

  );

  return (

    <Element
      name="projects"
      id="projects"
      className="bg-black text-white pt-40 pb-10"
    >

      <MovingRibbon />

      <div className="max-w-[1400px] mx-auto px-10">

        <div className="mb-24">

          <p className="text-neutral-400 tracking-widest mb-4">
            AI / MACHINE LEARNING
          </p>

          <h1 className="text-5xl font-semibold mb-6">
            Intelligent AI Systems
          </h1>

        </div>

        {aiProjects.map((p, i) => (
          <ProjectBlock key={i} project={p} />
        ))}

        <div className="mb-24 mt-40 text-right">

          <p className="text-neutral-400 tracking-widest mb-4">
            WEB / FULL STACK
          </p>

          <h1 className="text-5xl font-semibold mb-6">
            Modern Web Platforms
          </h1>

        </div>

        {webProjects.map((p, i) => (
          <ProjectBlock key={i} project={p} reverse />
        ))}

      </div>

    </Element>

  );

}

export default Projects;