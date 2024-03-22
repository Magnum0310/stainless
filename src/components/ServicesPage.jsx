import ServiceCard from "../components/ServiceCard";

const ServicesPage = () => {
  return (
    <div className=" bg-bgSecondary relative h-screen flex flex-col justify-center items-center max-desktop:items-start padding-x border-solid border-8  bg-green-500 border-orangeColor overflow-hidden">
      <div className="relative w-full flex flex-col items-center justify-center py-5 ">
        <p className="text-4xl font-Alfa text-white">SERVICES</p>
        <div className="bg-orangeColor w-[25%] h-[10px]" />
      </div>
      {/* <div className="flex flex-wrap justify-center py-10 w-full h-full max-desktop:bg-red-500 max-desktop:flex-none max-desktop:flex-nowrap max-desktop:overflow-hidden"> */}
      <div className="bg-black overflow-hidden w-full h-full">
        <div className="flex flex-wrap justify-center pl-5 py-10 h-full max-desktop:bg-red-500 max-desktop:overflow-hidden max-desktop:inline-flex max-desktop:flex-nowrap">
          <ServiceCard />
        </div>
      </div>
      <div className="pointer-events-none absolute bottom-0 left-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-r from-neutral-950 to-neutral-950" />
      <div className="pointer-events-none absolute bottom-0 right-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-l from-neutral-950 to-neutral-950" />
      {/* <div className="pointer-events-none absolute bottom-0 left-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-r from-neutral-950/50 to-neutral-950/0" />
      <div className="pointer-events-none absolute bottom-0 right-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-l from-neutral-950/50 to-neutral-950/0" /> */}
    </div>
  );
};

export default ServicesPage;
