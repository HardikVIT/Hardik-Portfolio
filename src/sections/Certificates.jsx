import { Element } from "react-scroll";
import { motion } from "framer-motion";
import { useRef } from "react";

function Certificates() {

  const scrollRef = useRef(null);

  const certificates = [

    {
      title: "Google – Introduction to Large Language Models",
      desc: "Fundamentals of LLMs including transformers, applications and real-world AI systems.",
      img: "/images/Certificate/google-llm.png"
    },

    {
      title: "Deloitte Data Analytics Job Simulation",
      desc: "Hands-on experience in data analysis, dashboards and business insights.",
      img: "/images/Certificate/deloitte-certificate.png"
    },

    {
      title: "AWS Educate – Introduction to Generative AI",
      desc: "Core concepts of generative AI including foundation models and applications.",
      img: "/images/Certificate/aws-gen-ai.png"
    },

    {
      title: "AWS Academy Cloud Architecting",
      desc: "Cloud architecture principles including scalability, security and AWS services.",
      img: "/images/Certificate/aws-cloud-architecting.png"
    }

  ];

  const duplicated = [...certificates, ...certificates];

  // 🔥 DRAG SCROLL FUNCTION
  const handleWheel = (e) => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += e.deltaY;
    }
  };

  return (

    <Element
      name="certificates"
      id="certificates"
      className="relative bg-black text-white min-h-screen pt-40 pb-40"
    >

      <div className="max-w-[1400px] mx-auto px-10">

        {/* HEADING */}
        <div className="text-center mb-24">

          <p className="text-sm tracking-widest text-neutral-400 mb-4">
            CERTIFICATIONS / ACHIEVEMENTS
          </p>

          <h1 className="text-[3rem] md:text-[4.5rem] font-semibold leading-tight">
            Proof of expertise from the
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent ml-3">
              verified learning
            </span>
          </h1>

        </div>

        {/* SCROLL CONTAINER */}
        <div
          ref={scrollRef}
          onWheel={handleWheel}
          className="overflow-x-auto scrollbar-thin scrollbar-thumb-neutral-700 scrollbar-track-neutral-900 pb-6"
          style={{ scrollBehavior: "smooth" }}
        >

          <motion.div
            className="flex gap-10 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
          >

            {duplicated.map((cert, i) => (

              <div
                key={i}
                className="min-w-[380px] bg-neutral-900 border border-neutral-700 rounded-2xl p-6 shadow-xl hover:scale-[1.03] transition"
              >

                <div className="flex flex-col gap-6">

                  <img
                    src={cert.img}
                    alt={cert.title}
                    className="w-full h-[240px] object-contain bg-white rounded-lg p-3 shadow-inner"
                  />

                  <h3 className="text-xl font-semibold">
                    {cert.title}
                  </h3>

                  <p className="text-neutral-400 text-sm leading-relaxed">
                    {cert.desc}
                  </p>

                </div>

              </div>

            ))}

          </motion.div>

        </div>

        {/* SCROLL HINT */}
        <p className="text-center text-xs text-neutral-500 mt-6 tracking-widest">
          SCROLL → OR USE TRACKPAD
        </p>

      </div>

    </Element>

  );

}

export default Certificates;