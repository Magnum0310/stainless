import { useState, useRef, useEffect } from "react";
import ServiceCard from "./ServiceCard";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useMotionValue,
} from "framer-motion";
import grayArrow from "../assets/icons/grayArrow.svg";
import orangeArrow from "../assets/icons/orangeArrow.svg";

const ServicesPage = () => {
  const [cardIndex, setCardIndex] = useState(0);
  const scrollRef = useRef(null);

  const DRAG_BUFFER = 30;
  const [containerIndex, setcontainerIndex] = useState(0);
  const dragX = useMotionValue(0);

  const onDragEnd = () => {
    const x = dragX.get();
    if (x <= -DRAG_BUFFER && cardIndex < 4 - 1) {
      setCardIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && cardIndex > 0) {
      setCardIndex((pv) => pv - 1);
    }
  };

  const scaleVariant = {
    initial: { opacity: 1 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
      },
    },
  };

  const hiddenVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  const buttonVariants = {
    initial: { y: 5, opacity: 0, scale: 0.8 },
    animate: { y: 0, opacity: 1, scale: 1, transition: { ease: "easeInOut" } },
  };

  const loadVariants = {
    initial: { y: 5, opacity: 0, scale: 0.8 },
    animate: { y: 0, opacity: 1, scale: 1, transition: { ease: "easeInOut" } },
  };

  const prevButtonVariant = {
    initial: { y: 5, opacity: 0, scale: 0.8, rotate: 180 },
    animate: {
      y: 0,
      opacity: 1,
      scale: 1,
      rotate: 180,
      transition: { ease: "easeInOut" },
    },
  };

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const onNext = () => {
    if (cardIndex === 3) {
      return;
    }
    setCardIndex((cardIndex) => cardIndex + 1);
  };
  const onPrev = () => {
    if (cardIndex === 0) {
      return;
    }
    setCardIndex((cardIndex) => cardIndex - 1);
  };

  const isInView = useInView(scrollRef, {
    margin: "0px 100px -300px 0px",
  });

  return (
    // Main Container of Page
    <motion.div
      ref={scrollRef}
      variants={scaleVariant}
      initial="initial"
      animate="animate"
      // className="padding-x relative flex h-screen flex-col items-center justify-center overflow-hidden bg-bgSecondary max-desktop:items-start"
      className="padding-servicepage relative flex flex-col items-center justify-center overflow-hidden bg-bgSecondary max-desktop:items-start max-md:h-screen max-sm:h-max"
    >
      {/* {isInView ? (
        <> */}
      <motion.div
        variants={hiddenVariants}
        className="relative mt-5 flex w-full flex-col items-center justify-center max-desktop:mt-10 desktop:py-5"
      >
        <motion.p className="font-Alfa text-4xl text-white max-xl:text-2xl max-lg:text-xl">
          SERVICES
        </motion.p>
        <div className="h-[10px] w-[35%] bg-orangeColor max-lg:w-[40%]" />
      </motion.div>
      {/* Container for cards */}
      {/* REVISION */}
      <motion.div
        variants={scaleVariant}
        initial="initial"
        animate="animate"
        className="relative z-10 my-10 flex h-full w-full overflow-hidden"
      >
        <motion.div
          // className="relative z-10 grid place-items-center max-desktop:grid-cols-4 max-desktop:grid-rows-2 max-2xl:grid-cols-2 max-2xl:grid-rows-4 max-2xl:bg-red-500 max-xl:bg-green-500 max-lg:bg-gray-500 max-md:bg-orange-500 max-sm:bg-violet-500 desktop:h-full desktop:w-full"
          className="relative z-10 grid place-items-center max-desktop:grid-cols-4 max-desktop:grid-rows-2 max-2xl:grid-cols-2 max-2xl:grid-rows-4  max-sm:flex max-sm:h-[500%] max-sm:flex-col  desktop:h-full desktop:w-full"
          // Added - lg:grid-cols-8 lg:grid-rows-1, w-[2800px]
          // Modified - mdDesktop:w-[3500px] to max-mdDesktop:w-[3500px], xl:w-[3500px]
          // animate={{ translateX: `-${cardIndex * 24.5}%` }}
          animate={{
            translateX: `-${width > 1200 ? cardIndex * 25 : cardIndex * 25}%`,
          }}
          // animate={{ translateX: `-${containerIndex * 14}%` }}
          onDragEnd={onDragEnd}
          transition={{ ease: "easeInOut" }}
        >
          <ServiceCard />
        </motion.div>
        {/* <div className="relative flex">
          <motion.div className="ml-5 flex  items-center justify-start gap-5 bg-green-500 max-xl:ml-0 max-xl:justify-start">
            <motion.img
              onClick={onPrev}
              variants={prevButtonVariant}
              src={cardIndex === 0 ? grayArrow : orangeArrow}
              className="w-1/4 rotate-180 cursor-pointer  max-xl:w-1/4 desktop:hidden"
            />

            <motion.img
              onClick={onNext}
              variants={buttonVariants}
              src={cardIndex === 3 ? grayArrow : orangeArrow}
              className="w-1/4 cursor-pointer max-xl:w-1/4 desktop:hidden"
              disabled={cardIndex === 3 ? true : false}
            />
          </motion.div>
          <motion.div className=" pl-0 max-xl:relative max-xl:right-[7%] max-lg:right-[10%] max-md:right-[13%] max-sm:right-[10%]">
            <motion.ul
              className="relative flex h-full w-[250px] items-center justify-center gap-2 "
              variants={loadVariants}
            >
              <motion.li
                className={`flex ${cardIndex === 0 ? "flex-1 bg-white" : "basis-12 bg-slate-500"} h-[10%] justify-center rounded-full`}
                animate={
                  cardIndex === 0 ? { scale: 1.02 } : { scale: 1, opacity: 0.3 }
                }
                transition={{ ease: "easeInOut" }}
              ></motion.li>
              <motion.li
                className={`flex ${cardIndex === 1 ? "flex-1 bg-white" : "basis-12 bg-slate-500"} h-[10%] justify-center rounded-full bg-slate-500`}
                animate={
                  cardIndex === 1 ? { scale: 1.02 } : { scale: 1, opacity: 0.3 }
                }
                transition={{ ease: "easeInOut" }}
              ></motion.li>
              <motion.li
                className={`flex ${cardIndex === 2 ? "flex-1 bg-white" : "basis-12 bg-slate-500"} h-[10%] justify-center rounded-full bg-slate-500`}
                animate={
                  cardIndex === 2 ? { scale: 1.02 } : { scale: 1, opacity: 0.3 }
                }
                transition={{ ease: "easeInOut" }}
              ></motion.li>
              <motion.li
                className={`flex ${cardIndex === 3 ? "flex-1 bg-white" : "basis-12 bg-slate-500"} h-[10%] justify-center rounded-full bg-slate-500`}
                animate={
                  cardIndex === 3 ? { scale: 1.02 } : { scale: 1, opacity: 0.3 }
                }
                transition={{ ease: "easeInOut" }}
              ></motion.li>
            </motion.ul>
          </motion.div>
        </div> */}
      </motion.div>
      {/* </> */}
      {/* ) : (
        <></>
      )
      } */}
      <div className="pointer-events-none absolute bottom-0 left-0 top-0  w-[10vw] max-w-[100px] bg-gradient-to-r from-neutral-950/50 to-neutral-950/0" />
      <div className="pointer-events-none absolute bottom-0 right-0 top-0  w-[10vw] max-w-[100px] bg-gradient-to-l from-neutral-950/50 to-neutral-950/0" />
      <div className="pointer-events-none absolute bottom-0 top-0 -z-10 w-full bg-gradient-to-t from-gray-900/80 via-gray-500/50 to-gray-900/50 " />
    </motion.div>
  );
};

export default ServicesPage;
