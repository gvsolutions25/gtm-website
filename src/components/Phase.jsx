import React from "react";
import { phase } from "../constants/index";
import CTA from "./CTA";
import video from "../assets/vid-2.mp4";

const Phase = () => {
  return (
    <div id="workflow" className="py-28 container mx-auto ">
      <div className=" w-full flex lg:flex-row flex-col-reverse items-end gap-6 h-fit">
        <div className="w-full lg:w-7/12 flex flex-col gap-6">
          <p className="section-tag">Our Style</p>
          <div>
            <p className="section-title">What Makes us Unique</p>
            <p className="section-description ">
              We set our self apart by providing high quality design Stratergy
            </p>
          </div>
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* <ParallaxCard enableRotate> */}
            {phase.map((phase) => (
              <div className="rounded-xl p-6 flex flex-col gap-2 hover:hovertext bg-neutral-950 border  border-neutral-600 phase-item">
                <span className="text-orange-400">{phase.icon}</span>
                <p className="inline-block text-2xl">{phase.title}</p>
                <p className="text-neutral-400">{phase.description}</p>
              </div>
            ))}
            {/* </ParallaxCard> */}
          </div>
        </div>
        <div className="w-full lg:w-5/12 relative flex justify-center items-center">
          <div className="h-full w-full">
            <video
              className="object-cover lg:h-[75vh] h-24 border border-neutral-600 rounded-2xl  w-full"
              
              autoPlay
              loop
              muted
            >
              <source src={video} type="video/mp4" />
              <p>Your browser does not support the video tag.</p>
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Phase;
