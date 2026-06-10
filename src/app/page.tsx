import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CitiesStrip from "@/components/CitiesStrip";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Stats from "@/components/Stats";
import Puntos from "@/components/Puntos";
import Partners from "@/components/Partners";
import Cities from "@/components/Cities";
import Corresponsal from "@/components/Corresponsal";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <CitiesStrip />
      <Services />
      <HowItWorks />
      <Stats />
      <Puntos />
      <Partners />
      <Cities />
      <Corresponsal />
      <Contact />
      <Footer />
    </>
  );
}
