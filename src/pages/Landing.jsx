import React, { useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import SecondPart from "../components/SecondPart";
import Offer from "../components/Offer";
import Demo from "../components/Demo";
import { useInView } from "react-intersection-observer";
import Security from "../components/Security";
import Contact from "../components/Contact";
import Footer from "../components/ui/Footer";

const Landing = () => {
  const [activeSections, setActiveSections] = useState("home");

  const options = {
    threshold: 0.6,
  };

  const [homeRef] = useInView({
    ...options,
    onChange: (inView) => inView && setActiveSections("home"),
  });
  const [aboutRef] = useInView({
    ...options,
    onChange: (inView) => inView && setActiveSections("about"),
  });
  const [offerRef] = useInView({
    ...options,
    onChange: (inView) => inView && setActiveSections("offer"),
  });
  const [demoRef] = useInView({
    ...options,
    onChange: (inView) => inView && setActiveSections("demo"),
  });
  const [securityRef] = useInView({
    ...options,
    onChange: (inView) => inView && setActiveSections("security"),
  });
  const [contactRef] = useInView({
    ...options,
    onChange: (inView) => inView && setActiveSections("contact"),
  });

  return (
    <div>
      <Header activeSections={activeSections} />
      <div id="home" ref={homeRef}>
        <Hero />
      </div>
      <div id="about" ref={aboutRef} className="w-full block">
        <SecondPart />
      </div>
      <div id="offer" ref={offerRef} className="w-full block">
        <Offer />
      </div>
      <div id="demo" ref={demoRef}>
        <Demo />
      </div>
      <div id="security" ref={securityRef}>
        <Security />
      </div>
      <div id="contact" ref={contactRef}>
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Landing;
