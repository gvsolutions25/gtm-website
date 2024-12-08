import React from "react";
import { MoveUpRight } from "lucide-react"; // assuming it's in the same directory

// import "../assets/styles.css";

const CTA = (props) => {
  return (
    <div className="">
      <a
        href='#contact'
        className={`px-3 py-2 gap-3 w-fit flex items-center justify-between cta-btn transition-all bg-custom-300 font-semibold rounded-full text-black hover:rotate-icon ${props.text_size}`}
      >
        {props.button_label}{" "}
        <div className="p-1 rounded-full bg-black">
          <MoveUpRight className="text-custom-300 text-xs cta transition-all" />
        </div>
      </a>
    </div>
  );
};

export default CTA;
