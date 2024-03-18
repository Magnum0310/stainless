import ServiceCard from "../components/ServiceCard";

const ServicesPage = () => {
  return (
    <div className=" bg-bgSecondary h-full flex flex-col justify-center items-center">
      <div className="w-[90%] flex flex-col items-center justify-center pb-10 gap-3">
        <p className="text-4xl font-Alfa text-white">SERVICES</p>
        <div className=" bg-orangeColor w-[25%] h-[10px]" />
      </div>
      <div className="w-[90%] flex flex-wrap justify-center gap-8">
        <ServiceCard />
      </div>
    </div>
  );
};

export default ServicesPage;
