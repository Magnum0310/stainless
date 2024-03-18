import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import ServicesPage from "./components/ServicesPage";
import ChooseUsPage from "./components/ChooseUsPage";
import ContactPage from "./components/ContactPage";

function App() {
  return (
    <main className="flex relative justify-center flex-col items-center">
      <div className="relative containerBox">
        <Navbar />
      </div>
      <div className="containerBox h-screen">
        <LandingPage />
      </div>
      <div className="containerBox h-screen">
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
