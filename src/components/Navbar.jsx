import { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { title: "Home", path: "#home" },
  { title: "About", path: "#about" },
  { title: "Services", path: "#services" },
  { title: "Portfolio", path: "#portfolio" },
  { title: "Stack", path: "#stack" },
  { title: "Contact", path: "#contact" },
];

export const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");
  const [scrolled, setScrolled] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
    if (!nav) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  };

  const closeNav = () => {
    setNav(false);
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fixed Scroll Logic
  const handleLinkClick = (e, path) => {
    e.preventDefault(); // Default anchor behavior ko har haal mein rokein
    setActiveLink(path);
    closeNav();

    if (path === "#home") {
      // Force scroll to the very top of the window
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    } else {
      // Standard section scroll
      const targetElement = document.querySelector(path);
      if (targetElement) {
        const offset = 80; // Navbar height adjust karne ke liye
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <div className="z-[100] fixed flex justify-center w-full transition-all duration-300">

      {/* --- Desktop Nav --- */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`mt-6 border border-white/10 rounded-[2.5rem] hidden md:flex items-center justify-center px-1 py-1 transition-all duration-500 ${scrolled
          ? "bg-black/40 backdrop-blur-2xl shadow-[0_0_30px_rgba(52,251,142,0.1)]"
          : "bg-transparent"
          }`}
      >
        <div className={`flex items-center justify-center px-8 py-3 rounded-[2.5rem] transition-all duration-500 ${scrolled
          ? "bg-gradient-to-r from-emerald-500/10 via-white/5 to-emerald-500/10"
          : "bg-white/5 backdrop-blur-md"
          }`}>
          <ul className="flex flex-row items-center space-x-10 text-xs font-bold tracking-[0.2em] uppercase font-mono">
            {navLinks.map((link, index) => (
              <li key={index} className="relative group">
                <a
                  href={link.path}
                  onClick={(e) => handleLinkClick(e, link.path)}
                  className={`transition-all duration-300 relative z-10 ${activeLink === link.path ? "text-emerald-300" : "text-white/50 hover:text-white"
                    }`}
                >
                  {link.title}
                </a>
                {activeLink === link.path && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute -bottom-2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-emerald-300 to-transparent shadow-[0_5px_15px_rgba(110,231,183,0.5)]"
                  />
                )}
              </li>
            ))}
          </ul>
        </div>
      </motion.nav>

      {/* --- Mobile Menu Icon --- */}
      <div
        onClick={toggleNav}
        className="md:hidden fixed top-6 right-6 z-[120] p-[1px] rounded-2xl bg-gradient-to-br from-emerald-400/50 to-transparent shadow-lg cursor-pointer"
      >
        <div className="bg-black/90 backdrop-blur-lg p-3 rounded-2xl text-emerald-300">
          {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </div>
      </div>

      {/* --- Mobile Nav Overlay --- */}
      <AnimatePresence>
        {nav && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 w-full h-screen bg-black z-[110] flex flex-col items-center justify-center"
          >
            <ul className="relative z-20 space-y-4 text-center w-full px-6">
              {navLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                >
                  <a
                    href={link.path}
                    onClick={(e) => handleLinkClick(e, link.path)}
                    className={`text-4xl sm:text-5xl font-black italic tracking-tighter transition-all block py-2 ${activeLink === link.path
                      ? "text-emerald-300 scale-110"
                      : "text-white/20 hover:text-white/40"
                      }`}
                  >
                    {link.title}
                  </a>
                </motion.li>
              ))}
            </ul>
            {/* Branding for Mobile Menu Footer */}
            <div className="absolute bottom-4 text-white/20 font-mono text-[10px] tracking-[0.5em] uppercase">
              Shahzar Ahmad © 2026
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};