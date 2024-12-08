import React from "react";
import CTA from "./CTA";
import { Tools } from "../constants/index";
import video from "../assets/vid-1.mp4";


const About = () => {
  return (
    <div id="about" className="lg:h-dvh flex lg:flex-row flex-col justify-center w-full mx-auto items-center container gap-16 mt-8 lg:mt-0 ">
      <div className="lg:w-5/12 relative h-5/6">
        <div className="h-full w-full ">
          <video
            className="object-cover h-full border border-neutral-600  rounded-2xl"
            autoPlay
            loop
            muted
          >
            <source src={video} type="video/mp4" />
            <p>Your browser does not support the video tag.</p>
          </video>
        </div>
      </div>
      <div className="lg:w-7/12 flex flex-col gap-6">
        <p className="section-tag">About Us</p>
        <div>
          <p className="section-title">Discover Who we are </p>
          <p className="section-description">
            At GV Tech Media, We Design & Develop various factors of your brand
            for your business, we are highly talented and creative in creating
            high quality content.
          </p>
        </div>
        <CTA button_label="Know More" button_link="#" />
        <div className="">
          <p className="text-base text-neutral-500">
            Our team is specialsed in
          </p>
          <ul className="flex my-4 text-lg gap-2 text-neutral-500 w-full flex-wrap scrollbar-hide tool-list relative">
            {Tools[0].apps.map((app, appIndex) => (
              <li
                key={appIndex}
                className="flex items-center border border-neutral-500 rounded-full py-2 px-2 pr-6 tool-list-item hover:text-neutral-200 "
              >
                <div className="rounded-full overflow-hidden">{app}</div>
                <span className="ml-2 text-nowrap text-base">
                  {Tools[0].titles[appIndex]}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
