import { useState, useRef } from "react";
import ServiceCard from "../components/ServiceCard";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import grayArrow from "../assets/icons/grayArrow.svg";
import orangeArrow from "../assets/icons/orangeArrow.svg";

const ServicesPage = () => {
  const [cardIndex, setCardIndex] = useState(0);
  const scrollRef = useRef(null);

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
      className=" padding-x relative flex h-screen flex-col items-center justify-center overflow-hidden bg-bgSecondary max-desktop:items-start"
    >
      {isInView ? (
        <>
          <motion.div
            variants={hiddenVariants}
            className="relative mt-5 flex w-full flex-col items-center justify-center max-desktop:mt-10 desktop:py-5"
          >
            <motion.p className="font-Alfa text-4xl text-white">
              SERVICES
            </motion.p>
            <div className="h-[10px] w-[25%] bg-orangeColor" />
          </motion.div>
          {/* Container for cards */}
          {/* REVISION */}
          <motion.div
            variants={scaleVariant}
            initial="initial"
            animate="animate"
            className="relative z-10 my-10 flex h-full w-full flex-col justify-around overflow-hidden"
          >
            <motion.div
              variants={hiddenVariants}
              className="z-5 relative grid w-[2500px]  md:grid-cols-8 md:grid-rows-1 lg:h-4/5 mdDesktop:px-5 xl:w-[3500px] desktop:h-full desktop:w-full desktop:grid-cols-4 desktop:grid-rows-2 "
              // Added - lg:grid-cols-8 lg:grid-rows-1, w-[2800px]
              // Modified - mdDesktop:w-[3500px] to max-mdDesktop:w-[3500px], xl:w-[3500px]
              animate={{ translateX: `-${cardIndex * 24.5}%` }}
              transition={{ ease: "easeInOut" }}
            >
              <ServiceCard />
            </motion.div>
            <div className="relative flex">
              <motion.div className="flex items-center justify-center gap-5">
                <motion.button
                  onClick={onPrev}
                  className="rotate-180 desktop:hidden"
                  disabled={cardIndex === 0 ? true : false}
                  variants={prevButtonVariant}
                >
                  <img
                    src={cardIndex === 0 ? grayArrow : orangeArrow}
                    className="w-3/4 max-xl:w-1/2"
                  />
                </motion.button>
                <motion.button
                  onClick={onNext}
                  className=" desktop:hidden"
                  disabled={cardIndex === 3 ? true : false}
                  variants={buttonVariants}
                >
                  <img
                    src={cardIndex === 3 ? grayArrow : orangeArrow}
                    className="w-3/4 max-xl:w-1/2"
                  />
                </motion.button>
              </motion.div>
              <motion.div className="pl-10">
                <motion.ul
                  className="relative flex h-full w-[250px] items-center justify-center gap-2 "
                  variants={loadVariants}
                >
                  <motion.li
                    className={`flex ${cardIndex === 0 ? "flex-1 bg-white" : "basis-12 bg-slate-500"} h-[10%] justify-center rounded-full`}
                    animate={
                      cardIndex === 0
                        ? { scale: 1.02 }
                        : { scale: 1, opacity: 0.3 }
                    }
                    transition={{ ease: "easeInOut" }}
                  ></motion.li>
                  <motion.li
                    className={`flex ${cardIndex === 1 ? "flex-1 bg-white" : "basis-12 bg-slate-500"} h-[10%] justify-center rounded-full bg-slate-500`}
                    animate={
                      cardIndex === 1
                        ? { scale: 1.02 }
                        : { scale: 1, opacity: 0.3 }
                    }
                    transition={{ ease: "easeInOut" }}
                  ></motion.li>
                  <motion.li
                    className={`flex ${cardIndex === 2 ? "flex-1 bg-white" : "basis-12 bg-slate-500"} h-[10%] justify-center rounded-full bg-slate-500`}
                    animate={
                      cardIndex === 2
                        ? { scale: 1.02 }
                        : { scale: 1, opacity: 0.3 }
                    }
                    transition={{ ease: "easeInOut" }}
                  ></motion.li>
                  <motion.li
                    className={`flex ${cardIndex === 3 ? "flex-1 bg-white" : "basis-12 bg-slate-500"} h-[10%] justify-center rounded-full bg-slate-500`}
                    animate={
                      cardIndex === 3
                        ? { scale: 1.02 }
                        : { scale: 1, opacity: 0.3 }
                    }
                    transition={{ ease: "easeInOut" }}
                  ></motion.li>
                </motion.ul>
              </motion.div>
            </div>
          </motion.div>
        </>
      ) : (
        <></>
      )}
      <div className="pointer-events-none absolute bottom-0 left-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-r from-neutral-950/50 to-neutral-950/0" />
      <div className="pointer-events-none absolute bottom-0 right-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-l from-neutral-950/50 to-neutral-950/0" />
    </motion.div>
  );
};

export default ServicesPage;
