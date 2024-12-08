import React from "react";
import CTA from "./CTA";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <div id="contact" className="lg:pb-28 pb-8 flex justify-center flex-col mt-8 lg:mt-0 lg:flex-row w-full mx-auto container">
      <div className="w-full lg:w-1/2 p-8 gap-4 rounded-md border border-neutral-600 flex flex-col">
        <p className="section-tag">Contact Us</p>
        <div>
          <p className="section-title">Get In Touch</p>
          <p className="section-description">
            We are here to help you in any way possible. Our team will help you
            in any way possible.
          </p>
        </div>
        <div className=" flex flex-col text-neutral-200">
          <div className="text-neutral-400 text-lg flex gap-4">
            <Phone />
            <p>Phone Number</p>
          </div>
          <p className="text-lg">+91 9865231470</p>
        </div>
        <div className=" flex flex-col text-neutral-200">
          <div className="text-neutral-400 text-lg flex gap-4">
            <Mail />
            <p>Email Address</p>
          </div>
          <p className="text-lg">example@gmail.com</p>
        </div>
        <div className=" flex flex-col text-neutral-200">
          <div className="text-neutral-400 text-lg flex gap-4">
            <MapPin />
            <p>Location</p>
          </div>
          <p className="text-lg">
            Jagadamba, Visakhapatnam, Andhra Pradesh - 530001
          </p>
        </div>
      </div>
      <div className="w-full lg:w-1/2 lg:px-12">
        <form className="p-4 grid-cols-2 grid gap-4 rounded-lg border border-neutral-600">
          <div className="mb-2 lg:col-span-1 col-span-2">
            <label
              className="block text-neutral-400 text-xl  font-bold mb-2"
              for="name"
            >
              Name:
            </label>
            <input
              className="appearance-none border border-neutral-400 rounded w-full py-2 px-3 text-neutral-200 leading-tight hover:border-white hover:border-2 focus:shadow-outline"
              id="name"
              type="text"
              placeholder="John Doe"
            />
          </div>
          <div className="mb-2 lg:col-span-1 col-span-2">
            <label
              className="block text-neutral-400 text-xl  font-bold mb-2"
              for="mobile"
            >
              Mobile:
            </label>
            <input
              className="appearance-none border border-neutral-400 rounded w-full py-2 px-3 text-neutral-200 leading-tight hover:border-white hover:border-2 focus:shadow-outline"
              id="mobile"
              type="tel"
              placeholder="+1 123 456 7890"
            />
          </div>
          <div className="mb-2 lg:col-span-1 col-span-2">
            <label
              className="block text-neutral-400 text-xl  font-bold mb-2"
              for="email"
            >
              Email:
            </label>
            <input
              className="appearance-none border border-neutral-400 rounded w-full py-2 px-3 text-neutral-200 leading-tight hover:border-white hover:border-2 focus:shadow-outline"
              id="email"
              type="email"
              placeholder="johndoe@example.com"
            />
          </div>
          <div className="mb-2 lg:col-span-1 col-span-2">
            <label
              className="block text-neutral-400 text-xl  font-bold mb-2"
              for="select"
            >
              Select an option:
            </label>
            <select
              className="block appearance-none w-full text-neutral-400 border border-neutral-400  px-4 py-2 pr-8 rounded shadow leading-tight hover:border-white hover:border-2 focus:shadow-outline"
              id="select"
            >
              <option value="">Select an option</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
          <div className="mb-4 col-span-2 w-full">
            <label
              className="block text-neutral-400 text-xl  font-bold mb-2"
              for="message"
            >
              Message:
            </label>
            <textarea
              className="appearance-none border border-neutral-400 rounded w-full py-2 px-3 text-neutral-200 leading-tight hover:border-white hover:border-2 focus:shadow-outline"
              id="message"
              rows="5"
              placeholder="Type your message here..."
            ></textarea>
          </div>

          <button
            className="bg-custom-300 col-span-2 text-2xl hover:bg-custom-400 text-white font-bold py-2 px-4 rounded hover:border-white hover:border-2 focus:shadow-outline"
            type="submit"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
