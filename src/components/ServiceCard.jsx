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
          className="text-white bg-bgCard  w-[300px] h-[250px] padding-card hover:bg-orangeColor hover:text-black"
          key={index}
          onMouseEnter={handleStartHover}
          onMouseLeave={handleEndHover}
          value={index}
        >
          <div value={index} className=" w-full items-center justify-center">
            <div
              className="h-10 w-28 flex items-center mx-auto my-5"
              value={index}
            >
              <img
                src={
                  hover & (cardIndex === index) ? service.active : service.icon
                }
                className="w-full h-full"
                value={index}
              />
            </div>
            <div className="text-lg font-Alfa my-3 flex justify-center">
              <span className="" value={index}>
                {service.title}
              </span>
            </div>
          </div>
          <div className=" h-1/2 flex bg-green-500">
            <p className="text-sm text-center font-Belgrano" value={index}>
              {service.description}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default ServiceCard;
