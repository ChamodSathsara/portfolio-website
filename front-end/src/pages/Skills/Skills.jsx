import React from "react";
import { motion } from "motion/react";
// icons
import { FaJava } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";

const skills = [
  {
    id: "1",
    icon: <FaJava />,
    bgColor: "#ff9ff3",
    display: "Java",
  },
  {
    id: "2",
    icon: <FaHtml5 />,
    bgColor: "#feca57",
    display: "HTML",
  },
  {
    id: "3",
    icon: <FaCss3Alt />,
    bgColor: "#ff6b6b",
    display: "CSS",
  },
  {
    id: "4",
    icon: <FaJs />,
    bgColor: "#48dbfb",
    display: "JavaScript",
  },
  {
    id: "5",
    icon: <FaReact />,
    bgColor: "#1dd1a1",
    display: "React",
  },
  {
    id: "6",
    icon: <SiMongodb />,
    bgColor: "#00d2d3",
    display: "MongoDB",
  },
  {
    id: "7",
    icon: <SiExpress />,
    bgColor: "#54a0ff",
    display: "Express",
  },
  {
    id: "8",
    icon: <FaNodeJs />,
    bgColor: "#5f27cd",
    display: "Node",
  },
  {
    id: "9",
    icon: <GrMysql />,
    bgColor: "#576574",
    display: "MySql",
  },
  {
    id: "10",
    icon: <RiTailwindCssFill />,
    bgColor: "#A3CB38",
    display: "Next.js",
  },
  {
    id: "11",
    icon: <FaBootstrap />,
    bgColor: "#D980FA",
    display: "Tailwind",
  },
  {
    id: "12",
    icon: <SiTypescript />,
    bgColor: "#006266",
    display: "Typescript",
  },
];

function Skills() {
  return (
    <div id="skills" className=" container space-y-24 mt-20">
      {/* page heading */}
      <div className="flex flex-col justify-center items-center space-y-12">
        <motion.h1 className="font-semibold text-2xl uppercase">
          My Skills
        </motion.h1>
        <motion.p
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            y: { type: "spring", stiffness: 60 },
            opacity: { duration: 0.2 },
            ease: "easeIn",
            duration: 1,
          }}
          className="w-4/5 md:w-6/12 text-center"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          omnis voluptatem veritatis iusto consequatur, dignissimos nulla ea
          ipsa cupiditate eos.
        </motion.p>
      </div>
      {/* Cards */}
      <div className="container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 ">
        {skills.map((item) => (
          <div key={item.id} className="hover:scale-125 duration-300">
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.2,
                y: { type: "spring", stiffness: 60 },
                opacity: { duration: 0.2 },
                ease: "easeIn",
                duration: 1,
              }}
              className="cursor-pointer flex gap-4 border-2 border-[#bdc3c7] rounded-lg  hover:shadow-2xl duration-300"
            >
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 0.2,
                  y: { type: "spring", stiffness: 60 },
                  opacity: { duration: 0.2 },
                  ease: "easeIn",
                  duration: 1,
                }}
                className="w-16 h-16 flex justify-center items-center rounded-md text-[#2c3e50] text-4xl  bg-primary"
                // style={{ backgroundColor: item.bgColor }}
              >
                {item.icon}
              </motion.div>
              <motion.p
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 0.2,
                  y: { type: "spring", stiffness: 60 },
                  opacity: { duration: 0.2 },
                  ease: "easeIn",
                  duration: 1,
                }}
                className="flex justify-start font-semibold items-center"
              >
                {item.display}
              </motion.p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
