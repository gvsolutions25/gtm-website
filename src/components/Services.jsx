import React from "react";
import { services } from "../constants/index";

import CTA from "./CTA";

const Services = () => {
  return (
    <div id="services" className="p-4 container mx-auto w-full flex flex-col mt-8 lg:mt-0 gap-6">
      <p className="section-tag">Services</p>
      <div>
        <p className="section-title">Discover Our Set of Services</p>
        <p className="section-description ">
          Discover Our large set of Services, We are highly talented and
          creative in creating high quality content. we offer a wide range of
          services to meet your needs with speicialized solutions.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <a href="">
            <div className="lg:p-12 p-4 border flex flex-col gap-3 lg:gap-6 border-neutral-600 bg-neutral-950 rounded-xl lg:rounded-3xl service-card-active cursor-pointer">
              <div className="flex gap-4">
                <i className="text-custom-300">{service.icon}</i>
                <p className="text-2xl">{service.title}</p>
              </div>
              <div>
                <p className="text-neutral-400">{service.description}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
      <hr className="lg:my-8 my-2 border-neutral-600" />
      <div className="flex flex-col lg:flex-row justify-between items-end lg:items-center">
        <p className="text-xl">Every penny is worthy, A promise from us </p>
        <CTA button_label="contact" text_size="text-2xl" button_link="#" />
      </div>
    </div>
  );
};

export default Services;
