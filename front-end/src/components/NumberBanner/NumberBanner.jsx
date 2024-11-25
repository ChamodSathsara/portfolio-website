import React from "react";
import CountUp from "react-countup";
import { motion } from "motion/react";

const countList = [
  {
    id: "1",
    display: "Projects",
    start: "0",
    end: "89",
    duration: "0.5",
  },
  {
    id: "2",
    display: "Experience",
    start: "0",
    end: "5",
    duration: "0.5",
  },
  {
    id: "3",
    display: "Clients",
    start: "0",
    end: "3",
    duration: "0.5",
  },
  {
    id: "4",
    display: "Languages",
    start: "0",
    end: "15",
    duration: "0.5",
  },
];

function NumberBanner() {
  return (
    <motion.div
      initial={{ y: 15, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{
        delay: 0.1,
        x: { type: "spring", stiffness: 80 },
        opacity: { duration: 0.5 },
        ease: "easeIn",
        duration: 1,
      }}
      className="bg-primary"
    >
      <div className="container grid grid-cols-2 md:grid-cols-4">
        {/* first */}
        {countList.map((item) => (
          <div
            key={item.id}
            className="font-semibold flex justify-center flex-col items-center py-6 text-[#FFFFFF] hover:scale-125 duration-300"
          >
            <CountUp
              className="text-4xl  "
              start={item.start}
              end={item.end}
              duration={3}
              suffix="+"
            />

            <p className="text-2xl">{item.display}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default NumberBanner;
