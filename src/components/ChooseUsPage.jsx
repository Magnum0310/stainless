import Weld01 from "../assets/images/weld_01.jpg";

const ChooseUsPage = () => {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <div className=" h-full w-3/4 absolute top-0 right-0 ">
        <img src={Weld01} className=" h-full w-full" />
      </div>
      <div class="relative border-x-[950px] border-y-[300px] border-transparent border-b-bgPrimary border-l-bgPrimary scale-y-[3.5]" />
      <div className="absolute z-10 top-0 w-[65%] padding h-full padding-x">
        <p className=" text-4xl font-Alfa text-orangeColor w-max">
          Why Choose Us:
        </p>
        <div className="mt-10 w-[65%]">
          <p className=" text-2xl font-Alfa text-orangeColor tracking-wide">
            Quality Craftsmanship:
          </p>
          <p className="mt-5 text-lg font-Belgrano text-white tracking-wide">
            We take pride in our superior craftsmanship and attention to detail,
            ensuring the highest quality in every project we undertake.
          </p>
        </div>
        <div className="mt-10 w-3/4">
          <p className=" text-2xl font-Alfa text-orangeColor tracking-wide">
            Customization:
          </p>
          <p className="mt-5 text-lg font-Belgrano text-white tracking-wide">
            Whether you need standard products or custom solutions, we can
            tailor our offerings to meet your specific requirements and
            preferences.
          </p>
        </div>
        <div className="mt-10 w-full">
          <p className=" text-2xl font-Alfa text-orangeColor tracking-wide">
            Reliability:
          </p>
          <p className="mt-5 text-lg font-Belgrano text-white tracking-wide">
            Count on us for prompt and reliable service, from project planning
            to installation and beyond, backed by our commitment to customer
            satisfaction.
          </p>
        </div>
      </div>
      <div className=" bg-darkGray top-12 bottom-64 left-0 w-[8%] text-white text-2xl absolute"></div>
      <div className="bg-lightGray z-10 opacity-40 bottom-0 top-[450px] w-[18%] left-96  text-white text-2xl absolute"></div>
      <div className="bg-darkGray opacity-40 bottom-0 top-[550px] w-[18%] left-[550px] text-white text-2xl absolute"></div>
      <div className="pointer-events-none absolute bottom-0 left-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-r from-neutral-950/50 to-neutral-950/0" />
      <div className="pointer-events-none absolute bottom-0 right-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-l from-neutral-950/50 to-neutral-950/0" />
    </div>
  );
};

export default ChooseUsPage;
