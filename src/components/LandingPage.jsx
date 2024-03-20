import React from "react";
import Weld01 from "../assets/images/weld_02.jpg";

const LandingPage = () => {
  return (
    <>
      <div
        className="bg-center bg-gradient-to-r from-slate-900 via-slate-100 to-slate-900  relative h-screen w-full bg-cover flex items-center justify-center padding-x"
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
        <div className="pointer-events-none absolute bottom-0 left-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-r from-neutral-950/50 to-neutral-950/0" />
        <div className="pointer-events-none absolute bottom-0 right-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-l from-neutral-950/50 to-neutral-950/0" />
      </div>
    </>
  );
};
export default LandingPage;
