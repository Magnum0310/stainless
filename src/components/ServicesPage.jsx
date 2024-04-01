import { useState, useRef } from "react";
import ServiceCard from "../components/ServiceCard";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

const ServicesPage = () => {
  const [cardIndex, setCardIndex] = useState(0);
  const scrollRef = useRef(null);

  const scaleVariant = {
    initial: { opacity: 1 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        delayChildren: 0.5,
      },
    },
  };

  const hiddenVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
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
            className="relative z-10 my-10 flex h-full w-full flex-col justify-between"
          >
            <motion.div
              variants={hiddenVariants}
              className="z-5 relative  grid mdDesktop:h-4/5 mdDesktop:w-[4000px] mdDesktop:grid-cols-8 mdDesktop:grid-rows-1 mdDesktop:bg-red-100 desktop:h-full desktop:w-full desktop:grid-cols-4 desktop:grid-rows-2 desktop:bg-green-500"
              animate={{ translateX: `-${cardIndex * 24.9}%` }}
            >
              <ServiceCard />
            </motion.div>
            <div className="bg-orange-500">
              <button
                onClick={onPrev}
                className=" bottom-[50%] z-10 h-[50px] w-[100px] bg-slate-500/50 text-4xl  text-black desktop:hidden"
              >
                Prev
              </button>
              <button
                onClick={onNext}
                className=" bottom-[50%] right-0 z-10 h-[50px] w-[100px] bg-slate-500/50 text-4xl text-black desktop:hidden"
              >
                Next
              </button>
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
