import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import ServicesPage from "./components/ServicesPage";
import ChooseUsPage from "./components/ChooseUsPage";
import ContactPage from "./components/ContactPage";

function App() {
  return (
    // <main className="h-screen snap-y snap-proximity overflow-y-auto scroll-smooth border-4 border-solid border-red-500">
    <main className="h-screen  border-4 border-solid">
      <div className="containerBox relative">
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
