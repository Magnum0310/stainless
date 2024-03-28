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
        className="padding-x w- relative flex h-screen items-center justify-center bg-gradient-to-r from-slate-900 via-slate-100 to-slate-900 bg-cover bg-center"
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
          className="padding-nav padding-x absolute top-0 z-10 flex w-full justify-between bg-gray-800 font-Alfa text-xl text-white"
        >
          <div>LOGO</div>
          <ul className="flex gap-5 ">
            <motion.li
              variants={textVariants}
              className="cursor-pointer px-5 hover:text-orangeColor"
            >
              Services
            </motion.li>
            <motion.li
              variants={textVariants}
              className="cursor-pointer px-5 hover:text-orangeColor"
            >
              About Us
            </motion.li>
            <motion.li
              variants={textVariants}
              className="cursor-pointer px-5 hover:text-orangeColor"
            >
              Contact Us
            </motion.li>
          </ul>
        </motion.div>

        <motion.div
          variants={bgVariants}
          initial="initial"
          animate="animate"
          className="w-[90%] border-[10px] border-solid border-orangeColor font-bold text-white"
        >
          <div className="padding relative flex h-full w-full flex-col items-center gap-5 bg-black bg-opacity-75">
            <div className="flex">
              <motion.p
                variants={textVariants}
                className="font-Alfa text-8xl tracking-wider text-white"
              >
                Aries{" "}
              </motion.p>
              &emsp;
              <motion.p
                className="font-Alfa text-8xl tracking-wider text-white"
                variants={textVariants}
              >
                Stainless
              </motion.p>
            </div>
            <motion.p
              variants={textVariants}
              className="font-Alfa text-4xl tracking-wide text-white"
            >
              Installation Services
            </motion.p>
          </div>
        </motion.div>
        <div className="pointer-events-none absolute bottom-0 left-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-r from-neutral-950/50 to-neutral-950/0" />
        <div className="pointer-events-none absolute bottom-0 right-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-l from-neutral-950/50 to-neutral-950/0" />
      </div>
    </>
  );
};
export default LandingPage;
