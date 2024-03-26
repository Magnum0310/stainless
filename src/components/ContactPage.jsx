import React from "react";
import Circle from "../assets/images/circle.svg";
import Line from "../assets/images/line.svg";
import { motion } from "framer-motion";

const ContactPage = () => {
  const topSvgVariants = {
    initial: {
      opacity: 0,
      translateX: -300,
    },
    animate: {
      opacity: 1,
      translateX: 0,
      transition: { duration: 1.5, ease: "easeInOut" },
    },
  };
  const bottomSvgVariants = {
    initial: {
      opacity: 0,
      translateX: 300,
    },
    animate: {
      opacity: 1,
      translateX: 0,
      transition: { duration: 1.5, ease: "easeInOut" },
    },
  };
  const pathVariants = {
    initial: {
      opacity: 0,
      pathLength: 0,
    },
    animate: {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div
      className="padding-x flex h-full w-full flex-col items-center justify-center "
      style={{
        backgroundImage:
          "radial-gradient(125% 125% at 50% 0%, #232532 50%, #D9D9D9",
      }}
    >
      <motion.svg
        variants={topSvgVariants}
        initial="initial"
        animate="animate"
        className="mb-32 fill-white"
        version="1.2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 940 9"
        width="940"
        height="9"
      >
        <defs>
          <clipPath clipPathUnits="userSpaceOnUse" id="cp1">
            <path d="m-1 0h941v9h-941z" />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="cp2">
            <path d="m469.7 8.56c-259.46 0-469.8-1.72-469.8-3.85 0-2.12 210.34-3.84 469.8-3.84 259.47 0 469.8 1.72 469.8 3.84 0 2.13-210.33 3.85-469.8 3.85z" />
          </clipPath>
        </defs>
        <g clipPath="url(#cp1)">
          <g clipPath="url(#cp2)">
            <path class="a" d="m-0.1 8.6h939.6v-7.7h-939.6z" />
          </g>
        </g>
      </motion.svg>
      <div className="flex w-[75%] flex-col gap-10">
        <p className="flex justify-center font-Alfa  text-[64px] text-orangeColor">
          Contact Us
        </p>
        <p className=" font-Belgrano text-xl leading-8 tracking-wider text-white">
          Ready to transform your space with our stainless steel solutions?
          Contact us today to discuss your project or request a consultation. At{" "}
          <span className=" text-4xl font-bold tracking-wider text-orangeColor">
            Aries Stainless
          </span>{" "}
          Installation Services, we bring your vision to{" "}
          <span className="text-4xl font-bold tracking-wider text-orangeColor">
            life!
          </span>
        </p>
      </div>
      <motion.svg
        variants={bottomSvgVariants}
        initial="initial"
        animate="animate"
        className="mt-32 fill-white"
        version="1.2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 940 9"
        width="940"
        height="9"
      >
        <defs>
          <clipPath clipPathUnits="userSpaceOnUse" id="cp1">
            <path d="m-1 0h941v9h-941z" />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="cp2">
            <path d="m469.7 8.56c-259.46 0-469.8-1.72-469.8-3.85 0-2.12 210.34-3.84 469.8-3.84 259.47 0 469.8 1.72 469.8 3.84 0 2.13-210.33 3.85-469.8 3.85z" />
          </clipPath>
        </defs>
        <g clipPath="url(#cp1)">
          <g clipPath="url(#cp2)">
            <path class="a" d="m-0.1 8.6h939.6v-7.7h-939.6z" />
          </g>
        </g>
      </motion.svg>
    </div>
  );
};

export default ContactPage;
