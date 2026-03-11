import { Element } from "react-scroll";
import { motion } from "framer-motion";

function Certifications() {

  const achievements = [
    {
      title: "Bit Wars 2.0",
      desc: "Ranked #11 in South India's premier offline competitive coding event."
    },
    {
      title: "Top Coder – VIT",
      desc: "Recognized among the top competitive programmers at VIT."
    }
  ];

  const publications = [
    {
      title: "AI-Based Disease Prediction and Guidance Using Symptoms and Language Models",
      desc: "Published in International Journal for Research Trends and Innovation (IJRTI), Volume 10 Issue 11 – Nov 2025."
    }
  ];

  const certifications = [
    {
      title: "Deloitte — Data Analytics Job Simulation",
      desc: "Completed Deloitte’s analytics simulation covering real-world data analysis workflows."
    },
    {
      title: "Google Cloud — Introduction to LLMs",
      desc: "Certification focused on large language models and cloud AI systems."
    },
    {
      title: "Machine Learning A–Z 2024 (Udemy)",
      desc: "Hands-on ML course by Kirill Eremenko & Hadelin de Pontes covering predictive modelling and algorithms."
    }
  ];

  return (

    <Element
      name="certifications"
      id="certifications"
      className="relative bg-black text-white min-h-[220vh] pt-40 pb-40"
    >

      <div className="max-w-[1400px] mx-auto px-10">

        {/* ACHIEVEMENTS INTRO */}

        <motion.div
          initial={{ opacity: 0, x: -300 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mb-20"
        >

          <p className="text-sm tracking-widest text-neutral-400 mb-6">
            ACHIEVEMENTS
          </p>

          <h1 className="text-[4rem] md:text-[6rem] font-semibold leading-tight text-neutral-100 mb-10">
            Competitive coding <br />
            and technical <br />
            recognition.
          </h1>

        </motion.div>


        {/* ACHIEVEMENT CARDS */}

        <div className="grid md:grid-cols-2 gap-10 mb-40">

          {achievements.map((item, i) => (

            <motion.div
              key={i}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-neutral-900 border border-neutral-700 p-8 rounded-xl"
            >

              <h3 className="text-xl font-semibold mb-3">
                {item.title}
              </h3>

              <p className="text-neutral-400 text-sm">
                {item.desc}
              </p>

            </motion.div>

          ))}

        </div>


        {/* PUBLICATIONS INTRO */}

        <motion.div
          initial={{ opacity: 0, x: 300 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="max-w-4xl ml-auto text-right mb-20"
        >

          <p className="text-sm tracking-widest text-neutral-400 mb-6">
            PUBLICATIONS
          </p>

          <h1 className="text-[4rem] md:text-[6rem] font-semibold leading-tight text-neutral-100 mb-10">
            Research and <br />
            applied AI <br />
            innovation.
          </h1>

        </motion.div>


        {/* PUBLICATION CARD */}

        <div className="grid md:grid-cols-1 gap-10 mb-40">

          {publications.map((item, i) => (

            <motion.div
              key={i}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-neutral-900 border border-neutral-700 p-8 rounded-xl"
            >

              <h3 className="text-xl font-semibold mb-3">
                {item.title}
              </h3>

              <p className="text-neutral-400 text-sm">
                {item.desc}
              </p>

            </motion.div>

          ))}

        </div>


        {/* CERTIFICATIONS INTRO */}

        <motion.div
          initial={{ opacity: 0, x: -300 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mb-20"
        >

          <p className="text-sm tracking-widest text-neutral-400 mb-6">
            CERTIFICATIONS
          </p>

          <h1 className="text-[4rem] md:text-[6rem] font-semibold leading-tight text-neutral-100 mb-10">
            Continuous <br />
            learning and <br />
            industry skills.
          </h1>

        </motion.div>


        {/* CERTIFICATION CARDS */}

        <div className="grid md:grid-cols-3 gap-10">

          {certifications.map((item, i) => (

            <motion.div
              key={i}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-neutral-900 border border-neutral-700 p-8 rounded-xl"
            >

              <h3 className="text-xl font-semibold mb-3">
                {item.title}
              </h3>

              <p className="text-neutral-400 text-sm">
                {item.desc}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </Element>
  );
}

export default Certifications;