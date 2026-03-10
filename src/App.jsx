import Navbar from "./components/Navbar";
import NeuralBackground from "./components/NeuralBackground";

import Home from "./sections/Home";
import Projects from "./sections/Projects";
import Certifications from "./sections/Certifications";

function App() {

  return (

    <div className="relative w-full min-h-screen overflow-x-hidden">

      {/* Neural Network Background */}
      <NeuralBackground />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10">

        <Home />
        <Projects />
        <Certifications />

      </main>

    </div>

  );

}

export default App;