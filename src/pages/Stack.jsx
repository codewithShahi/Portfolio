import { useEffect } from "react";
<<<<<<< HEAD
import { SiFramer, SiNextdotjs, SiReact, SiTailwindcss } from "react-icons/si";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
=======
import { SiFramer, SiReact } from "react-icons/si";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { IoLogoJavascript } from "react-icons/io";
>>>>>>> e93312d357e2b2675d3f553f68a4a82641df82d1
import { FaBootstrap } from "react-icons/fa";
import { FaWebflow } from "react-icons/fa6";

const stackItems = [
<<<<<<< HEAD

  {
    id: 3,
    name: "Next JS",
    icon: <SiNextdotjs size={70} />,
=======
  {
    id: 3,
    name: "JavaScript",
    icon: <IoLogoJavascript size={100} />,
>>>>>>> e93312d357e2b2675d3f553f68a4a82641df82d1
    color: "text-emerald-200",
  },
  {
    id: 3,
    name: "React",
<<<<<<< HEAD
    icon: <SiReact size={70} />,
=======
    icon: <SiReact size={100} />,
>>>>>>> e93312d357e2b2675d3f553f68a4a82641df82d1
    color: "text-emerald-200",
  },
  {
    id: 3,
    name: "Bootstrap",
<<<<<<< HEAD
    icon: <FaBootstrap size={70} />,
    color: "text-emerald-200",
  },
  {
    id: 1,
    name: "Tailwind",
    icon: <SiTailwindcss size={70} />,
=======
    icon: <FaBootstrap size={100} />,
>>>>>>> e93312d357e2b2675d3f553f68a4a82641df82d1
    color: "text-emerald-200",
  },
  {
    id: 1,
    name: "Framer",
<<<<<<< HEAD
    icon: <SiFramer size={70} />,
=======
    icon: <SiFramer size={100} />,
>>>>>>> e93312d357e2b2675d3f553f68a4a82641df82d1
    color: "text-emerald-200",
  },
  {
    id: 2,
    name: "Webflow",
<<<<<<< HEAD
    icon: <FaWebflow size={70} />,
=======
    icon: <FaWebflow size={100} />,
>>>>>>> e93312d357e2b2675d3f553f68a4a82641df82d1
    color: "text-emerald-200",
  },
];

export const Stack = () => {
  const controls = useAnimation();

  const [ref, inView] = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <section
<<<<<<< HEAD
      className="py-24 md:py-64 max-w-[1300px] mx-auto text-center"
=======
      className="py-24 md:py-64 max-w-[1200px] mx-auto text-center"
>>>>>>> e93312d357e2b2675d3f553f68a4a82641df82d1
      id="stack"
    >
      <h2 className="text-7xl text-gray-100 font-bold mb-20">My Stack</h2>
      <div className="flex flex-wrap justify-center gap-8" ref={ref}>
        {stackItems.map((item, index) => (
          <motion.div
            key={item.id}
            custom={index}
            initial="hidden"
            animate={controls}
            variants={{
              hidden: (index) => ({
                opacity: 0,
                y: index % 2 === 0 ? -100 : 100,
              }),
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 1.5,
                },
              },
            }}
<<<<<<< HEAD
            className="bg-white/10 flex flex-col items-center justify-center w-[160px] h-[160px] rounded-xl p-4 shadow-lg hover:shadow-2xl transition-shadow duration-300"
=======
            className="bg-white/10 flex flex-col items-center justify-center w-[200px] h-[200px] rounded-xl p-4 shadow-lg hover:shadow-2xl transition-shadow duration-300"
>>>>>>> e93312d357e2b2675d3f553f68a4a82641df82d1
          >
            <div className={`mb-4 ${item.color}`}>{item.icon}</div>
            <p className="text-white/20 text-xl">{item.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
