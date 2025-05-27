import React from "react";
import "../styles/Logo.css";
import Card from "./Card";

const SecondPart = () => {
  return (
    <div
      className="w-full flex flex-col items-center justify-center mt-10 min-h-screen"
      id="about"
    >
      <h1 className="text-5xl font-bold">About us</h1>
      <div className="w-full min-h-screen flex flex-col md:flex-row items-center justify-around text-lg font-semibold text-center px-6 py-12 space-y-10 md:space-y-0 gap-4">
        <Card
          img={"/images/jobseeker.jpg"}
          title={"Build for Job Seekers"}
          width={500}
          height={500}
          content={
            "Job hunting can be overwhelming—applications, deadlines, follow-ups—everything scattered. Our platform brings structure to that chaos. With intuitive tracking and progress indicators, it helps users manage every application from one place, reducing stress and increasing productivity."
          }
        />
        <Card
          img={"/images/passion1.jpg"}
          title={"Driven by Passion"}
          width={500}
          height={500}
          content={
            "This project was created out of firsthand experience. As a developer navigating the tech job market, I wanted a tool that understood the real problems job seekers face. That passion turned into a product— athoughtfully built platform aimed at solving everyday struggles of applicants."
          }
        />
        <Card
          img={"/images/simplicity.jpg"}
          title={"Focused on Simplicity"}
          width={500}
          height={"400px"}
          content={
            "We believe in design that doesn't get in the way. Every feature was chosen to serve a clear purpose: helping users focus on landing their next opportunity. With a minimalist design, smart filters, and organized dashboards, our platform ensures a smooth and frustration-free experience."
          }
        />
      </div>
    </div>
  );
};

export default SecondPart;
