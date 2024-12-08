import React from "react";
import CTA from "./CTA";
import cta from "../assets/cta.jpg"

const CallToAction = () => {
  return (
    <div className="container">
      <section className="overflow-hidden md:p-12 lg:px-0 lg:pb-24 sm:grid sm:grid-cols-2">
        <div className="">
          <div className="max-w-xl ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-2xl font-bold text-neutral-200 md:text-3xl">
              Transform Your Digital Presence
            </h2>

            <p className=" text-neutral-400 md:mt-4 md:block">
              At GV Tech Media, we help businesses like yours thrive in the
              digital landscape. Our team of experts is dedicated to delivering
              innovative solutions that drive real results.
            </p>

            <div className="mt-4 md:mt-8">
              <CTA
                button_label="Reach to us"
                button_link="/contact"
                text_size="text-lg"
              >
                Let's discuss your digital goals and create a customized
                strategy to achieve them.
              </CTA>
            </div>
          </div>
        </div>

        <img
          alt=""
          src={cta}
          className="lg:h-[300px] object-cover rounded-xl w-full mt-6 lg:mt-0"
        />
      </section>
    </div>
  );
};
export default CallToAction;
