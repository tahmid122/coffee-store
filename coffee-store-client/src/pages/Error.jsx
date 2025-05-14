import React from "react";
import Footer from "../components/Footer";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router";
import errorImg from "../assets/images/404/404.gif";
const Error = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center pt-10">
        <Link
          to={"/"}
          className="flex items-center p-2 text-xl font-bold italic"
        >
          <FaArrowLeft />
          Back to home
        </Link>
        <img src={errorImg} className="mx-auto" alt="" />
      </div>
      <Footer />
    </div>
  );
};

export default Error;
