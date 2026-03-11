import { Element } from "react-scroll";
import { motion } from "framer-motion";

function Certificates() {

  const certificates = [

    {
      title: "AWS Cloud Practitioner",
      desc: "Certification validating foundational knowledge of AWS cloud services and architecture.",
      img: "/images/aws.png",
      link: "#"
    },

    {
      title: "Machine Learning Specialization",
      desc: "Comprehensive training covering supervised learning, neural networks and ML systems.",
      img: "/images/ml.png",
      link: "#"
    },

    {
      title: "Hackathon Finalist",
      desc: "Recognized finalist in a national level hackathon for building an AI driven solution.",
      img: "/images/hackathon.png",
      link: "#"
    },

    {
      title: "Data Structures & Algorithms",
      desc: "Certification demonstrating strong algorithmic and problem solving skills.",
      img: "/images/dsa.png",
      link: "#"
    }

  ];


  return (

    <Element
      name="certificates"
      id="certificates"
      className="relative bg-black text-white min-h-screen pt-40 pb-40"
    >

      <div className="max-w-[1400px] mx-auto px-10">


        {/* SECTION INTRO */}

        <motion.div
          initial={{ opacity: 0, x: -250 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.1 }}
          viewport={{ once: true }}
          className="max-w-4xl mb-24"
        >

          <p className="text-sm tracking-widest text-neutral-400 mb-6">
            CERTIFICATIONS / ACHIEVEMENTS
          </p>

          <h1 className="text-[4rem] md:text-[6rem] font-semibold leading-tight text-neutral-100 mb-10">
            Continuous Learning. <br />
            Verified Skills. <br />
            Real Impact.
          </h1>

          <p className="text-lg text-neutral-400 leading-relaxed max-w-3xl">
            My certifications and achievements represent my dedication
            to continuous learning and technical excellence. From cloud
            computing to machine learning and competitive programming,
            these milestones reflect my commitment to building impactful
            and scalable systems.
          </p>

        </motion.div>


        {/* CERTIFICATE CARDS */}

        <div className="grid md:grid-cols-3 gap-12">

          {certificates.map((cert, i) => (

            <a
              key={i}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
            >

              <motion.div
                whileHover={{ scale: 1.05, y: -12 }}
                transition={{ type: "spring", stiffness: 150 }}
                className="bg-neutral-900 border border-neutral-700 rounded-xl shadow-xl cursor-pointer overflow-hidden hover:border-blue-500"
              >

                <div className="w-full h-[200px] bg-neutral-800">

                  <img
                    src={cert.img}
                    alt={cert.title}
                    className="w-full h-full object-cover"
                  />

                </div>

                <div className="p-6">

                  <h3 className="text-xl font-semibold mb-3">
                    {cert.title}
                  </h3>

                  <p className="text-neutral-400 text-sm">
                    {cert.desc}
                  </p>

                </div>

              </motion.div>

            </a>

          ))}

        </div>

      </div>

    </Element>

  );
}

export default Certificates;