import { Element } from "react-scroll";
import { motion } from "framer-motion";

function Achievements() {

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

  const links = {
    internshipCert: "#",
    researchPaper: "https://www.ijrti.org/viewpaperforall?paper=IJRTI2511012",
    publisherCert: "https://ijrti.org/certificatemanager.php?a_rid=207283"
  };

  return (
    <Element
      name="achievements"
      id="achievements"
      className="relative bg-black text-white min-h-[220vh] pt-40 pb-70"
    >

      <div className="max-w-[1400px] mx-auto px-10">

        {/* ===============================
           RESEARCH INTERNSHIP
        =============================== */}

        <div className="grid md:grid-cols-2 gap-16 items-center mb-40">

          <motion.div
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >

            <p className="text-sm tracking-widest text-neutral-400 mb-6">
              RESEARCH INTERNSHIP
            </p>

            <h1 className="text-[3.5rem] md:text-[5rem] font-semibold leading-tight text-neutral-100 mb-8">
              Summer Research <br />
              Intern at Vellore <br />
              Institute of Technology
            </h1>

            <p className="text-neutral-400 text-lg leading-relaxed max-w-xl">
              During my summer research internship at VIT, I developed a
              Healthcare Prediction LLM system capable of assisting with
              early disease prediction based on symptoms and natural
              language queries.
            </p>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >

            <a
              href={links.internshipCert}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/intenship_certificate.jpeg"
                alt="Internship Certificate"
                className="w-full max-w-[520px] h-[360px] object-cover rounded-xl shadow-xl border border-neutral-700 hover:scale-105 transition duration-300 cursor-pointer"
              />
            </a>

            <p className="text-neutral-400 text-sm mt-4">
              Internship completion certificate issued by VIT.
            </p>

          </motion.div>

        </div>


        {/* ===============================
           PUBLICATION SECTION (SPLIT)
        =============================== */}

        <div className="grid md:grid-cols-2 gap-16 items-start mb-40">

          {/* LEFT — Heading + certificate thumbnails */}

          <motion.div
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >

            <p className="text-sm tracking-widest text-neutral-400 mb-6">
              RESEARCH PUBLICATION
            </p>

            <h1 className="text-[2.5rem] md:text-[3.5rem] font-semibold leading-tight text-neutral-100 mb-10 pb-7">
              Research publication <br />
              resulting from <br />
              the internship.
            </h1>

            <div className="flex flex-col gap-6">

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col items-start"
              >
                <a
                  href={links.publisherCert}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/images/publication_certificate.png"
                    alt="Publisher Certificate"
                    className="w-full max-w-[750px] h-[300px] object-cover rounded-xl shadow-xl border border-neutral-700 hover:scale-105 transition duration-300 cursor-pointer"
                  />
                <p className="text-neutral-400 text-center text-sm mt-3 ">
                  Official E-Certificate
                </p>
                </a>
              </motion.div>

            </div>

          </motion.div>


          {/* RIGHT — Scrollable PDF Viewer from /images/research_paper.pdf */}

          <motion.div
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4 sticky top-32"
          >

            <p className="text-sm tracking-widest text-neutral-400">
              FULL PAPER
            </p>

            <p className="text-neutral-300 text-sm">
              AI-Based Disease Prediction and Guidance Using Symptoms and Language Models
            </p>

            <div className="w-full h-[560px] rounded-2xl overflow-hidden border border-neutral-700 shadow-2xl">
              <iframe
                src="/images/Paper.pdf"
                title="Research Paper"
                className="w-full h-full"
                style={{ background: "#111111" }}
              />
            </div>

          </motion.div>

        </div>


        {/* ===============================
           ACHIEVEMENTS
        =============================== */}

        <motion.div
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl text-left mb-20"
        >

          <p className="text-sm tracking-widest text-neutral-400 mb-6">
            ACHIEVEMENTS
          </p>

          <h1 className="text-[3.5rem] md:text-[5rem] font-semibold leading-tight text-neutral-100 mb-10">
            Competitive coding <br />
            and technical <br />
            recognition.
          </h1>

        </motion.div>


        {/* ACHIEVEMENT CARDS */}

        <div className="grid md:grid-cols-2 gap-10">

          {achievements.map((item, i) => (

            <motion.div
              key={i}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-neutral-900 border border-neutral-700 p-8 rounded-xl hover:border-purple-500"
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

export default Achievements;