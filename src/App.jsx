import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import Projects from "./sections/Projects";
import Certifications from "./sections/Certifications";
import Other from "./sections/Other";

function App() {
  return (
    <div className="bg-black text-white overflow-x-hidden">

      <Navbar />

      <Home />

      <Projects />

      <Certifications />

      <Other />

    </div>
  );
}

export default App;