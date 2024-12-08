import React from "react";
import { navItems } from "../constants/index";
import CTA from "./CTA";

const Navbar = () => {
  return (
    <div className="w-screen sticky top-0 left-0 backdrop-blur-lg z-20">
      <div className="flex justify-between w-full  py-8 items-center lg:px-24 container">
        <img src="" alt="logo" />
        <div className="lg:flex items-center hidden p-4 rounded-full bg-neutral-800 text-neutral-400">
          {navItems.map((item) => (
            <div className="font-semibold mx-5 hover:text-neutral-100 transition-all nav-item">
              <a href={item.href}>{item.label}</a>
            </div>
          ))}
        </div>
        <div className="cta">
          <CTA button_label="Contact Us" button_link="#" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
