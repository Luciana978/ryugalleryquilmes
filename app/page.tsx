import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import MarqueeBar from "@/components/MarqueeBar";
import Artist from "@/components/Artist";
import Scarcity from "@/components/Scarcity";
import Portfolio from "@/components/Portfolio";
import Proceso from "@/components/Proceso";
import Reserva from "@/components/Reserva";
import Testimonios from "@/components/Testimonios";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import WaFloat from "@/components/WaFloat";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <MarqueeBar />
        <Artist />
        <Scarcity />
        <Portfolio />
        <Proceso />
        <Reserva />
        <Testimonios />
        <CTA />
      </main>
      <Footer />
      <WaFloat />
    </>
  );
}
