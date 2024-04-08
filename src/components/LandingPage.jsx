import React from "react";
import { motion } from "framer-motion";
import Weld01 from "../assets/images/weld_02.jpg";

const LandingPage = () => {
  const bgVariants = {
    initial: { y: 5, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.2,
        ease: "easeInOut",
        staggerChildren: 0.1,
        delayChildren: 0.5,
      },
    },
  };

  const textVariants = {
    initial: { y: 10, opacity: 0, transition: { duration: 1 } },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
  };

  const navVariants = {
    initial: { y: -10, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.8,
        duration: 0.3,
        staggerChildren: 0.2,
        delayChildren: 1,
      },
    },
  };

  return (
    <>
      <div
        className="padding-x relative flex h-screen items-center justify-center bg-gradient-to-r from-slate-900 via-slate-100 to-slate-900 bg-cover bg-center"
        style={{
          backgroundImage: `url(${Weld01})`,
          backgroundSize: "",
          backgroundRepeat: "no-repeat",
        }}
      >
        <motion.div
          variants={navVariants}
          initial="initial"
          animate="animate"
          className="padding-nav padding-x absolute top-0 z-10 flex w-full justify-between bg-gray-800 font-Alfa text-xl text-white max-xl:hidden"
        >
          <div>Aries Stainless</div>
          <ul className="flex gap-5 ">
            <motion.a
              variants={textVariants}
              className="cursor-pointer px-5 hover:text-orangeColor"
              href="#services"
            >
              Services
            </motion.a>
            <motion.a
              variants={textVariants}
              className="cursor-pointer px-5 hover:text-orangeColor"
              href="#choose"
            >
              About Us
            </motion.a>
            <motion.a
              variants={textVariants}
              className="cursor-pointer px-5 hover:text-orangeColor"
              href="#contact"
            >
              Contact Us
            </motion.a>
          </ul>
        </motion.div>

        <motion.div
          variants={bgVariants}
          initial="initial"
          animate="animate"
          className="relative w-[90%] border-[10px] border-solid border-orangeColor  font-bold text-white max-md:h-3/4 max-md:w-[80%] max-md:border-none max-sm:w-[90%]"
        >
          <div className="padding relative flex h-full w-full flex-col items-center gap-5 bg-black bg-opacity-75 max-md:z-20 max-md:items-start max-md:justify-center max-md:bg-transparent max-md:p-0">
            <div className="relative flex  max-md:w-full max-md:flex-col">
              <motion.p
                variants={textVariants}
                className="max font-Alfa text-8xl tracking-wider text-white max-xl:text-7xl max-xl:text-blue-500 max-lg:text-6xl max-lg:text-green-500 max-md:text-8xl max-md:text-orange-500 max-sm:text-6xl max-sm:text-red-500"
                // className="max font-Alfa text-8xl tracking-wider text-white max-xl:text-7xl max-xl:text-blue-500 max-lg:text-6xl max-lg:text-green-500 max-md:text-8xl max-md:text-orange-500 max-sm:text-6xl max-sm:text-red-500"
              >
                Aries{" "}
              </motion.p>
              <div className="max-md:hidden">&emsp;</div>
              <motion.p
                className="font-Alfa text-8xl tracking-wider text-white max-xl:text-7xl max-lg:text-6xl max-md:text-7xl max-sm:text-5xl"
                variants={textVariants}
              >
                Stainless
              </motion.p>
            </div>
            <motion.p
              variants={textVariants}
              className="font-Alfa text-4xl tracking-wide text-white max-lg:text-3xl max-md:bg-gradient-to-t max-md:from-amber-500 max-md:to-amber-300 max-md:bg-clip-text max-md:text-2xl max-md:text-transparent 
              "
            >
              Installation Services
            </motion.p>
          </div>
        </motion.div>
        <div className="pointer-events-none absolute bottom-0 left-0 top-0  w-[10vw] max-w-[100px] bg-gradient-to-r from-neutral-950/50 to-neutral-950/0" />
        <div className="pointer-events-none absolute bottom-0 right-0 top-0  w-[10vw] max-w-[100px] bg-gradient-to-l from-neutral-950/50 to-neutral-950/0" />
        <div className="pointer-events-none absolute bottom-0 top-0 -z-10 w-full bg-gradient-to-t from-gray-900/80 via-gray-500/50 to-gray-900/50 max-md:z-10" />
        {/* <div
          className="right-autof pointer-events-none absolute bottom-0 left-[15%] 
          top-1/4 z-10 hidden h-1/4 w-1/4 border-4 border-orangeColor max-md:inline"
        /> */}
      </div>
    </>
  );
};
export default LandingPage;
