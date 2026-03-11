import { Link } from "react-scroll";
import { useState, useEffect, useRef } from "react";

function Navbar() {

  const [active, setActive] = useState("home");
  const [visible, setVisible] = useState(true);

  const lastScroll = useRef(0);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "achievements", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "certificates", label: "Certificates" },
  ];

  useEffect(() => {

    const handleScroll = () => {

      const currentScroll = window.scrollY;

      // always show when near top
      if (currentScroll < 80) {
        setVisible(true);
      }
      // scrolling down
      else if (currentScroll > lastScroll.current) {
        setVisible(false);
      }
      // scrolling up
      else {
        setVisible(true);
      }

      lastScroll.current = currentScroll;

    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500
      ${visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"}
      `}
    >

      {/* glass container */}
      <div className="mx-auto max-w-[1400px] mt-4 px-6">

        <div className="flex items-center justify-between h-16 px-10 rounded-2xl
        backdrop-blur-xl bg-blue-300 border border-white/10
        shadow-[0_0_20px_rgba(59,130,246,0.15)]">

          {/* Logo */}
          <div className="text-blue-400 font-semibold text-lg tracking-wider">
          </div>

          {/* Nav Items */}
          <ul className="flex gap-8 text-grey-400 text-[15px] font-medium">

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