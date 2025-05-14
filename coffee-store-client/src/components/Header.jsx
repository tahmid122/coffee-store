import React from "react";
import logo from "../assets/images/more/logo1.png";
const Header = () => {
  return (
    <div className="flex items-center justify-center gap-4 bg-black p-2">
      <img className="h-20 w-20 object-cover" src={logo} alt="" />
      <h1 className="text-4xl md:text-5xl font-bold text-white">
        Espresso Emporium
      </h1>
    </div>
  );
};

export default Header;
