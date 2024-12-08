import React from "react";
import CTA from "./CTA";
import { tools } from "../constants/index";

const Tools = () => {
  return (
    <div className="py-28 container mx-auto">
      <div className="w-7/12 flex flex-col gap-8">
        {/* <p className="section-tag">Our Features</p> */}
        <div>
          <p className="section-title">Our Machineries</p>
          <p className="section-description ">
            Name the technology your prefer, we will do the rest.
          </p>
        </div>
        <div>
          <CTA button_label="contact" text_size="text-2xl" button_link="#" />
        </div>
        <div className="w-full grid grid-cols-2 gap-4">
          {tools.map((tool) => (
            <div className="rounded-xl p-6 flex flex-col gap-4 bg-neutral-950 border border-neutral-600">
              <div>
                <img className="inline-block" src={tool.image} alt="" />
                <p className="inline-block text-2xl">{tool.title}</p>
              </div>
              <p className="text-neutral-400">{tool.description}</p>
            </div>
          ))} 
        </div>
      </div>
    </div>
  );
};

export default Tools;
