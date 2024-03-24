import { useState } from "react";
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
        <div
          // Now adding responsive for 1280px screens
          className="relative text-white  hover:bg-orangeColor hover:text-black gap-5 w-[350px] max-desktop:w-[385px] max-xl:bg-red-500  bg-gradient-to-b from-blue-300 to-pink-300 max-desktop:ml-0"
          key={index}
          onMouseEnter={handleStartHover}
          onMouseLeave={handleEndHover}
          value={index}
        >
          {/* <div
          // Now adding responsive for 1280px screens
          className="relative text-white padding-card hover:bg-orangeColor hover:text-black gap-5 w-[350px] max-desktop:w-[385px] max-xl:bg-red-500 justify-center bg-gradient-to-b from-blue-300 to-pink-300 flex flex-col max-desktop:ml-0"
          key={index}
          onMouseEnter={handleStartHover}
          onMouseLeave={handleEndHover}
          value={index}
        > */}
          {/* <div className="bg-gradient-to-b from-blue-300 to-pink-300 h-[300px] p-1"> */}
          <div className="h-full flex items-center justify-center">
            <div className="h-[98%] w-[98%] bg-bgCard flex flex-col items-center justify-center">
              <div
                value={index}
                className="w-full items-center justify-center "
              >
                <div
                  className="h-10 w-28 flex items-center mx-auto max-desktop:h-16"
                  value={index}
                >
                  <img
                    src={
                      hover & (cardIndex === index)
                        ? service.active
                        : service.icon
                    }
                    className="w-full h-full"
                    value={index}
                  />
                </div>
                <div className="text-lg font-Alfa my-3 flex justify-center max-desktop:text-xl">
                  <span className=" tracking-wider" value={index}>
                    {service.title}
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <p
                  className="text-sm text-left font-Belgrano max-desktop:text-lg max-desktop:text-[16px] max-desktop:leading-6"
                  value={index}
                >
                  {service.description}
                </p>
              </div>
            </div>
          </div>
          {/* <div className="h-full bg-black">TEST</div> */}
        </div>
      ))}
    </>
  );
};

export default ServiceCard;
