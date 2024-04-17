import { useRef, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useAnimation,
  useInView,
} from "framer-motion";
import Weld01 from "../assets/images/weld_01.jpg";
import Triangle from "../assets/images/triangle.svg";

const ChooseUsPage = () => {
  const controls = useAnimation();
  const scrollRef = useRef(null);
  const divRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["0 1", "1 1"],
  });

  const isInView = useInView(divRef, {
    once: true,
    margin: "0px 100px -300px 0px",
  });

  const paraVariants = {
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { ease: "easeInOut" } },
  };
  const parasVariants = {
    animate: { opacity: 0 },
    initial: { opacity: 0 },
  };
  const bgVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        delay: 0.3,
        duration: 1,
        ease: "easeInOut",
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const translate = useTransform(scrollYProgress, [0, 1], [-200, 0]);

  useEffect(() => {
    controls.start({ scale: 1.5 });
  }, [controls]);

  return (
    <div className="relative h-full w-full overflow-hidden">
      {/* IMAGE */}
      {/* <div className=" h-full w-3/4 absolute top-0 right-0 ">
        <img src={Weld01} className=" h-full w-full" />
      </div> */}
      {/* ABSTRACT */}
      {/* <div class="relative border-x-[950px] border-y-[300px] border-transparent border-b-bgPrimary border-l-bgPrimary scale-y-[3.5]" /> */}
      <div className="relative h-full w-full">
        {/* TRIANGLE */}
        <motion.div
          className="absolute bottom-72 right-[45%] z-10 h-full w-full max-xl:right-[45%] max-xl:bg-bgPrimary max-xl:opacity-75"
          style={{
            backgroundImage: `url(${Triangle})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            transform: isInView ? "translateX(0px)" : "translateX(-2000px)",
            scale: isInView ? 2.5 : 2,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        ></motion.div>
        {/* IMAGE */}
        <motion.div
          ref={divRef}
          className="relative h-full w-full bg-orange-500 max-xl:left-0"
        >
          <img
            src={Weld01}
            className="relative h-full w-full object-cover object-top"
          />
        </motion.div>
      </div>
      {/* TEXT AREA */}
      {isInView ? (
        <motion.div
          variants={bgVariants}
          initial="initial"
          animate="animate"
          className="absolute top-0 z-20 flex h-full w-[70%] flex-col justify-center gap-5 px-14 max-xl:w-[85%] max-xl:gap-3 max-md:w-full "
        >
          <motion.p
            variants={paraVariants}
            className="w-max font-Alfa text-4xl text-orangeColor max-xl:text-3xl max-xl:text-green-500 max-lg:text-blue-500 max-md:text-red-500 max-sm:text-violet-500"
          >
            Why Choose Us:
          </motion.p>
          <div className="mt-10 w-[70%] max-xl:w-[80%] max-lg:w-[90%]">
            <motion.p
              variants={paraVariants}
              className="text-choose-title font-Alfa tracking-wide text-orangeColor "
            >
              Quality Craftsmanship:
            </motion.p>
            <motion.p
              variants={paraVariants}
              className="text-choose-description mt-5 font-Belgrano tracking-wide text-white max-sm:mt-3 "
            >
              We take pride in our superior craftsmanship and attention to
              detail, ensuring the highest quality in every project we
              undertake.
            </motion.p>
          </div>
          <div className="mt-10 w-4/5 max-xl:w-[90%] max-lg:w-full">
            <motion.p
              variants={paraVariants}
              className=" text-choose-title font-Alfa tracking-wide text-orangeColor"
            >
              Customization:
            </motion.p>
            <motion.p
              variants={paraVariants}
              className="text-choose-description mt-5 font-Belgrano tracking-wide text-white max-sm:mt-3"
            >
              Whether you need standard products or custom solutions, we can
              tailor our offerings to meet your specific requirements and
              preferences.
            </motion.p>
          </div>
          <div className="mt-10 w-[90%] max-xl:w-full max-lg:w-[110%]">
            <motion.p
              variants={paraVariants}
              className=" text-choose-title font-Alfa tracking-wide text-orangeColor"
            >
              Reliability:
            </motion.p>
            <motion.p
              variants={paraVariants}
              className="text-choose-description mt-5 font-Belgrano tracking-wide text-white max-sm:mt-3"
            >
              Count on us for prompt and reliable service, from project planning
              to installation and beyond, backed by our commitment to customer
              satisfaction.
            </motion.p>
          </div>
        </motion.div>
      ) : (
        <></>
      )}
      <div className="absolute bottom-64 top-12 z-10 w-[8%] bg-darkGray text-2xl text-white"></div>
      <div className="absolute bottom-0 left-[33%] top-[60%] z-30 w-[18%] bg-lightGray  text-2xl text-white opacity-40"></div>
      <div className="absolute bottom-0 left-[40%] top-[70%] z-20 w-[18%] bg-darkGray text-2xl text-white opacity-40"></div>
      <div className="pointer-events-none absolute bottom-0 left-0 top-0  w-[10vw] max-w-[100px] bg-gradient-to-r from-neutral-950/50 to-neutral-950/0" />
      <div className="pointer-events-none absolute bottom-0 right-0 top-0  w-[10vw] max-w-[100px] bg-gradient-to-l from-neutral-950/50 to-neutral-950/0" />
    </div>
  );
};

export default ChooseUsPage;
