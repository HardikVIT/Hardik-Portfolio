import { Element } from "react-scroll";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

import {
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiTensorflow,
  SiMongodb,
  SiThreedotjs,
  SiChartdotjs,
  SiOpencv
} from "react-icons/si";

import { FaBrain, FaDatabase } from "react-icons/fa";
import MovingRibbon from "../components/MovingRibbon";

function Projects() {
  const [active, setActive] = useState(0);
  const rightRef = useRef(null);

  const aiProjects = [
    {
      title: "Zero Shot Learning NIDS",
      desc: "A deep learning-based intrusion detection system designed to identify completely unseen cyber attacks using zero-shot learning. The system leverages hybrid architectures combining CNN, MLP, and RNN to generalize beyond trained attack patterns, making it highly effective for real-world cybersecurity scenarios where new threats emerge constantly.",
      color: "from-purple-400 via-pink-500 to-indigo-500",
      images: ["/images/zero_day.png"],
      github: "https://github.com/HardikVIT/Zero-Shot-Learning-NIDS-CNN-MLP-RNN",
      bullets: [
        "Zero-shot learning for unseen threats",
        "Hybrid CNN + MLP + RNN architecture",
        "High generalization capability",
        "Focused on real-world datasets",
      ],
    },
    {
      title: "Healthcare Prediction LLM",
      desc: "An intelligent healthcare assistant powered by LLM pipelines that analyzes symptoms and predicts possible diseases. Built using modern AI workflows, it integrates language models with structured reasoning to assist early diagnosis and provide reliable health insights.",
      color: "from-pink-300 via-fuchsia-400 to-red-400",
      images: ["/images/healthcare.png"],
      github: "#",
      bullets: [
        "LLM-based diagnosis system",
        "LangChain integration",
        "Symptom-to-disease prediction",
      ],
    },
    {
      title: "Hand Gesture Mouse",
      desc: "A real-time computer vision system that transforms hand gestures into mouse controls. Using Mediapipe and OpenCV, it enables touchless interaction with smooth cursor movement, clicking, and scrolling, providing an intuitive human-computer interface.",
      color: "from-lime-300 via-emerald-400 to-green-500",
      images: ["/images/Hand_Mouse.png"],
      github: "https://github.com/HardikVIT/Hand-Mouse",
      bullets: [
        "Real-time gesture tracking",
        "Touchless interaction",
        "Smooth cursor control",
      ],
    },
  ];

  const webProjects = [
    {
      title: "Collab Space",
      desc: "A full-stack collaborative workspace enabling real-time communication and shared whiteboard interaction. Designed for teams and students, it supports multiple users simultaneously with seamless synchronization.",
      color: "from-cyan-300 via-blue-500 to-violet-600",
      images: ["/images/collab.png"],
      deploy: "https://collab-space-pink.vercel.app/",
      bullets: [
        "Real-time chat system",
        "Collaborative whiteboard",
        "Multi-user sync",
      ],
    },
    {
      title: "Portfolio Webpage",
      desc: "A modern interactive developer portfolio featuring smooth animations, 3D visuals, and immersive UI/UX. Built with React, Tailwind, and Three.js to create a visually engaging experience.",
      color: "from-yellow-200 via-orange-400 to-red-500",
      images: ["/images/portfolio.png"],
      deploy: "https://hardik-portfolio-virid.vercel.app/",
      bullets: [
        "Framer Motion animations",
        "Three.js 3D integration",
        "Highly responsive design",
      ],
    },
    {
      title: "Shopify App",
      desc: "A scalable SaaS analytics platform that provides deep insights into ecommerce store performance. It visualizes data using interactive charts and helps businesses make data-driven decisions.",
      color: "from-cyan-200 via-sky-400 to-indigo-500",
      images: ["/images/shopify.png"],
      bullets: [
        "Analytics dashboard",
        "Chart.js visualizations",
        "Business insights engine",
      ],
    },
  ];

  const projects = [...aiProjects, ...webProjects];

  const handleRightScroll = () => {
    const container = rightRef.current;
    if (!container) return;

    const progress =
      container.scrollTop /
      (container.scrollHeight - container.clientHeight);

    const index = Math.min(
      Math.floor(progress * projects.length),
      projects.length - 1
    );

    setActive(index);
  };

  const project = projects[active];

  return (
    <Element name="projects" id="projects" className="bg-black text-white">
      <MovingRibbon />

      <div className="max-w-[1500px] mx-auto px-12 ">
        <h1 className="text-[5rem] font-semibold">PROJECTS</h1>
      </div>

      <div className="flex relative" style={{ height: "100vh" }}>

        {/* LEFT */}
        <div className="w-[40%] relative flex items-center">

          <div className="absolute right-0 top-0 h-full w-[1px] bg-neutral-800">

            <motion.div
              animate={{ y: [0, 300, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute left-[-10px] text-blue-400 text-lg"
            >
              <SiPython />
            </motion.div>

            <motion.div
              animate={{ y: ["0%", "100%"] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute left-[-70px] text-[10px] text-neutral-500 rotate-90 whitespace-nowrap tracking-widest"
            >
              AI • ML • WEB • PROJECTS • EXPLORE •
            </motion.div>
          </div>

          <motion.div key={active} className="p-12">

            <p className="text-xs text-neutral-500 mb-2 tracking-widest">
              {active < aiProjects.length
                ? "AI / MACHINE LEARNING"
                : "WEB / FULL STACK"}
            </p>

            <p className="text-sm text-neutral-400 mb-3">
              Project {active + 1} / {projects.length}
            </p>

            <h2 className="text-5xl font-bold mb-4">
              {project.title}
            </h2>

            <p className="text-neutral-400 mb-6 leading-relaxed">
              {project.desc}
            </p>

            <ul className="space-y-2 mb-6">
              {project.bullets.map((b, i) => (
                <li key={i}>✦ {b}</li>
              ))}
            </ul>

            {/* 🔥 TEXT LINKS */}
            <div className="flex gap-6 text-sm tracking-widest">

              {project.github && (
                <motion.a
                  href={project.github}
                  target="_blank"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 1.2, repeat: Infinity }}
                  className="mt-6 text-xs tracking-widest text-neutral-500"
                >
                  GITHUB ↗
                </motion.a>
              )}

              {project.deploy && (
                <motion.a
                  href={project.deploy}
                  target="_blank"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 1.2, repeat: Infinity, delay: 0.3 }}
                  className="text-neutral-400 hover:text-white cursor-pointer"
                >
                  LIVE ↗
                </motion.a>
              )}

            </div>


          </motion.div>
        </div>

        {/* RIGHT */}
        <div
          ref={rightRef}
          onScroll={handleRightScroll}
          className="w-[60%] overflow-y-auto p-20 relative no-scrollbar"
        >
          <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-black to-transparent pointer-events-none" />

          {projects.map((proj, i) => {
            const isAIStart = i === 0;
            const isWebStart = i === aiProjects.length;

            return (
              <div key={i} className="mb-40">

                {isAIStart && (
                  <h2 className="text-4xl font-semibold mb-20">
                    AI Projects
                  </h2>
                )}

                {isWebStart && (
                  <h2 className="text-4xl font-semibold mb-20">
                    Web Projects
                  </h2>
                )}

                <motion.a
                  href={proj.github || proj.deploy || "#"}
                  target="_blank"
                  whileHover={{ scale: 1.05, rotateX: 6, rotateY: 6 }}
                  className="block"
                >
                  <div
                    className={`p-6 h-[520px]  rounded-3xl bg-gradient-to-br ${proj.color} shadow-xl w-[90%]  mx-auto`}
                  >
                    <img
                      src={proj.images[0]}
                      className="rounded-xl w-full h-[400px] object-cover"
                    />

                    <h3 className="text-center mt-6 text-2xl font-semibold text-white tracking-tight font-[Space Grotesk]">
                      {proj.title}
                    </h3>
                  </div>
                </motion.a>

              </div>
            );
          })}
        </div>

      </div>
    </Element>
  );
}

export default Projects;