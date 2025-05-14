import React from "react";
import logo from "../assets/images/more/logo1.png";
import { FaFacebook, FaGithub, FaLinkedin, FaX } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="bg-[url(/13.jpg)] mt-5">
      <div className="w-11/12 mx-auto p-5 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <div className="space-y-2">
            <img className="h-16 w-16 object-cover" src={logo} alt="" />
            <h3 className="text-2xl">Espresso Emporium</h3>
            <p className="text-base md:w-6/12">
              Always ready to be your friend. Come & Contact with us to share
              your memorable moments, to share with your best companion.
            </p>
            <div className="flex items-center gap-3">
              <a href="#">
                <FaFacebook size={23} />
              </a>
              <a href="#">
                <FaLinkedin size={23} />
              </a>
              <a href="#">
                <FaX size={23} />
              </a>
              <a href="#">
                <FaGithub size={23} />
              </a>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-2xl">Contact with us</h3>
          <form className="flex flex-col gap-4 mt-5 items-start w-full">
            <input
              className="bg-white  p-2 text-base outline-none w-full"
              type="text"
              name="name"
              placeholder="Name"
              id=""
            />
            <input
              className="bg-white  p-2 text-base outline-none w-full"
              type="email"
              name="name"
              placeholder="Email"
              id=""
            />
            <textarea
              className="bg-white  p-2 text-base outline-none min-h-[100px] resize-none w-full"
              name="message"
              id=""
              placeholder="Message"
            ></textarea>
            <button className="py-2 px-4 rounded-full border-2 text-base hover:bg-[#E3B577] hover:border-white cursor-pointer">
              Send Message
            </button>
          </form>
        </div>
      </div>
      <small className="bg-black text-center text-sm w-full block p-2 text-white">
        Copyright Espresso Emporium ! All Rights Reserved
      </small>
    </div>
  );
};

export default Footer;
