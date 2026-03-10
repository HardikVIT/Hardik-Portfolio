import { Link } from "react-scroll";

function Navbar() {
  return (
    <nav className="fixed top-0 w-full h-18 bg-blue-400 border-b border-blue-400 flex items-center justify-between px-10 z-50 text-blue-400 leading-tight drop-shadow-[0_0_12px_#3b82f6]">

      {/* Logo */}
      <div className="text-blue-400 text-xl font-bold tracking-wider">
      </div>

      {/* Navigation Links */}
      <ul className="flex gap-10 text-white text-lg font-semibold">

        <li className="cursor-pointer hover:text-blue-400 transition ">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>

        <li className="cursor-pointer hover:text-blue-400 transition">
          <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>

        <li className="cursor-pointer hover:text-blue-400 transition">
          <Link to="certifications" smooth={true} duration={500}>
            Certifications
          </Link>
        </li>

        <li className="cursor-pointer hover:text-blue-400 transition">
          <Link to="other" smooth={true} duration={500}>
            Other
          </Link>
        </li>

      </ul>

    </nav>
  );
}

export default Navbar;