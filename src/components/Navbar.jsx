import React, { useState } from "react";
import { navItems } from "../constants/index";
import CTA from "./CTA";
import logo from "../assets/logo.svg";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState(null);

  const handleNavClick = (item) => {
    setShowMenu(false);
    setActiveNavItem(item);
  };

  return (
    <div className="w-screen sticky top-0 left-0 backdrop-blur-lg z-20">
      <div className="flex justify-between w-full py-8 items-center lg:px-24 container">
        <img src={logo} alt="logo" className="lg:w-[200px] w-[150px]" />
        <div className="lg:hidden flex items-center">
          {showMenu ? (
            <AiOutlineClose
              className="text-2xl text-neutral-400 cursor-pointer"
              onClick={() => setShowMenu(false)}
            />
          ) : (
            <AiOutlineMenu
              className="text-2xl text-neutral-400 cursor-pointer"
              onClick={() => setShowMenu(true)}
            />
          )}
        </div>
        {showMenu && (
          <div className="lg:hidden flex flex-col items-center p-4 fixed top-24 left-0 w-full right-0 backdrop-blur-lg bg-neutral-900 text-neutral-400">
            {navItems.map((item) => (
              <div
                className={`font-semibold mx-5 focus:text-custom-300 hover:text-custom-300 my-2 transition-all nav-item ${
                  activeNavItem === item ? "active" : ""
                }`}
                onClick={() => handleNavClick(item)}
              >
                <a href={item.href}>{item.label}</a>
              </div>
            ))}
            <a
              href="#contact"
              className={`my-2 transition-all nav-item font-semibold mx-5 focus:text-custom-300 hover:text-custom-300 ${
                activeNavItem === "contact" ? "active" : ""
              }`}
              onClick={() => handleNavClick("contact")}
            >
              Contact
            </a>
          </div>
        )}
        <div className="lg:flex items-center hidden p-4 rounded-full bg-neutral-800 text-neutral-400">
          {navItems.map((item) => (
            <div
              className={`font-semibold mx-5 focus:text-custom-300 hover:text-custom-300 transition-all nav-item ${
                activeNavItem === item ? "active" : ""
              }`}
            >
              <a href={item.href}>{item.label}</a>
            </div>
          ))}
        </div>
        <div className="cta hidden lg:block">
          <CTA button_label="Contact Us" button_link="#" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;