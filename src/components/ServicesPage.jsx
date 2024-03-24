import { useState } from "react";
import ServiceCard from "../components/ServiceCard";
import { motion } from "framer-motion";

const ServicesPage = () => {
  const [cardIndex, setCardIndex] = useState(0);

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
    <div className=" bg-bgSecondary relative h-screen flex flex-col justify-center items-center max-desktop:items-start padding-x overflow-hidden">
      <div className="relative w-full flex flex-col items-center justify-center py-5 max-desktop:mt-10 mt-5">
        <p className="text-4xl font-Alfa text-white">SERVICES</p>
        <div className="bg-orangeColor w-[25%] h-[10px]" />
      </div>
      {/* Container for cards */}
      <div className=" z-10 relative overflow-hidden w-full h-full my-10">
        <button
          onClick={onPrev}
          className="desktop:hidden absolute text-black text-4xl h-[50px] w-[100px] bg-slate-500/50  bottom-[50%] z-10"
        >
          Prev
        </button>
        <button
          onClick={onNext}
          className="desktop:hidden absolute text-black text-4xl h-[50px] w-[100px] right-0 bg-slate-500/50 bottom-[50%] z-10"
        >
          Next
        </button>
        <motion.div
          className="flex flex-wrap gap-y-5 gap-x-5 justify-center py-10 h-full max-desktop:pl-10 max-desktop:overflow-hidden max-desktop:inline-flex max-desktop:flex-nowrap"
          animate={{ translateX: `-${cardIndex * 24.9}%` }}
        >
          <ServiceCard />
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-r from-neutral-950/50 to-neutral-950/0" />
      <div className="pointer-events-none absolute bottom-0 right-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-l from-neutral-950/50 to-neutral-950/0" />
    </div>
  );
};

export default ServicesPage;
