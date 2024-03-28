import { useState, useRef } from "react";
import ServiceCard from "../components/ServiceCard";
import { motion, useScroll, useTransform } from "framer-motion";

const ServicesPage = () => {
  const [cardIndex, setCardIndex] = useState(0);
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["0 1", "0.8 1"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const textScale = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const test = useTransform(scrollYProgress, [0, 1], [200, 0]);
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

  return (
    // Main Container of Page
    <motion.div className=" padding-x relative flex h-screen flex-col items-center justify-center overflow-hidden bg-bgSecondary max-desktop:items-start">
      <motion.div
        ref={scrollRef}
        style={{ translateY: test, opacity: textScale }}
        className="relative mt-5 flex w-full flex-col items-center justify-center py-5 max-desktop:mt-10"
      >
        <motion.p className="font-Alfa text-4xl text-white">SERVICES</motion.p>
        <div className="h-[10px] w-[25%] bg-orangeColor" />
      </motion.div>
      {/* Container for cards */}
      {/* BACKUP */}
      {/* <motion.div
        ref={scrollRef}
        style={{
          scale: scale,
          opacity: scrollYProgress,
        }}
        className="relative z-10 my-10 h-full w-full overflow-hidden "
      >
        <button
          onClick={onPrev}
          className="absolute bottom-[50%] z-10 h-[50px] w-[100px] bg-slate-500/50 text-4xl  text-black desktop:hidden"
        >
          Prev
        </button>
        <button
          onClick={onNext}
          className="absolute bottom-[50%] right-0 z-10 h-[50px] w-[100px] bg-slate-500/50 text-4xl text-black desktop:hidden"
        >
          Next
        </button>
        <motion.div
          className="flex h-full flex-wrap justify-center gap-x-5 gap-y-5 py-10 max-desktop:inline-flex max-desktop:flex-nowrap max-desktop:overflow-hidden"
          animate={{ translateX: `-${cardIndex * 24.9}%` }}
        >
          <ServiceCard />
        </motion.div>
      </motion.div> */}
      {/* REVISION */}
      <motion.div
        ref={scrollRef}
        style={{
          scale: scale,
          opacity: scrollYProgress,
        }}
        className="relative z-10 my-10 h-full w-full overflow-hidden "
      >
        {/* <button
          onClick={onPrev}
          className="absolute bottom-[50%] z-10 h-[50px] w-[100px] bg-slate-500/50 text-4xl  text-black desktop:hidden"
        >
          Prev
        </button>
        <button
          onClick={onNext}
          className="absolute bottom-[50%] right-0 z-10 h-[50px] w-[100px] bg-slate-500/50 text-4xl text-black desktop:hidden"
        >
          Next
        </button> */}
        <motion.div className="grid h-full  grid-cols-4 grid-rows-2">
          <ServiceCard />
        </motion.div>
      </motion.div>

      <div className="pointer-events-none absolute bottom-0 left-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-r from-neutral-950/50 to-neutral-950/0" />
      <div className="pointer-events-none absolute bottom-0 right-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-l from-neutral-950/50 to-neutral-950/0" />
    </motion.div>
  );
};

export default ServicesPage;
