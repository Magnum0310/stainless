import LandingPage from "./components/LandingPage";
import ServicesPage from "./components/ServicesPage";
import ChooseUsPage from "./components/ChooseUsPage";
import ContactPage from "./components/ContactPage";
import { motion, useScroll, useMotionValue, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import "./App.css";

function App() {
  const scrollRef = useRef(null);
  const [translate, setTranslate] = useState(0);

  const TWEEN_OPTIONS = {
    ease: "easeOut",
    duration: 0.5,
  };

  const DRAG_BUFFER = 30;
  const [containerIndex, setcontainerIndex] = useState(0);
  const dragY = useMotionValue(0);

  const onDragEnd = () => {
    const y = dragY.get();
    if (y <= -DRAG_BUFFER && containerIndex < 4 - 1) {
      setcontainerIndex((pv) => pv + 1);
    } else if (y >= DRAG_BUFFER && containerIndex > 0) {
      setcontainerIndex((pv) => pv - 1);
    }
  };

  const navVariants = {
    initial: { y: -10, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.8,
        duration: 0.3,
        staggerChildren: 0.2,
        delayChildren: 1,
      },
    },
  };

  const textVariants = {
    initial: { y: 10, opacity: 0, transition: { duration: 1 } },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.main className="relative h-full">
      {/* NAVBAR */}
      <motion.div className="containerBox h-screen" id="home">
        <LandingPage />
      </motion.div>
      <motion.div className="containerBox" id="services">
        <ServicesPage />
      </motion.div>
      <motion.div className="containerBox h-screen" id="choose">
        <ChooseUsPage />
      </motion.div>
      <motion.div className="containerBox h-screen" id="contact">
        <ContactPage />
      </motion.div>
    </motion.main>
  );
}

export default App;
