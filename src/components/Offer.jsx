import React, { useEffect, useRef, useState } from "react";
import { Briefcase, Filter, BarChart } from "lucide-react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const Offer = () => {
  const cardsRef = useRef([]);

  const cardsInfo = [
    {
      icon: <Briefcase size={32} />,
      title: "Unified Job Dashboard",
      content:
        "Say goodbye to scattered spreadsheets. Our platform centralizes your entire job search—track every application, note progress, and stay in control.",
    },
    {
      icon: <Filter size={32} />,
      title: "Smart Filters & Alerts",
      content:
        "Instantly filter by company, status, or deadline. With timely alerts and clear visuals, you'll never miss an important follow-up again.",
    },
    {
      icon: <BarChart size={32} />,
      title: "Visual Progress Insights",
      content:
        "Analyze trends with beautifully designed graphs and dashboards. See your wins, learn from patterns, and elevate your job-seeking strategy.",
    },
  ];
  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <div
      className="w-full h-screen flex flex-col items-center justify-center py-20 px-6 text-black"
      id="offer"
    >
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-16 tracking-tight">
        What We Offer
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {cardsInfo.map(({ icon, title, content }, index) => (
          <div
            className="backdrop-blur-md bg-white/60 border border-white/30 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition duration-300"
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
          >
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-500 border border-blue-400 mb-6 mx-auto">
              {icon}
            </div>
            <h2 className="text-2xl font-bold text-center mb-3">{title}</h2>
            <p className="text-center text-gray-700 leading-relaxed">
              {content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offer;
