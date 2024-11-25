import React, { useState } from "react";
import Hero1 from "../../assets/hero2.png";
import { Link } from "react-scroll";
// icons
import { FaDownload } from "react-icons/fa";
import NumberBanner from "../../components/NumberBanner/NumberBanner";
// motion
import { motion } from "motion/react";
// import my Cv
import Resume from "../../assets/Resume.pdf";

function Home() {
  return (
    <div id="home">
      <div className="mt-6 max-w-[450px] md:max-w-[1500px] min-h-[730px] gap-4 container grid grid-cols-1 md:grid-cols-2 justify-center items-center">
        {/* text section */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
          className="md:space-y-6 space-y-10"
        >
          {/* text section paragraph */}
          <div className="md:space-y-3 space-y-8 flex flex-col justify-center items-center md:items-start">
            <motion.h1
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.2,
                x: { type: "spring", stiffness: 60 },
                opacity: { duration: 0.5 },
                ease: "easeIn",
                duration: 1,
              }}
              className="font-semibold uppercase md:text-2xl "
            >
              hey, I am <span className="text-primary">Chamod Sathsara</span>
            </motion.h1>
            <h1 className="md:text-start text-center uppercase text-4xl md:text-5xl lg:text-8xl font-semibold">
              Full-Stack Software Engineer
            </h1>
            <p className="md:text-start text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus quam neque repudiandae consectetur enim aperiam?
            </p>
          </div>
          {/* button Section */}
          <div className="flex gap-4 justify-center md:justify-start md:flex-row flex-col ">
            <button className="bg-primary px-3 py-2 rounded-lg font-semibold text-[#FFFFFF] hover:scale-110 duration-300 hover:shadow-2xl ">
              <Link to={"hireMe"} smooth={true} duration={500}>
                Hire Me
              </Link>
            </button>
            <div className="flex justify-center items-center gap-2 bg-primary px-3 py-2 rounded-lg font-semibold text-[#FFFFFF] hover:scale-110 duration-300 hover:shadow-2xl ">
              <FaDownload className="" />
              <button>
                <a href="Resume" download={Resume}>
                  Download CV
                </a>
              </button>
            </div>
          </div>
        </motion.div>
        {/* image section */}
        <div className="md:w-[480px] lg:w-[600px] xl:w-[650px]">
          <motion.img
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
            src={Hero1}
            alt=""
          />
        </div>
      </div>
      <NumberBanner />
    </div>
  );
}

export default Home;
