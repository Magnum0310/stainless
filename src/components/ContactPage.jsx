import { useRef } from "react";
import Circle from "../assets/images/circle.svg";
import Line from "../assets/images/line.svg";
import { motion, useInView } from "framer-motion";

const ContactPage = () => {
  const divRef = useRef(null);
  const contactRef = useRef(null);
  const isInView = useInView(divRef, {
    once: true,
    margin: "0px 100px -300px 0px",
  });
  const bgVariants = {
    initial: { opacity: 1 },
    animate: {
      opacity: 1,
      transition: {
        delay: 1,
        duration: 1.5,
        staggerChildren: 0.3,
        delayChildren: 1,
      },
    },
  };
  const topSvgVariants = {
    initial: {
      opacity: 0,
      translateX: -200,
    },
    animate: {
      opacity: 1,
      translateX: 0,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };
  const bottomSvgVariants = {
    initial: {
      opacity: 0,
      translateX: 200,
    },
    animate: {
      opacity: 1,
      translateX: 0,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  const textVariants = {
    initial: {
      background: "linear-gradient(to top, #ffffff, #ffffff,#ffffff)",
      backgroundClip: "text",
    },
    animate: {
      background: "linear-gradient(to top, #f97316, #fcd34d, #f97316)",
      backgroundClip: "text",
      transition: { delay: 1.3, duration: 0.8 },
    },
  };

  const contactBgVariant = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.2,
        staggerChildren: 0.2,
        delayChildren: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const contactTextVariant = {
    initial: { y: 5, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      ref={divRef}
      variants={bgVariants}
      initial="initial"
      animate="animate"
      className="padding-x flex h-full w-full flex-col items-center justify-center "
      style={{
        backgroundImage:
          "radial-gradient(125% 125% at 50% 0%, #232532 50%, #D9D9D9",
      }}
    >
      {isInView ? (
        <>
          {/* <motion.svg
            variants={topSvgVariants}
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
          </motion.svg> */}
          <motion.div
            variants={contactBgVariant}
            initial="initial"
            animate="animate"
            className="flex w-[85%] flex-col gap-10 max-lg:w-[95%] max-lg:gap-5"
          >
            <p className="flex items-center justify-center gap-5">
              <motion.span
                variants={contactTextVariant}
                className="font-Alfa text-[64px] text-orangeColor max-xl:text-[52px] max-xl:text-blue-500 max-lg:text-green-500 max-md:text-violet-500 max-sm:text-red-500"
              >
                Contact
              </motion.span>
              <motion.span
                variants={contactTextVariant}
                className=" font-Alfa text-[64px] text-orangeColor max-xl:text-[52px]"
              >
                Us
              </motion.span>
            </p>
            <motion.p
              variants={contactTextVariant}
              className="px-12 text-center font-Belgrano text-xl tracking-wide text-white max-xl:px-2 max-xl:text-lg max-lg:px-0 max-lg:text-base"
            >
              Ready to transform your space with our stainless steel solutions?
              Contact us today to discuss your project or request a
              consultation. At{" "}
              <motion.span
                variants={textVariants}
                className="bg-gradient-to-t from-orange-500 via-amber-300 to-amber-500 bg-clip-text text-4xl font-bold tracking-wide text-transparent max-lg:text-3xl"
              >
                Aries Stainless{" "}
              </motion.span>
              Installation Services, we bring your vision to{" "}
              <motion.span
                variants={textVariants}
                className="bg-gradient-to-t from-orange-500 via-amber-300 to-amber-500 bg-clip-text text-4xl font-bold tracking-wide text-orangeColor text-transparent max-lg:text-3xl"
              >
                life!
              </motion.span>
            </motion.p>
          </motion.div>
          {/* <motion.svg
            variants={bottomSvgVariants}
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
          </motion.svg> */}
          <motion.a
            href="#home"
            className="relative top-10 flex  justify-center rounded-full border-2 border-white p-4 font-Belgrano font-bold text-white hover:text-black"
            variants={contactTextVariant}
            transition={{ duration: 0.2 }}
            whileHover={{
              scale: 1.02,
              backgroundColor: "#f5a81e",
            }}
          >
            Back to Top
          </motion.a>
        </>
      ) : (
        <></>
      )}
    </motion.div>
  );
};

export default ContactPage;
