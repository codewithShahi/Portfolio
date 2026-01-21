import { motion } from "framer-motion"; // Sirf subtle fade-in ke liye
import profilepic from "../assets/images/profilepic.png";
import { FiArrowDownRight } from "react-icons/fi";

export const Hero = () => {
  return (
    <div id="home" className="relative overflow-hidden min-h-screen text-white bg-black flex flex-col items-center justify-center">

      {/* --- THE PLANET CURVE (Exact SS Style) --- */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className="absolute bottom-[-40%] left-1/2 -translate-x-1/2 w-[200%] h-[100%] rounded-[100%] bg-black border-t-[1.5px] border-emerald-500/40 shadow-[0_-40px_100px_rgba(52,251,142,0.55)]"
          style={{
            background: "radial-gradient(circle at 50% 0%, rgba(16,185,129,0.1) 0%, transparent 60%)"
          }}
        />
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className="container relative mx-auto px-4 z-10 flex flex-col items-center pt-28">

        {/* Available for New Projects Badge */}
        <div className=" px-4 py-1.5 border border-emerald-500/30 bg-emerald-500/5 rounded-full text-emerald-300 text-[10px] md:text-xs font-mono tracking-widest uppercase flex items-center gap-3 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Available for New Projects
        </div>

        {/* Profile Image */}
        <div className="relative mb-6">
          <img
            src={profilepic}
            alt="Shahzar Ahmad"
            className="w-[160px] md:w-[210px] drop-shadow-[0_0_40px_rgba(52,251,142,0.1)]"
          />
        </div>

        {/* Text Section */}
        <div className="text-center">
          <h2 className="text-3xl md:text-6xl font-bold mb-1 tracking-tight text-white/90">
            Hi, I am
          </h2>
          <h1 className="text-5xl md:text-[100px] font-extrabold tracking-tighter mb-6 leading-none uppercase">
            Shahzar <span className="text-emerald-400">Ahmad</span>
          </h1>

          <p className="text-lg md:text-2xl pt-4 text-white/50 max-w-2xl mx-auto leading-relaxed mb-12 px-4 font-light">

            <span className="text-white font-medium italic">Frontend Architect & SQA Engineer</span>.

            Engineering flawless interfaces with Next.js, Angular, and Custom CMS.

          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-5 justify-center items-center mt-12">
          <a
            href="#portfolio"
            className="px-8 py-4 bg-emerald-400 text-black font-bold rounded-2xl flex items-center gap-2 shadow-[0_0_25px_rgba(52,251,142,0.3)] hover:bg-emerald-300 transition-all"
          >
            Selected Projects <FiArrowDownRight size={22} />
          </a>

          <a
            href="#contact"
            className="px-8 py-4 border border-white/20 bg-white/5 backdrop-blur-md rounded-2xl font-bold hover:bg-white/10 transition-all"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Static Decorative Line (Bottom) */}
      <div className="absolute bottom-8 flex flex-col items-center gap-3 opacity-20 ">
        <div className="w-[1px] h-14 bg-gradient-to-b from-emerald-500 to-transparent"></div>
      </div>

    </div>
  );
};