import React, { useEffect, useRef, useState } from "react";
import {
  Briefcase,
  Filter,
  BarChart,
  CalendarClock,
  CheckCircle2,
  ClipboardList,
} from "lucide-react";
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
      bg: "bg-blue-100",
      color: "text-blue-500",
      border: "border-blue-400",
    },
    {
      icon: <Filter size={32} />,
      title: "Smart Filters & Alerts",
      content:
        "Instantly filter by company, status, or deadline. With timely alerts and clear visuals, you'll never miss an important follow-up again.",
      bg: "bg-purple-100",
      color: "text-purple-500",
      border: "border-purple-400",
    },
    {
      icon: <BarChart size={32} />,
      title: "Visual Progress Insights",
      content:
        "Analyze trends with beautifully designed graphs and dashboards. See your wins, learn from patterns, and elevate your job-seeking strategy.",
      bg: "bg-green-100",
      color: "text-green-500",
      border: "border-green-400",
    },
    {
      icon: <CalendarClock size={32} />,
      title: "Timely Interview Reminders",
      content:
        "Stay punctual and confident. We help you prepare by sending reminders for every important event or interview.",
      bg: "bg-yellow-100",
      color: "text-yellow-500",
      border: "border-yellow-400",
    },
    {
      icon: <CheckCircle2 size={32} />,
      title: "Track Application Stages",
      content:
        "From 'Applied' to 'Offer Received'—track every phase of your applications with clarity and structure.",
      bg: "bg-red-100",
      color: "text-red-500",
      border: "border-red-400",
    },
    {
      icon: <ClipboardList size={32} />,
      title: "Personalized To-Do System",
      content:
        "Stay organized with a custom task manager built for job seekers. Keep notes, to-dos, and priorities in sync.",
      bg: "bg-indigo-100",
      color: "text-indigo-500",
      border: "border-indigo-400",
    },
  ];

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <div
      className="w-full min-h-screen flex flex-col items-center justify-center py-20 px-6 text-black mt-10"
      id="offer"
    >
      <h1 className="text-4xl md:text-5xl font-extrabold text-center tracking-tight">
        What We Offer
      </h1>
      <p className="text-center max-w-2xl mb-16 text-gray-600 text-lg">
        We go beyond just tracking applications. Our features are built to
        empower job seekers with tools that simplify, organize, and improve
        their journey toward landing that dream role.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {cardsInfo.map((card, index) => (
          <div
            className={`backdrop-blur-md bg-white/60 border ${card.border} rounded-2xl p-8 shadow-lg hover:shadow-2xl transition duration-300`}
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
          >
            <div
              className={`flex items-center justify-center w-16 h-16 rounded-full ${card.bg} ${card.color} border ${card.border} mb-6 mx-auto`}
            >
              {card.icon}
            </div>
            <h2 className="text-2xl font-bold text-center mb-3">
              {card.title}
            </h2>
            <p className="text-center text-gray-700 leading-relaxed">
              {card.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offer;
