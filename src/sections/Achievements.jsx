import { Element } from "react-scroll";
import { motion } from "framer-motion";
import { useRef, useEffect } from "react";

function Achievements() {

  const achievements = [
    {
      title: "Top Coder – VIT",
      desc: "Recognized among the top competitive programmers at VIT University.",
      image: "/images/coding/topcoder.png",
      tag: "VIT UNIVERSITY"
    },
    {
      title: "Bit Wars 2.0",
      desc: "Ranked #11 in South India's premier offline competitive coding event.",
      image: "/images/coding/bitwars.png",
      tag: "COMPETITIVE CODING"
    },
    {
      title: "LeetCode 300+",
      desc: "Solved over 300 problems on LeetCode across arrays, trees, DP and graphs.",
      image: "/images/coding/leetcode.png",
      tag: "PROBLEM SOLVING"
    },
    {
      title: "HackerRank Python",
      desc: "Achieved 5-star gold badge in Python on HackerRank.",
      image: "/images/coding/python.png",
      tag: "PYTHON"
    },
  ];

  const links = {
    internshipCert: "#",
    researchPaper: "https://www.ijrti.org/viewpaperforall?paper=IJRTI2511012",
    publisherCert: "https://ijrti.org/certificatemanager.php?a_rid=207283"
  };

  const scrollRef = useRef(null);
  const animRef = useRef(null);
  const pausedRef = useRef(false);
  const posRef = useRef(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const speed = 0.5;

    const step = () => {
      if (!pausedRef.current) {
        posRef.current += speed;
        if (posRef.current >= el.scrollWidth / 2) {
          posRef.current = 0;
        }
        el.scrollLeft = posRef.current;
      }
      animRef.current = requestAnimationFrame(step);
    };

    animRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  return (
    <Element
      name="achievements"
      id="achievements"
      className="relative bg-black text-white min-h-[220vh] pt-40 pb-70"
    >
      <div className="max-w-[1400px] mx-auto px-10">

        {/* ===============================
           RESEARCH INTERNSHIP — unchanged
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
            <a href={links.internshipCert} target="_blank" rel="noopener noreferrer">
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
           PUBLICATION SECTION — unchanged
        =============================== */}
        <div className="grid md:grid-cols-2 gap-16 items-start mb-40">
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
                <a href={links.publisherCert} target="_blank" rel="noopener noreferrer">
                  <img
                    src="/images/publication_certificate.png"
                    alt="Publisher Certificate"
                    className="w-full max-w-[750px] h-[300px] object-cover rounded-xl shadow-xl border border-neutral-700 hover:scale-105 transition duration-300 cursor-pointer"
                  />
                  <p className="text-neutral-400 text-center text-sm mt-3">
                    Official E-Certificate
                  </p>
                </a>
              </motion.div>
            </div>
          </motion.div>

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
           ACHIEVEMENTS — auto-scroll carousel
        =============================== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="text-sm tracking-widest text-neutral-400 mb-4">
            COMPETITIVE CODING / ACHIEVEMENTS
          </p>
          <h1 className="text-[3rem] md:text-[4.5rem] font-semibold leading-tight text-neutral-100">
            Proof of skill from the{" "}
            <span className="text-blue-400">competitive</span>
            <br />
            <span className="text-purple-400">grind</span>
          </h1>
        </motion.div>

        {/* Carousel wrapper with fade edges */}
        <div className="relative">

          {/* Left fade */}
          <div
            className="pointer-events-none absolute left-0 top-0 h-full w-20 z-10"
            style={{ background: "linear-gradient(to right, black, transparent)" }}
          />
          {/* Right fade */}
          <div
            className="pointer-events-none absolute right-0 top-0 h-full w-20 z-10"
            style={{ background: "linear-gradient(to left, black, transparent)" }}
          />

          {/* Scroll track */}
          <div
            ref={scrollRef}
            style={{
              display: "flex",
              gap: "24px",
              overflowX: "scroll",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              paddingBottom: "8px",
            }}
          >
            <style>{`div::-webkit-scrollbar { display: none; }`}</style>

            {[...achievements, ...achievements].map((item, i) => (
              <div
                key={i}
                onMouseEnter={() => { pausedRef.current = true; }}
                onMouseLeave={() => { pausedRef.current = false; }}
                style={{
                  flexShrink: 0,
                  width: "320px",
                  background: "#171717",
                  border: "1px solid #404040",
                  borderRadius: "16px",
                  overflow: "hidden",
                  transition: "border-color 0.3s",
                  cursor: "pointer",
                }}
                onMouseOver={e => e.currentTarget.style.borderColor = "#60a5fa"}
                onMouseOut={e => e.currentTarget.style.borderColor = "#404040"}
              >
                {/* Image — fixed height, object-cover, all equal */}
                <div style={{
                  width: "100%",
                  height: "220px",
                  overflow: "hidden",
                  background: "#262626",
                }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center",
                      display: "block",
                    }}
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.parentNode.innerHTML = `
                        <div style="display:flex;align-items:center;justify-content:center;
                          width:100%;height:100%;background:#1a1a2e;">
                          <span style="font-size:56px">🏆</span>
                        </div>`;
                    }}
                  />
                </div>

                {/* Text */}
                <div style={{ padding: "20px 22px 24px" }}>
                  <p style={{
                    fontSize: "11px",
                    letterSpacing: "0.12em",
                    color: "#737373",
                    marginBottom: "6px",
                    textTransform: "uppercase",
                  }}>
                    {item.tag}
                  </p>
                  <h3 style={{
                    color: "#ffffff",
                    fontWeight: "600",
                    fontSize: "17px",
                    marginBottom: "8px",
                  }}>
                    {item.title}
                  </h3>
                  <p style={{
                    color: "#a3a3a3",
                    fontSize: "13px",
                    lineHeight: "1.6",
                  }}>
                    {item.desc}
                  </p>
                </div>

                {/* Hover indicator bar at bottom */}
                <div
                  className="pause-bar"
                  style={{
                    height: "3px",
                    background: "transparent",
                    transition: "background 0.3s",
                  }}
                />
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-neutral-500 mt-8 tracking-widest">
            HOVER TO PAUSE
          </p>
          {/* Bottom bar highlight on hover via global style */}
          <style>{`
            div:has(> .pause-bar):hover .pause-bar {
              background: #60a5fa;
            }
          `}</style>

        </div>

      </div>
    </Element>
  );
}

export default Achievements;