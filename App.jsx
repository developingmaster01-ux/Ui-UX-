import { useCallback } from "react";
import { CartProvider } from "./context/CartContext";
import ScrollProgress from "./components/ScrollProgress";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import CinematicMenuVideo from "./components/CinematicMenuVideo";
import BrandStory from "./components/BrandStory";
import SignatureFood from "./components/SignatureFood";
import InteractiveMenu from "./components/InteractiveMenu";
import WhyBadshah from "./components/WhyBadshah";
import Location from "./components/Location";
import QRConnect from "./components/QRConnect";
import GoogleReview from "./components/GoogleReview";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import FloatingOrderBar from "./components/FloatingOrderBar";

function scrollToId(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function App() {
  const goToMenu = useCallback(() => scrollToId("menu"), []);
  const goToLocation = useCallback(() => scrollToId("location"), []);

  return (
    <CartProvider>
      <div className="min-h-screen bg-ink">
        <ScrollProgress />
        <NavBar onMenuClick={goToMenu} onLocationClick={goToLocation} />
        <Hero onMenuClick={goToMenu} onLocationClick={goToLocation} />
        <CinematicMenuVideo />
        <BrandStory />
        <SignatureFood />
        <InteractiveMenu />
        <WhyBadshah />
        <Location />
        <QRConnect />
        <GoogleReview />
        <FinalCTA onMenuClick={goToMenu} />
        <Footer />
        <FloatingOrderBar />
      </div>
    </CartProvider>
  );
}
