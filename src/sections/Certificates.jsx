import { Element } from "react-scroll";
import { motion } from "framer-motion";

function Certificates() {

  const certificates = [

    {
      title: "AWS Cloud Practitioner",
      desc: "Certification validating foundational knowledge of AWS cloud services and architecture.",
      img: "/images/aws.png"
    },

    {
      title: "Machine Learning Specialization",
      desc: "Comprehensive training covering supervised learning, neural networks and ML systems.",
      img: "/images/ml.png"
    },

    {
      title: "Hackathon Finalist",
      desc: "Recognized finalist in a national level hackathon for building an AI driven solution.",
      img: "/images/hackathon.png"
    },

    {
      title: "Data Structures & Algorithms",
      desc: "Certification demonstrating strong algorithmic and problem solving skills.",
      img: "/images/dsa.png"
    }

  ];

  const duplicated = [...certificates, ...certificates];

  return (

    <Element
      name="certificates"
      id="certificates"
      className="relative bg-black text-white min-h-screen pt-40 pb-40 overflow-hidden"
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


        {/* SCROLLING CERTIFICATES */}

        <div className="relative w-full overflow-hidden">

          <motion.div
            className="flex gap-10"
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
                className="min-w-[380px] bg-neutral-900 border border-neutral-700 rounded-2xl p-6 shadow-xl"
              >

                <div className="flex flex-col gap-6">

                  <img
                    src={cert.img}
                    alt={cert.title}
                    className="w-full h-[180px] object-cover rounded-lg"
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

      </div>

    </Element>

  );

}

export default Certificates;