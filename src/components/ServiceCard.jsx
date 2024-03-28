import { useState } from "react";
import { motion } from "framer-motion";
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

  const hoverVariant = {
    initial: { scale: 0.8 },
    animate: { scale: 1 },
  };

  const childVariants = {
    initial: { scale: 0.5 },
    // animate: { scale: 0.3 },
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
        "Experience the perfect blend of style and functionality with our Korean blinds installation service, tailored to complement your space while providing privacy and light control.",
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
          variants={hoverVariant}
          // whileHover={{ scale: 1.03, borderRadius: 12 }}
          // transition={{ type: "spring", stiffness: 400, damping: 10 }}
          whileHover="initial"
          className="group relative z-10 flex w-[350px] items-center justify-center gap-5 bg-gradient-to-t from-orange-500  via-amber-300 to-amber-400 text-white hover:bg-gradient-to-t hover:from-zinc-900 hover:to-stone-400 hover:text-black max-desktop:ml-0 max-desktop:w-[385px] max-xl:bg-red-500"
          key={index}
          value={index}
        >
          {/* INNER CARD */}
          <div
            className="flex h-[98%] w-[98%] items-center justify-center"
            value={index}
          >
            {/* INNER MOST CARD */}
            <div
              className="flex h-[98%] w-[98%] flex-col items-center justify-center bg-bgCard  group-hover:rounded-xl group-hover:bg-orangeColor"
              onMouseEnter={handleStartHover}
              onMouseLeave={handleEndHover}
              value={index}
            >
              <motion.div
                className="relative grid h-full w-1/2 items-center "
                value={index}
                variants={childVariants}
              >
                <img
                  src={
                    hover & (cardIndex === index)
                      ? service.active
                      : service.icon
                  }
                  className=""
                />
              </motion.div>
              {/* <div className="my-3 flex justify-center font-Alfa text-lg max-desktop:text-xl">
                  <span className=" tracking-wider" value={index}>
                    {service.title}
                  </span>
                </div> */}

              {/* <div className="flex items-center justify-center">
                <p
                  className="text-left font-Belgrano text-sm max-desktop:text-[16px] max-desktop:text-lg max-desktop:leading-6"
                  value={index}
                >
                  {service.description}
                </p>
              </div> */}
            </div>
          </div>
        </motion.div>
      ))}
    </>
  );
};

export default ServiceCard;
