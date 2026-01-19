import React from 'react';
import { motion } from "framer-motion";
import proj1 from "../assets/images/proj9.png";
import proj2 from "../assets/images/proj11.png";
import proj3 from "../assets/images/proj12.png";
import { HiOutlineExternalLink } from "react-icons/hi";

const projects = [
  {
    title: "Top Tier Travel",
    desc: "Modern travel booking frontend with Next.js.",
    devstack: "Next.js, TailwindCSS",
    link: "https://toptiertravel.vip/",
    src: proj1,
    type: "Frontend",
    size: "md:col-span-2"
  },
  {
    title: "CVify AI",
    desc: "AI-powered resume builder for professional CVs.",
    devstack: "React, TailwindCSS",
    link: "https://cvify-aibuilder.vercel.app/",
    src: proj1,
    type: "AI / Frontend",
    size: "md:col-span-1"
  },
  {
    title: "Smart Digital",
    desc: "Enterprise-grade UI for digital solutions.",
    devstack: "React, Bootstrap",
    link: "https://smartdigitalsolutions.com.au",
    src: proj1,
    type: "Frontend",
    size: "md:col-span-1"
  },
  {
    title: "PHPTravels",
    desc: "Custom booking engine pages and UX optimization.",
    devstack: "Bootstrap, PHP",
    link: "https://phptravels.com/",
    src: proj2,
    type: "Fullstack Contrib",
    size: "md:col-span-2"
  },
  {
    title: "Personal Portfolio",
    desc: "Premium portfolio with high-end animations.",
    devstack: "React, Framer Motion",
    link: "https://shahzarahmadlive.vercel.app/",
    src: proj3,
    type: "Frontend",
    size: "md:col-span-1"
  },
  {
    title: "Edu Growth",
    desc: "Educational platform with focus on readability.",
    devstack: "React, Tailwind",
    link: "https://edugrowth.org.au/",
    src: proj1,
    type: "Frontend",
    size: "md:col-span-1"
  },
];

export const Portfolio = () => {
  return (
    <section className="text-white py-24" id="portfolio">
      <div className="container mx-auto px-4 max-w-[1200px]">

        {/* Header - Matching Bento Theme */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16 text-center md:text-left" // Mobile par center, desktop par left
        >
          {/* Back-text "PORTFOLIO" */}
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter italic opacity-20">
            PORTFOLIO
          </h2>

          {/* Front-text "Selected Projects" */}
          <h3 className="text-2xl md:text-4xl font-bold -mt-6 md:-mt-8 ml-0 md:ml-2">
            Selected <span className="text-emerald-300">Projects</span>
          </h3>
        </motion.div>

        {/* Bento Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`${project.size} group relative bg-white/5 border border-white/10 rounded-[2rem] overflow-hidden hover:border-emerald-300/40 transition-all duration-500`}
            >
              {/* Project Image */}
              <div className="h-64 md:h-full w-full overflow-hidden">
                <img
                  src={project.src}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 opacity-50 group-hover:opacity-100"
                />
              </div>

              {/* Overlay Content (Bento Style) */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                <div className="flex justify-between items-end">
                  <div>
                    <span className="text-xs font-mono text-emerald-300 mb-2 block tracking-widest uppercase">
                      {project.type}
                    </span>
                    <h3 className="text-3xl font-bold mb-2 group-hover:text-emerald-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-white/60 text-sm max-w-[250px] leading-snug transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      {project.desc}
                    </p>
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-emerald-300 rounded-full text-black hover:bg-emerald-400 transform scale-0 group-hover:scale-100 transition-all duration-500 flex items-center justify-center shadow-lg shadow-emerald-300/20"
                  >
                    <HiOutlineExternalLink size={24} />
                  </a>
                </div>

                {/* Tech Stack Badges (Visible on hover) */}
                <div className="mt-4 flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                  {project.devstack.split(',').map((tech, i) => (
                    <span key={i} className="text-[10px] border border-white/20 bg-white/5 px-2 py-1 rounded-md uppercase tracking-tighter">
                      {tech.trim()}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};