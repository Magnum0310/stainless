import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import ServicesPage from "./components/ServicesPage";
import ChooseUsPage from "./components/ChooseUsPage";
import ContactPage from "./components/ContactPage";

function App() {
  return (
    <main className="snap-y snap-mandatory">
      <div className="containerBox relative">
        <Navbar />
      </div>
      <div className="containerBox h-screen snap-start">
        <LandingPage />
      </div>
      <div className="containerBox h-screen snap-start">
        <ServicesPage />
      </div>
      <div className="containerBox h-screen snap-start">
        <ChooseUsPage />
      </div>
      <div className="containerBox h-screen snap-start">
        <ContactPage />
      </div>
    </main>
  );
}

export default App;
