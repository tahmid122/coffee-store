import React from "react";
import bgImage from "../assets/images/more/3.png";
const Banner = () => {
  return (
    <div className="w-full h-[calc(100vh-100px)] flex items-center justify-end relative bg-gradient-to-t to-black px-10">
      <div className="md:w-6/12 space-y-4 z-10 text-white">
        <h3 className="text-3xl font-bold">
          Would you like a Cup of Delicious Coffee?
        </h3>
        <p className="text-base">
          It's coffee time - Sip & Savor - Relaxation in every sip! Get the
          nostalgia back!! Your companion of every moment!!! Enjoy the beautiful
          moments and make them memorable.
        </p>
        <button className=" py-1 cursor-pointer text-black px-4 hover:bg-transparent hover:outline-1 hover:outline-white hover:text-white font-bold bg-[#E3B577]">
          Learn More
        </button>
      </div>
      <img
        className="w-full h-full absolute left-0 top-0 object-cover"
        src={bgImage}
        alt=""
      />
    </div>
  );
};

export default Banner;
