import ServiceCard from "../components/ServiceCard";

const ServicesPage = () => {
  return (
    <div className=" bg-bgSecondary h-full flex flex-col justify-center items-center ">
      <div className="w-[90%] flex flex-col items-center justify-center pb-10 gap-3">
        <p className="text-4xl font-Alfa text-white">SERVICES</p>
        <div className=" bg-orangeColor w-[25%] h-[10px]" />
      </div>
      <div className="w-[95%] flex flex-wrap justify-center gap-5">
        <ServiceCard />
      </div>
      <div className="pointer-events-none absolute bottom-0 left-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-r from-neutral-950/50 to-neutral-950/0" />
      <div className="pointer-events-none absolute bottom-0 right-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-l from-neutral-950/50 to-neutral-950/0" />
    </div>
  );
};

export default ServicesPage;
