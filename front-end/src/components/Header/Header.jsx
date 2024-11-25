import React, { useState } from "react";
import { nav_links } from "../Nav_links/nav_links";
import ResponsiveMenu from "../ResponsiveMenu/ResponsiveMenu";
// icons
import { FaDumbbell } from "react-icons/fa6";
import { HiMenuAlt1 } from "react-icons/hi";
import { Link } from "react-scroll";
// LInk

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <div className="hover:shadow-xl pb-3 duration-300">
      <nav className=" container flex justify-between gap-6 mt-4 ">
        {/* Logo Section */}
        <div className="flex items-center gap-1 font-semibold text-2xl md:text-3xl ms-2 cursor-pointer">
          <p>
            <FaDumbbell className="text-primary" />
          </p>
          <h1 className="uppercase">Chamod</h1>
        </div>
        {/* navLinks Section and button  */}
        <div className="items-center hidden md:flex gap-20 ">
          {/*  nav Links*/}
          <div className="flex space-x-8 ">
            {nav_links.map((item) => (
              <Link
                to={item.state}
                smooth={true}
                duration={500}
                className="font-semibold text-[#7f8c8d] text-md hover:scale-110 cursor-pointer hover:text-secondory duration-300 "
                key={item.id}
              >
                {item.display}
              </Link>
            ))}
          </div>
          {/* Hire Me Button */}
          <div className="flex ">
            <button className="font-semibold text-[#FFFFFF] text-lg bg-primary rounded-md px-2 py-1 hover:scale-110 hover:shadow-lg duration-300 hover:bg-secondory">
              <Link to={"hireMe"} smooth={true} duration={500}>
                Hire Me
              </Link>
            </button>
          </div>
        </div>
        {/* responsive menu icon section */}
        <div className=" flex md:hidden items-center pe-3 cursor-pointer">
          <p className="text-3xl ">
            <HiMenuAlt1
              className="font-semibold"
              onClick={() => setOpen(!open)}
            />
          </p>
        </div>
      </nav>
      {/* responsive nav menu list */}
      <ResponsiveMenu open={open} />
    </div>
  );
}

export default Header;
