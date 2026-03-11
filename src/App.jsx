import Navbar from "./components/Navbar";
import NeuralBackground from "./components/NeuralBackground";

import Home from "./sections/Home";
import Projects from "./sections/Projects";
import Achievements from "./sections/Achievements";
import Certificates from "./sections/Certificates";

function App() {

  return (

    <div className="relative bg-white w-full min-h-screen overflow-x-hidden">

      {/* Neural Network Background */}
      <NeuralBackground />

      {/* Navbar always above content */}
      <div className="relative z-50">
        <Navbar />
      </div>

      {/* Main content */}
      <main className="relative z-10">

        {/* Hero section with laptop zoom */}
        <Home />
        {/* Full page projects (appears after zoom transition) */}
        <Achievements />
        <Projects />

        {/* Other sections */}
        <Certificates />

      </main>

    </div>

  );

}

export default App;