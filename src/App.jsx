import Navbar from "./components/Navbar";
import NeuralBackground from "./components/NeuralBackground";
import GlitchCursor from "./components/cursor";

import Home from "./sections/Home";
import Projects from "./sections/Projects";
import Achievements from "./sections/Achievements";
import Certificates from "./sections/Certificates";

function App() {

  const isTouch =
    typeof window !== "undefined" &&
    window.matchMedia("(hover: none)").matches;

  return (

    <div className="relative bg-white w-full min-h-screen overflow-x-hidden">

      {/* Glitch cursor — desktop only */}
      {!isTouch && <GlitchCursor />}

      {/* Neural Network Background */}
      <NeuralBackground />

      {/* Navbar always above content */}
      <div className="relative z-50">
        <Navbar />
      </div>

      {/* Main content */}
      <main className="relative z-10">
        <Home />
        <Achievements />
        <Projects />
        <Certificates />
      </main>

    </div>

  );

}

export default App;