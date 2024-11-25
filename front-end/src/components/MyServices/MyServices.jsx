import React from "react";
import { motion } from "motion/react";
// icons
import { RiJavaLine } from "react-icons/ri";
import { FaSquareWebAwesome } from "react-icons/fa6";
import { MdAppSettingsAlt } from "react-icons/md";

const services = [
  {
    id: "1",
    topic: "Java Developer",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, eos!",
    icon: <RiJavaLine />,
    delay: "0.2",
  },
  {
    id: "2",
    topic: "Web Developer",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, eos!",
    icon: <FaSquareWebAwesome />,
    delay: "0.4",
  },
  {
    id: "3",
    topic: "Mobile App Developer",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, eos!",
    icon: <MdAppSettingsAlt />,
    delay: "0.6",
  },
];

function MyServices() {
  return (
    <div id="myServices" className="container mt-20 space-y-14 ">
      {/* topic section */}
      <div className="flex justify-center items-center">
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
          className="font-semibold text-2xl uppercase"
        >
          My Services
        </motion.h1>
      </div>
      {/* service card section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 ">
        {services.map((item) => (
          // card section
          <div key={item.id} className="hover:scale-125 duration-300 ">
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                delay: item.delay,
                y: { type: "spring", stiffness: 80 },
                opacity: { duration: 0.2 },
                ease: "easeIn",
                duration: 1,
              }}
              className=" flex flex-col justify-center items-center m-5 bg-secondory/15 hover:shadow-xl py-12 p-5 rounded-xl space-y-5  cursor-pointer"
            >
              {/* card icon */}
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  delay: item.delay,
                  y: { type: "spring", stiffness: 80 },
                  opacity: { duration: 0.2 },
                  ease: "easeIn",
                  duration: 1,
                }}
                className="w-14 h-14 flex justify-center items-center bg-secondory rounded-lg"
              >
                <p className="text-[#ffffff] text-2xl">{item.icon}</p>
              </motion.div>
              {/* card topic */}
              <div>
                <motion.h1
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: item.delay,
                    y: { type: "spring", stiffness: 80 },
                    opacity: { duration: 0.2 },
                    ease: "easeIn",
                    duration: 1,
                  }}
                  className="text-center font-semibold"
                >
                  {item.topic}
                </motion.h1>
              </div>
              {/* card description */}
              <div>
                <motion.p
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: item.delay,
                    y: { type: "spring", stiffness: 80 },
                    opacity: { duration: 0.2 },
                    ease: "easeIn",
                    duration: 1,
                  }}
                  className="text-center"
                >
                  {item.description}
                </motion.p>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyServices;
