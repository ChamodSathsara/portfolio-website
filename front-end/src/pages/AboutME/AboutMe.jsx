import React from "react";
import AboutPic from "../../assets/AboutPic2.png";
import { motion } from "motion/react";
import { Link } from "react-scroll";
// icons
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import Resume from "../../assets/Resume.pdf";

function AboutMe() {
  return (
    <div id="aboutMe" className="container mt-20 ">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* photo section */}
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
            src={AboutPic}
            alt=""
          />
        </div>
        {/* text section */}
        <div className="flex flex-col space-y-5 justify-center items-center md:items-start">
          {/* only text */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
            className="flex flex-col space-y-4 "
          >
            {/* heading */}
            <h1 className="text-center md:text-start uppercase font-semibold text-2xl">
              About Me
            </h1>
            {/* sub topic */}
            <h1 className="text-center md:text-start font-semibold text-4xl">
              I am <span className="text-primary ">Chamod Sathsara</span>
            </h1>
            {/* description */}
            <p className="text-center md:text-start">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Repellendus ut architecto libero? Illo ea quae, eveniet enim,
              reiciendis, est laudantium beatae commodi ad provident repellendus
              blanditiis tenetur cumque. Aspernatur repellendus commodi omnis
              sed doloremque ullam!
            </p>
          </motion.div>
          {/* button section */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
            className="flex gap-3 md:flex-row flex-col"
          >
            <button className="bg-secondory text-[#ffffff] px-3 py-2 rounded-lg font-semibold hover:scale-110 duration-300">
              <Link to={"hireMe"} smooth={true} duration={500}>
                Hire Me
              </Link>
            </button>
            <button className="bg-secondory text-[#ffffff] px-3 py-2 rounded-lg font-semibold hover:scale-110 duration-300">
              <a href="Resume" download={Resume}>
                Download CV
              </a>
            </button>
          </motion.div>
          {/* social media buttons */}
          <div className="grid grid-cols-4 gap-3">
            {/* faceBook */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.2,
                x: { type: "spring", stiffness: 60 },
                opacity: { duration: 1 },
                ease: "easeIn",
                duration: 1,
              }}
              className="flex justify-start items-center gap-2  rounded-3xl  cursor-pointer"
            >
              <a
                href="https://web.facebook.com/profile.php?id=100090511336925"
                target="_blank"
              >
                <div className="w-12 h-12 flex rounded-full justify-center items-center bg-primary hover:scale-125 duration-300">
                  <FaFacebook className="text-2xl text-[#ffffff]" />
                </div>
              </a>
            </motion.div>
            {/* Linkin */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.2,
                x: { type: "spring", stiffness: 60 },
                opacity: { duration: 1 },
                ease: "easeIn",
                duration: 1,
              }}
              className="flex justify-start items-center gap-2 rounded-3xl  cursor-pointer"
            >
              <a
                href="https://www.linkedin.com/in/chamodsathsara/"
                target="_blank"
              >
                <div className="w-12 h-12 flex rounded-full justify-center items-center bg-primary hover:scale-125 duration-300">
                  <FaLinkedin className="text-2xl text-[#ffffff]" />
                </div>
              </a>
            </motion.div>
            {/* github */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.2,
                x: { type: "spring", stiffness: 60 },
                opacity: { duration: 1 },
                ease: "easeIn",
                duration: 1,
              }}
              className="flex justify-start items-center gap-2 rounded-3xl  cursor-pointer"
            >
              <a href="https://github.com/ChamodSathsara" target="_blank">
                <div className="w-12 h-12 flex rounded-full justify-center items-center bg-primary hover:scale-125 duration-300">
                  <FaGithub className="text-2xl text-[#ffffff]" />
                </div>
              </a>
            </motion.div>
            {/* instargram */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.2,
                x: { type: "spring", stiffness: 60 },
                opacity: { duration: 1 },
                ease: "easeIn",
                duration: 1,
              }}
              className="flex justify-start items-center gap-2  rounded-3xl  cursor-pointer"
            >
              <a
                href="https://www.hackerrank.com/sathsarawapc1?hr_r=1"
                target="_blank"
              >
                <div className="w-12 h-12 flex rounded-full justify-center items-center bg-primary hover:scale-125 duration-300">
                  <AiFillInstagram className="text-2xl text-[#ffffff]" />
                </div>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
