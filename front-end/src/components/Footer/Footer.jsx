import React, { useState } from "react";
import { nav_links } from "../Nav_links/nav_links";
import { project } from "../project";
import { motion } from "motion/react";
import { Link } from "react-scroll";
// Alert
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Footer() {
  const test = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [email, setEmail] = useState("");

  const notify = () => {
    if (email.match(test)) {
      toast.success("Success! Your message sended...!");
    } else {
      toast.error("Something Wrong! Try Again...!");
    }
  };

  const submitData = () => {
    // data save logic
    if (email.match(test)) {
      fetch("http://localhost:3000/subs/", {
        method: "POST",
        body: JSON.stringify({
          eMail: email,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));

      setEmail("");
    }
  };
  return (
    <div className=" bg-[#bdc3c7]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-12  bg-[#bdc3c7] mt-24">
        {/* Location and sM buttons */}
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
          className="space-y-5 flex flex-col items-center md:items-start"
        >
          {/* locations */}
          <div>
            <h1 className="font-semibold">Chamod</h1>
          </div>
          <div className="text-center md:text-start">
            <p>Address: Panadura</p>
            <p>E-mail : Sathsarawapc@gmail.com</p>
            <p>Tel Num: +94 75 880 6437</p>
          </div>
          {/* SM buttons */}
          <div></div>
        </motion.div>

        {/* NavBar Links */}
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
          className="space-y-5 flex flex-col items-center md:items-start"
        >
          <p className="font-semibold">Links</p>
          <div className="text-center md:text-start flex flex-col">
            {nav_links.map((item) => (
              <Link
                className="cursor-pointer"
                to={item.state}
                smooth={true}
                duration={500}
                key={item.id}
              >
                {item.display}
              </Link>
            ))}
          </div>
        </motion.div>

        {/* My Projects */}
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
          className="space-y-5 flex flex-col items-center md:items-start"
        >
          <p className="mt-6 md:mt-0 font-semibold">My Project</p>
          <div className="text-center md:text-start">
            {project.map((item) => (
              <p key={item.id}> {item.topic}</p>
            ))}
          </div>
        </motion.div>
        {/* subscribe me col */}
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
          className="space-y-5 flex flex-col items-center md:items-start"
        >
          <label className="font-semibold">Subscripe Me</label>
          <div className="">
            <input
              type="email"
              placeholder="Enter E-mail"
              name=""
              id=""
              value={email}
              onChange={(event) => {
                event.preventDefault();
                let newEmail = event.target.value;
                setEmail(newEmail);
              }}
              className="border-2 py-2 border-[#95a5a6] rounded-s-lg"
            />
            <button
              onClick={() => {
                submitData();
                notify();
              }}
              className="px-3 py-2 bg-secondory border-[#95a5a6] border-2 rounded-e-lg hover:scale-110 duration-300"
            >
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
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
        className="text-sm opacity-50 pb-1  text-center"
      >
        Copyright © 2024 Chamod Sathsara SriLanka.
      </motion.h1>
    </div>
  );
}

export default Footer;
