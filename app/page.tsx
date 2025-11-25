import Header from "./components/header";
import Hero from "./components/hero";
import React from "react";
import Footer from "./components/footer";
import GlobalMarkets from "./components/globalmarkets";
import Newsletter from "./components/newsletter";
import Services from "./components/services";
import Perspective from "./components/perspective";
import Benefits from "./components/benefits";
import TaaS2 from "./components/taas2";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <GlobalMarkets />
      <Benefits />
      <Services />
      <TaaS2 />
      <Perspective />
      <Newsletter />
      <Footer />
    </>
  );
}

