import React from "react";
import { motion } from "framer-motion";
import Weld01 from "../assets/images/weld_02.jpg";

const LandingPage = () => {
  const bgVariants = {
    initial: { y: 10, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeIn",
        staggerChildren: 0.3,
        delayChildren: 0.5,
      },
    },
  };

  const textVariants = {
    initial: { y: 5, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  const otherTextVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  };

  return (
    <>
      <div
        className="padding-x relative flex h-screen w-full  items-center justify-center bg-gradient-to-r from-slate-900 via-slate-100 to-slate-900 bg-cover bg-center"
        style={{
          backgroundImage: `url(${Weld01})`,
          backgroundSize: "",
          backgroundRepeat: "no-repeat",
        }}
      >
        <motion.div
          variants={bgVariants}
          initial="initial"
          animate="animate"
          className="containerBox border-[15px] border-solid border-orangeColor font-bold text-white"
        >
          <div className="padding relative flex h-full w-full flex-col items-center gap-5 bg-black bg-opacity-75">
            <motion.p
              variants={textVariants}
              className="font-Alfa text-8xl tracking-wider text-white"
            >
              Aries Stainless
            </motion.p>
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
