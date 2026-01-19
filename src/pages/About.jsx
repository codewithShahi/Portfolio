import React from 'react';
import { motion } from "framer-motion";
import project1 from "../assets/images/proj5.png";

export const About = () => {
  return (
    <section id="about" className="text-white px-6 py-20 max-w-[1200px] mx-auto overflow-hidden">

      {/* Section Heading - Premium Bento Theme */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative mb-16 md:mb-28 flex flex-col items-center justify-center"
      >


        {/* Main Heading Container */}
        <div className="relative z-10 text-center">
          {/* Small Tagline above heading */}
          <motion.p
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="text-emerald-300 font-mono text-xs md:text-sm tracking-[0.5em] uppercase mb-4"
          >
            get to know
          </motion.p>

          <h3 className="text-5xl md:text-8xl font-bold tracking-tighter italic text-white flex flex-col md:flex-row items-center gap-0 md:gap-6">
            <span className="opacity-40">ABOUT</span>
            <span className="text-emerald-300 relative">
              ME
              {/* Decorative Glow Dot */}
              <span className="absolute -top-2 -right-6 w-3 h-3 bg-emerald-400 rounded-full blur-[2px] hidden md:block animate-pulse"></span>
            </span>
          </h3>

          {/* Modern Line with Multi-color Gradient */}

        </div>
      </motion.div>

      {/* Bento Grid Layout 
          - Mobile: Single Column (grid-cols-1), auto height
          - Desktop: 12 Columns, fixed rows
      */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:auto-rows-[200px]">

        {/* Widget 1: Identity (Flexible height on mobile) */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="md:col-span-8 md:row-span-2 border border-white/10 rounded-3xl p-6 md:p-10 bg-white/5 backdrop-blur-sm flex flex-col justify-center relative overflow-hidden min-h-[300px] md:min-h-full"
        >
          <div className="absolute top-0 right-0 p-4 opacity-5 md:opacity-10 text-6xl md:text-8xl font-black italic select-none pointer-events-none">EXPERT</div>
          <h3 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 text-emerald-300">Hybrid Developer & Quality Advocate</h3>
          <p className="text-white/60 text-base md:text-lg leading-relaxed md:max-w-[90%]">
            I specialize in crafting high-end **Frontend experiences** using Next.js & Angular, while ensuring
            rock-solid reliability through **SQA expertise**. My versatility extends to building premium
            **Custom Shopify & WordPress** themes.
          </p>
        </motion.div>

        {/* Widget 2: Proficiency (Vertical Box - Auto height on mobile) */}
        <motion.div
          whileHover={{ scale: 0.99 }}
          className="md:col-span-4 md:row-span-3 border border-emerald-300/20 rounded-3xl p-6 bg-emerald-300/5 flex flex-col justify-between gap-8 md:gap-0 min-h-[350px] md:min-h-full"
        >
          <h3 className="text-xl md:text-2xl font-bold italic">Proficiency</h3>
          <div className="space-y-6 md:space-y-8">
            {[
              { label: "FRONTEND", val: "95%", color: "bg-emerald-300" },
              { label: "SQA / TESTING", val: "92%", color: "bg-emerald-400" },
              { label: "CUSTOM CMS", val: "88%", color: "bg-emerald-500" }
            ].map((item, i) => (
              <div key={i}>
                <div className="flex justify-between text-[10px] md:text-xs mb-2 font-mono tracking-widest text-emerald-300/70">
                  <span>{item.label}</span>
                  <span>{item.val}</span>
                </div>
                <div className="h-[2px] w-full bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: item.val }}
                    transition={{ duration: 1.5, delay: i * 0.2 }}
                    className={`h-full ${item.color}`}
                  />
                </div>
              </div>
            ))}
          </div>
          <p className="text-[10px] text-white/30 uppercase tracking-[0.2em] text-center">Standardized Excellence</p>
        </motion.div>

        {/* Widget 3: Visual/Image Box (Hidden or resized on mobile) */}
        <motion.div
          className="md:col-span-4 md:row-span-2 border border-white/10 rounded-3xl overflow-hidden relative group h-[250px] md:h-full"
        >
          <img src={project1} alt="Coding" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all duration-500"></div>
          <div className="absolute bottom-4 left-4 border border-white/20 backdrop-blur-md px-3 py-1 rounded-lg text-[10px]">PREMIUM BUILDS</div>
        </motion.div>

        {/* Widget 4: Tech Stack (Better wrapping on mobile) */}
        <motion.div
          className="md:col-span-4 md:row-span-1 border border-white/10 rounded-3xl p-6 bg-white/5 flex flex-wrap gap-2 items-center justify-center h-auto md:h-full"
        >
          {["Next.js", "Angular", "React", "Framer", "SQA", "Shopify", "WordPress"].map((tech, i) => (
            <span key={i} className="px-3 py-1 border border-white/10 rounded-full text-[10px] md:text-xs font-mono text-white/50 hover:border-emerald-300 hover:text-emerald-300 transition-all">
              {tech}
            </span>
          ))}
        </motion.div>

        {/* Widget 5: Goals/Mission */}
        <motion.div
          className="md:col-span-4 md:row-span-1 border border-white/10 rounded-3xl p-6 bg-gradient-to-r from-emerald-300/10 to-transparent flex items-center gap-4 h-auto md:h-full"
        >
          <div className="text-3xl md:text-4xl text-emerald-300 italic font-black">05</div>
          <p className="text-[11px] md:text-xs text-white/50 leading-tight">
            Bridging the gap between **Creative Code** and **Quality Assurance** to build the future of the web.
          </p>
        </motion.div>

      </div>
    </section>
  );
};