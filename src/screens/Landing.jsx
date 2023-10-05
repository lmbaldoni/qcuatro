import React from "react";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header";
import Services from "../components/Sections/Services";
import Projects from "../components/Sections/Projects";
import SaaS from "../components/Sections/SaaS";
import OmPremise from "../components/Sections/OnPremise";
import Blog from "../components/Sections/Blog";
import Certificados from "../components/Sections/Certificados";
// import Pricing from "../components/Sections/Pricing";
import VentajasOFSAA from "../components/Sections/VentajasOFSAA";
import Contact from "../components/Sections/Contact";
import Footer from "../components/Sections/Footer"
import Clientes from "../components/Sections/Clientes";

export default function Landing() {
  return (
    <>
      <TopNavbar />
      <Header />
      <Clientes />
      <Services />
      {/* <Certificados /> */}
      {/* <SaaS />
      <OmPremise /> */}
      <Blog />
      {/* <Pricing /> */}
      <VentajasOFSAA />
      <Contact />
      <Footer />
    </>
  );
}


