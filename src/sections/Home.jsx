import { Element } from "react-scroll";
import { TypeAnimation } from "react-type-animation";
import LaptopScene from "../three/LaptopScene";

function Home() {

  return (

    <Element
      name="home"
      id="home"
      className="relative w-full min-h-[300vh]"
    >

      {/* STICKY VIEWPORT */}
      <div className="relative h-screen flex items-center justify-center">

        {/* LEFT TEXT */}
        <div className="absolute left-20 top-[35%] max-w-lg z-20">

          <h1 className="text-6xl font-bold text-blue-400 drop-shadow-[0_0_15px_#3b82f6]">
            Hi, I'm
            <br/>
            Hardik Sondhi
          </h1>

          <div className="mt-6 text-2xl text-blue-400">
            <TypeAnimation
              sequence={[
                "AI Engineer",
                1500,
                "Software Developer",
                1500,
                "Machine Learning Enthusiast",
                1500,
                "Upcoming Specialist @ Infosys",
                2000
              ]}
              speed={50}
              repeat={Infinity}
            />
          </div>

          <p className="text-gray-400 mt-6 max-w-md">
            Building intelligent systems, full-stack applications, and
            scalable machine learning solutions.
          </p>

        </div>

        {/* LAPTOP */}
        <div className="absolute inset-0 flex items-center justify-center">
          <LaptopScene/>
        </div>

        {/* RIGHT TEXT */}
        <div className="absolute right-20 top-[40%] max-w-md text-right z-20">

          <h2 className="text-4xl text-blue-400 mb-4">
            Portfolio
          </h2>

          <p className="text-gray-400">
            Scroll to explore my projects, certifications,
            and work in AI, robotics, and full-stack development.
          </p>

        </div>

      </div>

    </Element>

  );

}

export default Home;