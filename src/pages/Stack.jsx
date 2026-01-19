import React from 'react';
import {
  SiFramer, SiNextdotjs, SiReact, SiTailwindcss, SiAngular,
  SiShopify, SiWordpress, SiTestinglibrary, SiJira, SiTypescript
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { motion } from "framer-motion";

const stackItems = [
  // Frontend
  { id: 1, name: "Next.js", icon: <SiNextdotjs />, category: "Frontend" },
  { id: 2, name: "Angular", icon: <SiAngular />, category: "Frontend" },
  { id: 3, name: "React", icon: <SiReact />, category: "Frontend" },
  { id: 4, name: "JavaScript", icon: <IoLogoJavascript />, category: "Frontend" },
  { id: 5, name: "TypeScript", icon: <SiTypescript />, category: "Frontend" },
  // CMS & E-commerce
  { id: 6, name: "Shopify", icon: <SiShopify />, category: "CMS" },
  { id: 7, name: "WordPress", icon: <SiWordpress />, category: "CMS" },
  // SQA & Quality
  { id: 8, name: "SQA Testing", icon: <SiTestinglibrary />, category: "Quality" },
  { id: 9, name: "Jira / Tracking", icon: <SiJira />, category: "Quality" },
  // Design & Motion
  { id: 10, name: "Framer", icon: <SiFramer />, category: "Design" },
  { id: 11, name: "Tailwind", icon: <SiTailwindcss />, category: "Design" },
];

export const Stack = () => {
  return (
    <section className="py-24 max-w-[1200px] mx-auto px-4" id="stack">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="mb-16 text-center md:text-left"
      >
        <h2 className="text-7xl font-bold tracking-tighter italic opacity-50 uppercase">My Stack</h2>
        <h3 className="text-4xl font-bold -mt-8 ml-2">
          Tools & <span className="text-emerald-300">Technologies</span>
        </h3>
      </motion.div>

      {/* Bento Grid for Stack */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {stackItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: index * 0.05
            }}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
            className="group relative bg-white/5 border border-white/10 rounded-2xl p-6 h-[160px] flex flex-col items-center justify-center transition-all hover:border-emerald-300/40 hover:bg-emerald-300/5"
          >
            {/* Category Tag (Visible on Hover) */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-[8px] uppercase tracking-[0.2em] bg-emerald-300 text-black px-2 py-0.5 rounded-full font-bold">
                {item.category}
              </span>
            </div>

            {/* Icon */}
            <div className="text-5xl text-white/50 group-hover:text-emerald-300 transition-colors duration-300 mb-4">
              {item.icon}
            </div>

            {/* Label */}
            <p className="text-white/20 group-hover:text-white text-sm font-medium tracking-wide transition-colors">
              {item.name}
            </p>

            {/* Glow Effect */}
            <div className="absolute inset-0 bg-emerald-300/0 group-hover:bg-emerald-300/5 rounded-2xl blur-xl transition-all"></div>
          </motion.div>
        ))}

        {/* Custom Feature Card (Bento Style Fill) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="col-span-2 md:col-span-2 bg-gradient-to-br from-emerald-300/20 to-transparent border border-white/10 rounded-2xl p-8 flex flex-col justify-center"
        >
          <h4 className="text-2xl font-bold text-emerald-300 mb-2">Quality Driven</h4>
          <p className="text-white/50 text-xs leading-relaxed italic">
            "Combining Frontend precision with SQA rigour to deliver flawless digital solutions."
          </p>
        </motion.div>
      </div>
    </section>
  );
};