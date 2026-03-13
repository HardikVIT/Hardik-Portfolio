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

function MovingRibbon() {

  const items = [
    { icon: <SiPython />, name: "Python" },
    { icon: <SiTensorflow />, name: "TensorFlow" },
    { icon: <SiReact />, name: "React" },
    { icon: <SiNodedotjs />, name: "Node.js" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <SiThreedotjs />, name: "ThreeJS" },
    { icon: <SiTailwindcss />, name: "TailwindCSS" },
    { icon: <SiJavascript />, name: "JavaScript" },
    { icon: <SiChartdotjs />, name: "ChartJS" },
    { icon: <SiOpencv />, name: "OpenCV" }
  ];

  return (

    <div className="relative w-full h-[320px] mt-32 mb-40">

      {/* TOP RIBBON */}

      <motion.div
        className="absolute left-[-30%] w-[260%] bg-red-600 text-white py-6 rotate-[-6deg] "
        style={{ top: "80px" }}
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 22,
          ease: "linear"
        }}
      >

        <div className="flex items-center whitespace-nowrap gap-16 text-lg font-semibold px-10">


          {items.map((item, i) => (
            <span key={i} className="flex items-center gap-3 text-xl">
              {item.icon}
              {item.name}
            </span>
          ))}

          {/* duplicate for infinite loop */}

          <span className="text-xl font-bold tracking-widest">
            PROJECTS
          </span>

          {items.map((item, i) => (
            <span key={"dup"+i} className="flex items-center gap-3 text-xl">
              {item.icon}
              {item.name}
            </span>
          ))}

        </div>

      </motion.div>


      {/* BOTTOM RIBBON */}

      <motion.div
        className="absolute left-[-30%] w-[260%] bg-red-700 text-white py-6 rotate-[6deg] "
        style={{ top: "160px" }}
        animate={{ x: ["-50%", "0%"] }}
        transition={{
          repeat: Infinity,
          duration: 22,
          ease: "linear"
        }}
      >

        <div className="flex items-center whitespace-nowrap gap-16 text-lg font-semibold px-10">

          <span className="text-xl font-bold tracking-widest">
            SKILLS
          </span>

          {items.map((item, i) => (
            <span key={i} className="flex items-center gap-3 text-xl">
              {item.icon}
              {item.name}
            </span>
          ))}

          <span className="text-xl font-bold tracking-widest">
            SKILLS
          </span>

          {items.map((item, i) => (
            <span key={"dup2"+i} className="flex items-center gap-3 text-xl">
              {item.icon}
              {item.name}
            </span>
          ))}

        </div>

      </motion.div>

    </div>
  );

}

export default MovingRibbon;