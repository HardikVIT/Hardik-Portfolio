import { Element } from "react-scroll";

function Certificates() {

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

  /* Duplicate once — CSS marquee scrolls exactly one set width then loops */
  const duplicated = [...certificates, ...certificates];

  return (

    <Element
      name="certificates"
      id="certificates"
      className="relative bg-black text-white min-h-screen pt-40 pb-40"
    >

      {/* ── CSS keyframes injected inline ── */}
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .marquee-track {
          display: flex;
          gap: 2rem;
          width: max-content;
          animation: marquee 30s linear infinite;
        }

        .marquee-track:hover {
          animation-play-state: paused;
        }

        .cert-card {
          min-width: 320px;
          background: #171717;
          border: 1px solid #404040;
          border-radius: 1rem;
          padding: 1.25rem;
          box-shadow: 0 10px 30px rgba(0,0,0,0.4);
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
          transform-origin: center center;
          position: relative;
          z-index: 1;
        }

        .cert-card:hover {
          transform: scale(1.06) translateY(-8px);
          box-shadow: 0 30px 60px rgba(0,0,0,0.7);
          border-color: #a855f7;
          z-index: 50;
        }

        /* Wrapper needs overflow visible so zoomed cards aren't clipped */
        .marquee-outer {
          overflow: hidden;
          padding-top: 20px;
          padding-bottom: 20px;
          /* overflow-y visible so hover zoom shows above */
          -webkit-mask-image: linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%);
          mask-image: linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%);
        }
      `}</style>

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

      </div>

      {/* MARQUEE — full width, outside the max-w container so edge fade works */}
      <div className="marquee-outer w-full">

        <div className="marquee-track">

          {duplicated.map((cert, i) => (

            <div key={i} className="cert-card">

              <div className="flex flex-col gap-4">

                {/* Image */}
                <div
                  style={{
                    width: "100%",
                    height: "170px",
                    background: "#fff",
                    borderRadius: "0.5rem",
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "0.5rem",
                  }}
                >
                  <img
                    src={cert.img}
                    alt={cert.title}
                    style={{ width: "100%", height: "100%", objectFit: "contain" }}
                  />
                </div>

                {/* Title */}
                <h3 style={{ fontSize: "0.95rem", fontWeight: 600, lineHeight: 1.4, color: "#f5f5f5" }}>
                  {cert.title}
                </h3>

                {/* Desc */}
                <p style={{ fontSize: "0.75rem", color: "#a3a3a3", lineHeight: 1.6 }}>
                  {cert.desc}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* SCROLL HINT */}
      <p className="text-center text-xs text-neutral-500 mt-8 tracking-widest">
        HOVER TO PAUSE
      </p>

    </Element>

  );

}

export default Certificates;