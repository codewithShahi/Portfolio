import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import proj1 from "../assets/images/proj9.png";
import proj2 from "../assets/images/proj11.png";
import proj3 from "../assets/images/proj12.png";
import { HiOutlineExternalLink } from "react-icons/hi";
import { FiChevronDown } from "react-icons/fi";

const projects = [
  {
    title: "Smart Digital Solutions",
    desc: "Contributed to the front-end development of Smart Digital Solutions, implementing responsive layouts, UX/UI designs, and ensuring cross-device compatibility to enhance visual appeal and user experience.",
    devstack: "React, Bootstrap",
    link: "https://smartdigitalsolutions.com.au",
    src: proj1,
    type: "frontend",
  },
  {
    title: "PHP Travel Pages",
    desc: "Developed and customized multiple pages of the PHPTravels project, working on front-end design and back-end integration to enhance functionality and improve user experience.",
    devstack: "Bootstrap",
    link: "https://phptravels.com/",
    src: proj2,
    type: "frontend",
  },
  {
    title: "Portfolio Website",
    desc: "Designed and developed my personal portfolio, Shahzar Ahmad | Frontend Developer, showcasing projects, skills, and interactive UI. Emphasis on clean responsive design and modern frontend best practices.",
    devstack: "React, Tailwind",
    link: "https://shahzarahmadlive.vercel.app/",
    src: proj3,
    type: "frontend",
  },
  {
    title: "Edu Growth",
    desc: "Collaborated on the EduGrowth programs page, implementing front-end features for enhanced layout structure, responsive design, and improved readability across devices.",
    devstack: "React, Tailwind",
    link: "https://edugrowth.org.au/programs/?gad_source=1&gad_campaignid=13091370394&gbraid=0AAAAABj9aP75gv20TyVgrNIiDGEckUF-l&gclid=CjwKCAjwz5nGBhBBEiwA-W6XRATBdoS8CCzpdekBZ3yY54IKdi4wcvJBWOegjRvUn7mnVvBeqRb12BoCOlwQAvD_BwE",
    src: proj1,
    type: "frontend",
  },
];

export const Portfolio = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="text-white py-24 md:py-64" id="portfolio">
      <div className="container mx-auto px-4">
        <h2 className="text-6xl font-bold text-center mb-16">
          Selected <span className="text-emerald-300">Projects</span>
        </h2>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div
                className="p-6 flex justify-between items-center cursor-pointer bg-black/20 border border-white/10"
                onClick={() => toggleExpand(index)}
              >
                <h3 className="text-4xl font-semibold">{project.title}</h3>
                <div className="flex items-center space-x-4">
                  <span className="text-3xl font-light text-emerald-300">
                    0{index + 1}
                  </span>
                  <FiChevronDown
                    className={`w-6 h-6 transform transition-transform ${
                      expandedIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </div>

              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6 bg-black/20 border border-white/10"
                  >
                    <div className="flex flex-col md:flex-row gap-8">
                      <img
                        src={project.src}
                        alt={project.title}
                        className="w-full md:w-1/2 h-64 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <p className="text-white/70 mb-4">{project.desc}</p>
                        <p className="text-emerald-300 font-medium mb-2">
                          Stack: {project.devstack}
                        </p>
                        <p className="text-emerald-400/60 font-medium mb-4 capitalize">
                          Type: {project.type}
                        </p>
                        <div className="flex justify-start items-center space-x-4">
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-emerald-400 hover:text-blue-300 transition-colors text-2xl"
                          >
                            <HiOutlineExternalLink />
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
