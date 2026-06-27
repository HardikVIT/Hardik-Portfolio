import { motion } from "framer-motion";

function Coding() {

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

  return (
    <>
      {/* ===============================
         ACHIEVEMENTS HEADER
      =============================== */}

      <motion.div
        initial={{ opacity: 0, x: 200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl text-left mb-10"
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

      {/* CARDS */}

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
    </>
  );
}

export default Coding;