import React from "react";
import { features } from "../constants/index";

const Features = () => {
  return (
    <div id="features" className="p-4 container mx-auto w-full flex flex-col gap-6 pb-8 lg:pb-28">
      <p className="section-tag">Our Features</p>
      <div>
        <p className="section-title"> Why Choose Us</p>
        <p className="section-description ">
          We Provide best services with integrated great features for your
          business
        </p>
      </div>
      <ul className="grid lg:grid-cols-3 grid-cols-1 gap-12">
        {features.map((feature) => (
          <a href="" className="relative ml-6">
            <li className="flex flex-col gap-2  group feature-card cursor-none">
              <div className="flex gap-4 group">
                {/* <i>{feature.icon}</i> */}
                <p className="text-2xl">{feature.title}</p>
              </div>
              <div>
                <p className="text-neutral-400 group-hover:text-orange-400">
                  {feature.description}
                </p>
              </div>
            </li>
          </a>
        ))}
      </ul>
    </div>
  );
};

export default Features;
