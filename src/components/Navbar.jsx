import React from "react";

const Navbar = () => {
  return (
    <div className="absolute  z-10 bg-gray-800 font-Alfa w-full text-white justify-between padding-nav text-xl flex">
      <div>LOGO</div>
      <ul className="flex gap-5 ">
        <li className="px-5 hover:text-orangeColor cursor-pointer">Services</li>
        <li className="px-5 hover:text-orangeColor cursor-pointer">About Us</li>
        <li className="px-5 hover:text-orangeColor cursor-pointer">
          Contact Us
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
