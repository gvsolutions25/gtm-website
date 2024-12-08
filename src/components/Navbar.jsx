import React from "react";
import { navItems } from "../constants/index";
import CTA from "./CTA";
import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <div className="w-screen sticky top-0 left-0 backdrop-blur-lg z-20">
      <div className="flex justify-between w-full  py-8 items-center lg:px-24 container">
        <img src={logo} alt="logo" className="w-[200px]" />
        <div className="lg:flex items-center hidden p-4 rounded-full bg-neutral-800 text-neutral-400">
          {navItems.map((item) => (
            <div className="font-semibold mx-5 hover:text-custom-300 transition-all nav-item">
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
