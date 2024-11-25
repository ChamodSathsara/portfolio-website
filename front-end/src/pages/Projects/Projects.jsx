import React from "react";
import "./Projects.css";

import { FaCircleArrowRight } from "react-icons/fa6";

import { motion } from "motion/react";

import Project1 from "../../assets/pro1.jpg";
import Project2 from "../../assets/pro3.jpg";
import Project3 from "../../assets/pro4.jpg";
import Project4 from "../../assets/pro5.jpg";

const cards = [
  {
    id: "1",
    topic: "Vehicle Shop Website ",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid asperiores beatae earum obcaecati, ducimus quaerat ipsam delectus ipsum numquam sequi!",
    link: "/",
    image: Project1,
  },
  {
    id: "2",
    topic: "Tours Management Website",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid asperiores beatae earum obcaecati, ducimus quaerat ipsam delectus ipsum numquam sequi!",
    link: "/",
    image: Project2,
  },
  {
    id: "3",
    topic: "Laptop Shop Management System",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid asperiores beatae earum obcaecati, ducimus quaerat ipsam delectus ipsum numquam sequi!",
    link: "/",
    image: Project3,
  },
  {
    id: "4",
    topic: "Vehicle Shop Management Website",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid asperiores beatae earum obcaecati, ducimus quaerat ipsam delectus ipsum numquam sequi!",
    link: "/",
    image: Project4,
  },
];

function Projects() {
  return (
    <div id="projects" className=" min-h-[730px]  mt-20">
      {/* topic */}
      <div className="container flex flex-col justify-center items-center space-y-10">
        <motion.h1
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            y: { type: "spring", stiffness: 60 },
            opacity: { duration: 0.2 },
            ease: "easeIn",
            duration: 1,
          }}
          className="uppercase text-2xl font-semibold"
        >
          my projects
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
          className="container text-center"
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum
          architecto tenetur in vero reiciendis error quis! Asperiores,
          recusandae accusantium in ipsam consectetur quam. Perspiciatis nostrum
          itaque qui magnam quos incidunt.
        </motion.p>
        <a
          href="https://github.com/ChamodSathsara?tab=projects"
          target="_blank"
          className="duration-300 hover:scale-110"
        >
          <motion.button
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              y: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.2 },
              ease: "easeIn",
              duration: 1,
            }}
            className="bg-secondory text-[#ffffff] font-semibold text-xl py-2 px-3 rounded-xl "
          >
            Get More Projects
            <div className="flex justify-center items-center">
              <p>
                <FaCircleArrowRight />
              </p>
            </div>
          </motion.button>
        </a>
      </div>
      {/* project Cards */}
      <div
        id="card-div"
        className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2 text-center md:text-start mt-20 "
      >
        {cards.map((item) => (
          // card
          <div
            className=" flex flex-col items-center bg-[#ecf0f1]  w-4/6 rounded-lg space-y-4 hover:shadow-xl hover:scale-110 duration-300 p-6 cursor-pointer"
            key={item.id}
          >
            {/* cardimage */}
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
              className="h-40 w-[313px] rounded-md items-start "
            >
              <img src={item.image} alt="project image" />
            </motion.div>
            {/* card topic */}
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
              className="pt-10"
            >
              <h2 className="font-semibold text-xl text-center uppercase">
                {item.topic}
              </h2>
            </motion.div>
            {/* cad description */}
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
              className="text-center"
            >
              <p>{item.description}</p>
            </motion.div>
            {/* card button */}
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
              className=" "
            >
              <button className="bg-primary text-[#ffffff] w-full px-3 rounded-lg py-2 text-xl uppercase hover:font-semibold duration-300">
                visit
              </button>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
