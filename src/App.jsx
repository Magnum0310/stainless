import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import ServicesPage from "./components/ServicesPage";
import ChooseUsPage from "./components/ChooseUsPage";
import ContactPage from "./components/ContactPage";
import { useScroll } from "framer-motion";
import { useEffect, useState } from "react";

function App() {
  const { scrollY } = useScroll();
  const [test, setTest] = useState("");
  useEffect(() => {
    console.log(scrollY);
  }, [scrollY]);

  return (
    // <main className="h-screen snap-y snap-proximity overflow-y-auto scroll-smooth border-4 border-solid border-red-500">
    <main className="h-screen">
      {/* <div className="containerBox relative">
        <Navbar />
      </div> */}
      <div className="containerBox h-screen">
        <LandingPage />
      </div>
      <div className="containerBox h-screen ">
        <ServicesPage />
      </div>
      <div className="containerBox h-screen">
        <ChooseUsPage />
      </div>
      <div className="containerBox h-screen">
        <ContactPage />
      </div>
    </main>
  );
}

export default App;
