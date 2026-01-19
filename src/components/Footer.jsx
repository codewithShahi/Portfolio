import { AiFillGithub } from "react-icons/ai";
import { IoLogoLinkedin } from "react-icons/io";
import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <footer className="py-12 md:py-20 border-t border-white/10 bg-black overflow-hidden" id="contact">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          {/* Left Side: Connect Heading & Email */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            {/* Heading: Adjusted for Mobile */}
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 md:mb-10 text-white/40 italic tracking-tighter">
              LET'S <span className="text-emerald-300 opacity-100">CONNECT</span>
            </h2>

            <div className="group inline-block w-full md:w-auto">
              <p className="text-emerald-300 text-[10px] md:text-sm font-mono mb-2 uppercase tracking-[0.3em]">
                Available for projects
              </p>
              <a
                className="text-xl sm:text-2xl md:text-5xl font-bold text-white group-hover:text-emerald-300 transition-colors duration-300 break-words"
                href="mailto:shahzarahmadlive@gmail.com"
              >
                shahzarahmadlive<span className="text-emerald-300">@</span>gmail.com
              </a>
              <div className="h-1 w-0 group-hover:w-full bg-emerald-300 transition-all duration-500 mt-2 hidden md:block"></div>
            </div>
          </motion.div>

          {/* Right Side: Phone & Location */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center md:items-end text-center md:text-right"
          >
            <div className="mb-8 md:mb-10">
              <p className="text-white/50 uppercase tracking-widest text-[10px] mb-3 font-mono">Quick Contact</p>
              <a
                href="tel:+923042831999"
                className="text-2xl md:text-3xl font-bold text-white hover:text-emerald-300 transition-colors"
              >
                +92 304 2831999
              </a>
            </div>

            <div>
              <p className="text-white/50 uppercase tracking-widest text-[10px] mb-1 font-mono">Based in</p>
              <p className="text-xl md:text-2xl font-bold text-white">Lahore, Pakistan</p>
              <p className="text-emerald-300/60 text-xs md:text-sm italic font-serif">GMT +5 (Available Worldwide)</p>
            </div>
          </motion.div>
        </div>

        {/* Massive Background Branding: Optimized Scaling */}
        <div className="relative z-0 text-center mt-12 md:mt-20 select-none pointer-events-none">
          <h1 className="hidden md:block text-[10rem] lg:text-[13rem] font-black text-white/[0.05] uppercase leading-none italic">
            Shahzar Ahmad
          </h1>
          <h1 className="md:hidden text-6xl font-black text-white/[0.03] uppercase leading-none italic tracking-tighter">
            SHAHZAR<br />AHMAD
          </h1>
        </div>

        {/* Bottom Bar: Stacked for Mobile */}
        <div className="mt-12 md:mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start text-center md:text-left order-2 md:order-1">
            <p className="text-white/60 text-[10px] font-mono tracking-widest uppercase">
              &copy; 2026 Crafted by Shahzar Ahmad
            </p>
            <p className="text-[9px] md:text-[10px] text-white/40 uppercase mt-2 tracking-tighter">
              Frontend Engineer • SQA Expert • CMS Specialist
            </p>
          </div>

          <ul className="flex gap-8 items-center order-1 md:order-2">
            <motion.a
              whileHover={{ y: -5, color: "#6ee7b7" }}
              whileTap={{ scale: 0.9 }}
              href="https://github.com/codewithShahi"
              className="text-white/50 transition-colors"
              aria-label="GitHub"
            >
              <AiFillGithub size={30} className="md:w-[35px] md:h-[35px]" />
            </motion.a>
            <motion.a
              whileHover={{ y: -5, color: "#6ee7b7" }}
              whileTap={{ scale: 0.9 }}
              href="https://www.linkedin.com/in/shahzar-ahmad-shahidev"
              className="text-white/50 transition-colors"
              aria-label="LinkedIn"
            >
              <IoLogoLinkedin size={30} className="md:w-[35px] md:h-[35px]" />
            </motion.a>
          </ul>
        </div>
      </div>
    </footer>
  );
};