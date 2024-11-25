import React, { useEffect, useState } from "react";
import { nav_links } from "../Nav_links/nav_links";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";

function ResponsiveMenu(props) {
  return (
    <AnimatePresence mode="wait">
      {props.open && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          className="absolute top-20 w-full lg:hidden z-20 "
        >
          <div className=" flex flex-col justify-center items-center gap-4 bg-primary py-12 mx-7 rounded-lg">
            {nav_links.map((item) => (
              <Link
                to={item.state}
                smooth={true}
                duration={500}
                className="font-semibold text-[#FFFFFF] cursor-pointer duration-200  hover:scale-110 uppercase"
                key={item.id}
              >
                {item.display}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ResponsiveMenu;
