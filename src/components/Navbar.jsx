import React from "react";

const Navbar = () => {
  return (
    <div className="padding-nav padding-x absolute z-10 flex w-full justify-between bg-gray-800 font-Alfa text-xl text-white">
      <div>LOGO</div>
      <ul className="flex gap-5 ">
        <li className="cursor-pointer px-5 hover:text-orangeColor">Services</li>
        <li className="cursor-pointer px-5 hover:text-orangeColor">About Us</li>
        <li className="cursor-pointer px-5 hover:text-orangeColor">
          Contact Us
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
