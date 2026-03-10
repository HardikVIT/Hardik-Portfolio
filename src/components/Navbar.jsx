import { Link } from "react-scroll";
import { useState } from "react";

function Navbar() {

  const [active, setActive] = useState("home");

  const navItems = [
    { id: "home", label: "Home" },
    { id: "projects", label: "Projects" },
    { id: "certifications", label: "Certifications" },
    { id: "other", label: "Other" }
  ];

  return (
    <nav className="fixed top-0 w-full z-50">

      {/* glass container */}
      <div className="mx-auto max-w-[1400px] mt-4 px-6">

        <div className="flex items-center justify-between h-16 px-8 rounded-2xl
        backdrop-blur-xl bg-white/5 border border-white/10
        shadow-[0_0_20px_rgba(59,130,246,0.15)]">

          {/* Logo */}
          <div className="text-blue-400 font-semibold text-lg tracking-wider">
          </div>

          {/* Nav Items */}
          <ul className="flex gap-8 text-gray-300 text-[15px] font-medium">

            {navItems.map((item) => (
              <li key={item.id} className="relative group cursor-pointer">

                <Link
                  to={item.id}
                  smooth={true}
                  duration={600}
                  offset={-80}
                  onSetActive={() => setActive(item.id)}
                  className={`transition duration-300 ${
                    active === item.id
                      ? "text-blue-400"
                      : "hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>

                {/* animated underline */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-blue-400 transition-all duration-300
                  ${
                    active === item.id
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />

              </li>
            ))}

          </ul>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;