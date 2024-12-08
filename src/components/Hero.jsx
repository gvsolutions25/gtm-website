import React from "react";
import CTA from "./CTA";
import { Typewriter } from "react-simple-typewriter";
import { cn } from "../../lib/utils";
import AnimatedGridPattern from "../../components/ui/animated-grid-pattern";

const Hero = () => {
  return (
    <div id="home" className="flex justify-center h-fit lg:h-[70vh] w-full mx-auto items-center container flex-col">
      <AnimatedGridPattern
        numSquares={50}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-0%] h-[200%] skew-y-6"
        )}
      />

      <div className="lg:max-w-[800px] w-screen  mt-[-125px] p-8 lg:mt-[-200px]">
        <p className="text-5xl lg:text-6xl text-center my-8">
          Elevate your brand with <br />
          <span className="text-custom-300 lg:inline-flex inline-block">
            <Typewriter
              words={[
                " Design",
                " Creative",
                " Development",
                " Branding",
                " Marketing",
              ]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </span>
          excellence
        </p>
        <p className="lg:text-3xl text-xl text-center text-neutral-500 my-8">
          our team of talented{" "}
          <span className="hvr-underline-from-left cursor-none hover:text-white">
            Designers,
          </span>{" "}
          <span className="hvr-underline-from-left cursor-none hover:text-white">
            Developers
          </span>{" "}
          &{" "}
          <span className="hvr-underline-from-left cursor-none hover:text-white">
            Marketing Executives
          </span>{" "}
          will bring your ideas to life.
        </p>
        <div className="flex justify-center my-8">
          <CTA button_label="Get Started" button_link="#" text_size="text-xl" />
        </div>

      </div>
    </div>
  );
};

export default Hero;
