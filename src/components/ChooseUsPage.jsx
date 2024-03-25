import Weld01 from "../assets/images/weld_01.jpg";
import Triangle from "../assets/images/triangle.svg";

const ChooseUsPage = () => {
  return (
    <div className="relative h-full w-full overflow-hidden">
      {/* IMAGE */}
      {/* <div className=" h-full w-3/4 absolute top-0 right-0 ">
        <img src={Weld01} className=" h-full w-full" />
      </div> */}
      {/* ABSTRACT */}
      {/* <div class="relative border-x-[950px] border-y-[300px] border-transparent border-b-bgPrimary border-l-bgPrimary scale-y-[3.5]" /> */}

      <div className="relative h-full w-full">
        {/* ABSTRACT */}
        <div
          className="absolute right-[38%] z-10 h-full w-full scale-[2.5]"
          style={{
            backgroundImage: `url(${Triangle})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />
        {/* IMAGE */}
        <div className="relative left-64 w-full bg-orange-500">
          <img src={Weld01} className="h-full " />
        </div>
      </div>
      {/* TEXT AREA */}
      <div className="padding padding-x absolute top-0 z-20 flex h-full w-[65%] flex-col justify-center gap-5">
        <p className=" w-max font-Alfa text-4xl text-orangeColor">
          Why Choose Us:
        </p>
        <div className="mt-10 w-[65%]">
          <p className=" font-Alfa text-2xl tracking-wide text-orangeColor">
            Quality Craftsmanship:
          </p>
          <p className="mt-5 font-Belgrano text-lg tracking-wide text-white">
            We take pride in our superior craftsmanship and attention to detail,
            ensuring the highest quality in every project we undertake.
          </p>
        </div>
        <div className="mt-10 w-3/4">
          <p className=" font-Alfa text-2xl tracking-wide text-orangeColor">
            Customization:
          </p>
          <p className="mt-5 font-Belgrano text-lg tracking-wide text-white">
            Whether you need standard products or custom solutions, we can
            tailor our offerings to meet your specific requirements and
            preferences.
          </p>
        </div>
        <div className="mt-10 w-full">
          <p className=" font-Alfa text-2xl tracking-wide text-orangeColor">
            Reliability:
          </p>
          <p className="mt-5 font-Belgrano text-lg tracking-wide text-white">
            Count on us for prompt and reliable service, from project planning
            to installation and beyond, backed by our commitment to customer
            satisfaction.
          </p>
        </div>
      </div>
      <div className=" absolute bottom-64 top-12 z-10 w-[8%] bg-darkGray text-2xl text-white"></div>
      <div className="absolute bottom-0 left-[33%] top-[60%] z-30 w-[18%] bg-lightGray  text-2xl text-white opacity-40"></div>
      <div className="absolute bottom-0 left-[40%] top-[70%] z-20 w-[18%] bg-darkGray text-2xl text-white opacity-40"></div>
      <div className="pointer-events-none absolute bottom-0 left-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-r from-neutral-950/50 to-neutral-950/0" />
      <div className="pointer-events-none absolute bottom-0 right-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-l from-neutral-950/50 to-neutral-950/0" />
    </div>
  );
};

export default ChooseUsPage;
