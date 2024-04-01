import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import gateOrange from "../assets/icons/gateOrange.svg";
import gateBlack from "../assets/icons/gateBlack.svg";
import fenceOrange from "../assets/icons/fenceOrange.svg";
import fenceBlack from "../assets/icons/fenceBlack.svg";
import bakeryOrange from "../assets/icons/bakeryOrange.svg";
import bakeryBlack from "../assets/icons/bakeryBlack.svg";
import kitchenOrange from "../assets/icons/kitchenOrange.svg";
import kitchenBlack from "../assets/icons/kitchenBlack.svg";
import tablesChairsOrange from "../assets/icons/tablesChairsOrange.svg";
import tablesChairsBlack from "../assets/icons/tablesChairsBlack.svg";
import signageOrange from "../assets/icons/signageOrange.svg";
import signageBlack from "../assets/icons/signageBlack.svg";
import grillOrange from "../assets/icons/grillOrange.svg";
import grillBlack from "../assets/icons/grillBlack.svg";
import blindsOrange from "../assets/icons/blindsOrange.svg";
import blindsBlack from "../assets/icons/blindsBlack.svg";

const ServiceCard = () => {
  const [hover, setHover] = useState(false);
  const [cardIndex, setCardIndex] = useState(null);
  const scrollRef = useRef(null);
  const isInView = useInView(scrollRef, {
    once: true,
    margin: "0px 100px -300px 0px",
  });

  const hoverVariant = {
    initial: { scale: 1, color: "white" },
    animate: { scale: 1, color: "white" },
  };

  const childVariants = {
    initial: { scale: 0.6, y: 0, transition: { duration: 0.3 } },
    animate: { scale: 0.7, y: 0, transition: { duration: 0.3 } },
  };

  const titleVariants = {
    initial: {
      scale: 1.4,
      y: "150%",
      color: "white",
      transition: {
        delay: 0.4,
        type: "tween",
        ease: "anticipate",
        duration: 0.5,
      },
    },
    animate: {
      scale: 1,
      color: "white",
      y: "0%",
      transition: {
        delay: 0.1,
        type: "tween",
        ease: "anticipate",
        duration: 0.5,
      },
    },
  };

  const descriptionVariants = {
    initial: {
      y: "20%",
      opacity: 0,
      transition: {
        color: "transparent",
        delay: 0.1,
        type: "tween",
        ease: "anticipate",
        duration: 0.5,
      },
    },
    animate: {
      y: "10%",
      opacity: 1,
      transition: {
        color: "white",
        delay: 0.3,
        duration: 0.3,
      },
    },
  };

  const handleStartHover = (e) => {
    console.log(e.target.getAttribute("value"));
    setCardIndex(Number(e.target.getAttribute("value")));
    setHover(true);
  };

  const handleEndHover = () => {
    setHover(false);
  };

  const services = [
    {
      icon: gateOrange,
      active: gateBlack,
      title: "Gates & Fences",
      description:
        "Secure your premises while adding a touch of elegance with our high-quality stainless steel gates and fences",
    },
    {
      icon: fenceOrange,
      active: fenceBlack,
      title: "Railings",
      description:
        "Elevate the aesthetics and safety of your spaces with our custom stainless steel railings designed to suit your style and specifications.",
    },
    {
      icon: bakeryOrange,
      active: bakeryBlack,
      title: "Bakery Equipment",
      description:
        "Enhance your bakery operations with our range of stainless steel bakery equipment, from worktables and racks to display cases and ovens.",
    },
    {
      icon: kitchenOrange,
      active: kitchenBlack,
      title: "Kitchen Equipment",
      description:
        "Equip your kitchen with top-of-the-line stainless steel equipment, including sinks, shelves, counter tops, and more, designed for durability and functionality.",
    },
    {
      icon: tablesChairsOrange,
      active: tablesChairsBlack,
      title: "Tables & Chairs",
      description:
        "Explore our selection of stainless steel tables and chairs, perfect for both indoor and outdoor use in commercial and residential settings.",
    },
    {
      icon: signageOrange,
      active: signageBlack,
      title: "Letter/Signage",
      description:
        "Make a statement with our stainless steel lettering and signage solutions, customized to reflect your brand identity or personal style.",
    },
    {
      icon: grillOrange,
      active: grillBlack,
      title: "Grills",
      description:
        "Enhance the security and appeal of your property with our durable stainless steel grills available in various designs and finishes.",
    },
    {
      icon: blindsOrange,
      active: blindsBlack,
      title: "Korean Blinds",
      description:
        "Experience the perfect blend of style and functionality with our Korean blinds, tailored to complement your space while providing privacy and light control.",
    },
  ];

  return (
    <>
      {services.map((service, index) => (
        // OUTER CARD
        // <motion.div
        //   // Now adding responsive for 1280px screens
        //   whileHover={{ scale: 1.03, borderRadius: 12 }}
        //   transition={{ type: "spring", stiffness: 400, damping: 10 }}
        //   className="group relative z-10 flex w-[350px] items-center justify-center gap-5 bg-gradient-to-t from-orange-500  via-amber-300 to-amber-400 text-white hover:bg-gradient-to-t hover:from-zinc-900 hover:to-stone-400 hover:text-black max-desktop:ml-0 max-desktop:w-[385px] max-xl:bg-red-500"
        //   key={index}
        //   value={index}
        // >
        //   {/* INNER CARD */}
        //   <div
        //     className="flex h-[98%] w-[98%] items-center justify-center"
        //     value={index}
        //   >
        //     {/* INNER MOST CARD */}
        //     <div
        //       className="flex h-[98%] w-[98%] flex-col items-center justify-center bg-bgCard px-5 group-hover:rounded-xl group-hover:bg-orangeColor"
        //       onMouseEnter={handleStartHover}
        //       onMouseLeave={handleEndHover}
        //       value={index}
        //     >
        //       <div
        //         value={index}
        //         className="w-full items-center justify-center "
        //       >
        //         <div
        //           className="mx-auto flex h-10 w-28 items-center max-desktop:h-16"
        //           value={index}
        //         >
        //           <img
        //             src={
        //               hover & (cardIndex === index)
        //                 ? service.active
        //                 : service.icon
        //             }
        //             className="h-full w-full"
        //           />
        //         </div>
        //         <div className="my-3 flex justify-center font-Alfa text-lg max-desktop:text-xl">
        //           <span className=" tracking-wider" value={index}>
        //             {service.title}
        //           </span>
        //         </div>
        //       </div>
        //       <div className="flex items-center justify-center">
        //         <p
        //           className="text-left font-Belgrano text-sm max-desktop:text-[16px] max-desktop:text-lg max-desktop:leading-6"
        //           value={index}
        //         >
        //           {service.description}
        //         </p>
        //       </div>
        //     </div>
        //   </div>
        // </motion.div>

        <motion.div
          // Now adding responsive for 1280px screens
          ref={scrollRef}
          variants={hoverVariant}
          // whileInView="initial"
          whileHover="animate"
          animate="initial"
          className="group relative z-10 m-5 flex items-center justify-center bg-gradient-to-t from-orange-500  via-amber-300 to-amber-400 text-white  max-desktop:ml-0 max-desktop:w-[385px] max-xl:bg-red-500"
          key={index}
        >
          {/* INNER CARD */}
          <div className="flex h-[99.5%] w-[99.5%] items-center justify-center">
            {/* INNER MOST CARD */}
            <div className="relative flex h-[99.5%] w-[99.5%] flex-col items-center justify-center  bg-bgCard">
              <motion.div
                className="relative grid items-center "
                variants={childVariants}
              >
                <img
                  src={service.icon}
                  className="aspect-[2/1] object-contain"
                />
              </motion.div>
              <div className="h-full bg-blue-200 mdDesktop:flex mdDesktop:flex-col mdDesktop:justify-center mdDesktop:bg-orange-500 desktop:inline desktop:bg-violet-500 ">
                <motion.div
                  variants={titleVariants}
                  className="flex w-full justify-center font-Alfa text-lg max-desktop:text-xl"
                >
                  <span className="tracking-wide" value={index}>
                    {service.title}
                  </span>
                </motion.div>

                <motion.div
                  variants={descriptionVariants}
                  className="flex items-center justify-center px-2"
                >
                  <p className="text-center font-Belgrano text-base max-desktop:text-[16px] max-desktop:text-lg max-desktop:leading-6">
                    {service.description}
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </>
  );
};

export default ServiceCard;
