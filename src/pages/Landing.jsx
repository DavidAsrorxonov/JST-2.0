import { useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import SecondPart from "../components/SecondPart";
import Offer from "../components/Offer";
import Demo from "../components/Demo";
import { useInView } from "react-intersection-observer";
import Security from "../components/Security";
import Contact from "../components/Contact";
import Footer from "../components/ui/Footer";
import PageWrapper from "../transition/PageWrapper";

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
    onChange: (inView) => inView && setActiveSections("workflow"),
  });
  const [demoRef] = useInView({
    ...options,
    onChange: (inView) => inView && setActiveSections("offer"),
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
    <PageWrapper>
      <div>
        <Header activeSections={activeSections} />
        <div id="home" ref={homeRef}>
          <Hero />
        </div>
        <div id="about" ref={aboutRef} className="w-full block">
          <SecondPart />
        </div>
        <div id="workflow" ref={offerRef} className="w-full block">
          <Offer />
        </div>
        <div id="offer" ref={demoRef}>
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
    </PageWrapper>
  );
};

export default Landing;
