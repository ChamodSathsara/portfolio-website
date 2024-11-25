import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import AlertBox from "../../components/AlertBox/AlertBox";

// Alert
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function HireMe() {
  let showError = false;
  let isSave = false;
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    telNum: "",
  });

  const notify = () => {
    if (isSave === true) {
      toast.success("Success! Your message sended...!");
    } else {
      toast.error("Something Wrong! Try Again...!");
    }
  };

  const validation = () => {
    const testMail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const error = {};

    if (formData.name === "") {
      error.name = "Name requied";
      showError = true;
    }
    if (formData.email === "") {
      error.email = "Email requied";
      showError = true;
    } else if (!formData.email.match(testMail)) {
      error.email = "not a email";
      showError = true;
    }
    if (formData.message === "") {
      error.message = "Message requied";
      showError = true;
    }
    if (formData.telNum === "") {
      error.telNum = "Telephone Number requied";
      showError = true;
    } else if (formData.telNum.length < 9) {
      error.telNum = 'need " 011 111 111 1 " format, please retry..';
      showError = true;
    }
    return error;
  };

  const submitData = () => {
    // Cheack validation
    setErrors(validation());

    // data save logic
    if (showError === false) {
      isSave = true;
      fetch("http://localhost:3000/hireMe/", {
        method: "POST",
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          telNum: formData.telNum,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          clearDatas();
        });
    }
  };

  const clearDatas = () => {
    setFormData({
      name: "",
      email: "",
      message: "",
      telNum: "",
    });
  };

  return (
    <div id="hireMe" className="container mt-36 space-y-16 min-h-[730px]">
      {/* topic  */}
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
          Send Message
        </motion.h1>
      </div>
      {/* test Arias */}
      <div className="container w-4/5 space-y-5 font-semibold  ">
        {/* name and e mails */}
        <div className="grid grid-cols-2 gap-4 text-lg">
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
            className="flex flex-col "
          >
            <label className="uppercase">name:</label>
            {errors.name && (
              <p className="text-[#910b0b] font-normal text-sm">
                {errors.name}
              </p>
            )}
            <input
              type="text"
              placeholder="ex: Chamod"
              required
              value={formData.name}
              onChange={(event) => {
                event.preventDefault();
                let newName = event.target.value;
                setFormData((data) => ({
                  ...formData,
                  name: newName,
                }));
              }}
              className="border-2 border-[#bdc3c7] rounded-md text-xl p-2 active:scale-110 duration-300 font-normal"
            />
          </motion.div>
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
            className="flex flex-col "
          >
            <label className="uppercase">E mail:</label>
            {errors.email && (
              <p className="text-[#910b0b] font-normal text-sm">
                {errors.email}
              </p>
            )}
            <input
              type="email"
              placeholder="sathsarawaoC@gmail.com"
              value={formData.email}
              onChange={(event) => {
                event.preventDefault();
                let newEmail = event.target.value;
                setFormData((data) => ({
                  ...formData,
                  email: newEmail,
                }));
              }}
              required
              className="border-2 border-[#bdc3c7] rounded-md text-xl p-2 active:scale-110 duration-300 font-normal"
            />
          </motion.div>
        </div>

        {/* Send message input */}
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
          className="text-lg"
        >
          <label className="uppercase">Enter Message: </label>
          {errors.message && (
            <p className="text-[#910b0b] font-normal text-sm">
              {errors.message}
            </p>
          )}
          <textarea
            placeholder="Enter Your Message..."
            value={formData.message}
            required
            onChange={(event) => {
              event.preventDefault();
              let newMessage = event.target.value;
              setFormData((data) => ({
                ...formData,
                message: newMessage,
              }));
            }}
            rows="10"
            className="border-2 w-full rounded-lg active:scale-110 duration-300 border-[#bdc3c7] font-normal"
          ></textarea>
        </motion.div>

        {/* teleNum inputs */}
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
          className="flex flex-col text-lg "
        >
          <label className="uppercase">Phone Number:</label>
          {errors.telNum && (
            <p className="text-[#910b0b] font-normal text-sm">
              {errors.telNum}
            </p>
          )}
          <input
            type="tel"
            placeholder="07* *** *** *"
            value={formData.telNum}
            onChange={(event) => {
              event.preventDefault();
              let newTel = event.target.value;
              setFormData((data) => ({
                ...formData,
                telNum: newTel,
              }));
            }}
            className="border-2 rounded-md p-2 active:scale-110 duration-300 border-[#bdc3c7] font-normal"
          />
        </motion.div>

        {/* buttons sections */}
        <div className="flex flex-col gap-3 md:gap-0 md:flex-row md:justify-between  justify-center items-center">
          <div
            onClick={() => {
              submitData();
              notify();
            }}
            className="cursor-pointer py-2 px-3  flex justify-center items-center bg-secondory w-full md:w-1/3 text-[#ffffff] hover:shadow-lg rounded-md hover:scale-110 duration-300"
          >
            <motion.button
              type="submit"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.2,
                y: { type: "spring", stiffness: 60 },
                opacity: { duration: 0.2 },
                ease: "easeIn",
                duration: 1,
              }}
              className=""
            >
              Send
            </motion.button>
          </div>
          <div className="hover:scale-110 py-2 px-3 cursor-pointer flex justify-center items-center bg-secondory w-full md:w-1/3 text-[#ffffff]  hover:shadow-lg rounded-md duration-300">
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
              className=""
              onClick={clearDatas}
            >
              Cansel
            </motion.button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default HireMe;
