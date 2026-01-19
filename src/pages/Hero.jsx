import { motion } from "framer-motion";
import profilepic from "../assets/images/profilepic.png";
import { FiArrowDownRight } from "react-icons/fi";

export const Hero = () => {
  return (
    <div className="relative overflow-hidden min-h-screen text-white bg-black">

      {/* --- LIVE SIGNALS & ANIMATED DOTS (Background) --- */}
      <div className="absolute inset-0 z-0">
        {/* Animated Particles/Dots */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0.2, y: Math.random() * 500 }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              y: [Math.random() * 800, Math.random() * 200],
              x: [Math.random() * 100, Math.random() * -100]
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute w-1 h-1 bg-emerald-400 rounded-full shadow-[0_0_10px_#34fb8e]"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}

        {/* Pulsing Signal Glows */}
        <motion.div
          animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.2, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-emerald-500/10 blur-[120px] rounded-full"
        />
        <motion.div
          animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.3, 1] }}
          transition={{ duration: 6, repeat: Infinity, delay: 1 }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-emerald-600/10 blur-[150px] rounded-full"
        />
      </div>

      {/* --- MAIN CONTENT --- */}
      {/* pt-32 or pt-40 ensures it doesn't hide under the navbar */}
      <div className="container relative mx-auto px-4 pt-32 md:pt-28 pb-24 z-10">
        <div className="flex flex-col items-center justify-center text-center">

          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 px-4 py-1 border border-emerald-500/30 bg-emerald-500/5 rounded-full text-emerald-300 text-xs font-mono tracking-widest uppercase backdrop-blur-sm flex items-center gap-2"
          >
            {/* Blinking Dot */}
            <span className="relative flex h-2 w-2">
              <motion.span
                animate={{ scale: [1, 2, 1], opacity: [1, 0, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"
              ></motion.span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>

            Available for New Projects
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative mb-10"
          >
            <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-3xl"></div>
            <img
              src={profilepic}
              alt="Shahzar Ahmad"
              className="w-[170px] md:w-[210px] relative z-10 rounded-full border border-white/10 p-2 bg-white/5 backdrop-blur-sm"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Main Heading - Now in one line with spacing */}
            <h1 className="text-4xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-8 leading-none italic flex flex-wrap justify-center items-center gap-4 md:gap-8">
              <span>SHAHZAR</span>
              <span className="text-emerald-400">AHMAD</span>
            </h1>

            <p className="text-lg md:text-2xl text-white/50 max-w-2xl mx-auto leading-relaxed mb-12 px-4 font-light">
              <span className="text-white font-medium italic">Frontend Architect & SQA Engineer</span>.
              Engineering flawless interfaces with Next.js, Angular, and Custom CMS.
            </p>

            {/* CTAs */}
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <motion.a
                href="#portfolio"
                whileHover={{ scale: 1.05 }}
                className="px-8 py-4 bg-emerald-400 text-black font-bold rounded-2xl flex items-center gap-2 hover:bg-emerald-300 transition-all shadow-[0_0_25px_rgba(52,251,142,0.2)]"
              >
                Selected Projects <FiArrowDownRight size={20} />
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                className="px-8 py-4 border border-white/10 bg-white/5 rounded-2xl font-bold hover:bg-white/10 transition-all backdrop-blur-md"
              >
                Contact Me
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* --- SCROLL INDICATOR (Fixed Spacing) --- */}
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-24 flex flex-col items-center gap-3 text-white/20"
        >
          <span className="text-[10px] uppercase tracking-[0.4em] font-mono">Exploring Experience</span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-emerald-500/50 to-transparent"></div>
        </motion.div>
      </div>
    </div>
  );
};