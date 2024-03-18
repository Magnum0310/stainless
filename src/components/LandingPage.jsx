import React from "react";
import Weld01 from "../assets/images/weld_02.jpg";

const LandingPage = () => {
  return (
    <div
      className="bg-center relative h-full w-full bg-cover flex items-center justify-center padding-x"
      style={{
        backgroundImage: `url(${Weld01})`,
        backgroundSize: "",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="text-white font-bold containerBox border-[15px] border-solid border-orangeColor">
        <div className="h-full w-full padding relative bg-black bg-opacity-75 flex flex-col gap-5 items-center">
          <p className=" text-white text-8xl font-Alfa  tracking-wider">
            Aries Stainless
          </p>
          <p className=" text-white text-4xl font-Alfa tracking-wide">
            Installation Services
          </p>
        </div>
      </div>
    </div>
  );
};
export default LandingPage;
