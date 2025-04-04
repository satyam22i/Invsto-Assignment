"use client";

import { useEffect, useState } from "react";
import Slider from "./Slider";
import Toggle from "./ToggleSwitch";
import Features from "./Features";
import DarkModeToggle from "./DarkModeToggle";

export default function PricingCard() {
  const [views, setViews] = useState(100000);
  const [isYearly, setIsYearly] = useState(false);
  const [isDark, setIsDark] = useState(false);

 
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (
      savedTheme === "dark" ||
      (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    }
  }, []);

 
  const toggleDarkMode = () => {
    const newMode = !isDark;
    setIsDark(newMode);
    if (newMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const basePrice = views / 6250;
  const price = isYearly ? basePrice * 0.75 : basePrice;

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen ${
        isDark ? "bg-gray-900" : "bg-[#f8faff]"
      } text-black dark:text-white relative px-12 w-full max-w-[1400px] mx-auto transition-colors duration-300`}
    >
     
      <div className="absolute top-4 right-4 z-50">
        <DarkModeToggle isDark={isDark} toggleDarkMode={toggleDarkMode} />
      </div>

   
      <div className="absolute inset-0 flex justify-center items-start w-full h-[500px] -top-10 pointer-events-none">
        <div
          className="w-[90%] h-full bg-cover bg-center opacity-20 dark:opacity-10"
          style={{ backgroundImage: "url('./bg-pattern.svg')" }}
        ></div>
      </div>

    
      <div className="absolute top-12 left-1/2 transform -translate-x-1/2 z-0 opacity-40">
        <img src="./pattern-circles.svg" alt="SVG Circles" className="w-[150px]" />
      </div>

      <div className="text-center mb-12 relative z-10">
        <h1 className="text-3xl font-bold text-black ">
          Simple, traffic-based pricing
        </h1>
        <p className="text-gray-600  text-lg">
          Sign-up for our 30-day trial. No credit card required.
        </p>
      </div>

   
      <div
        className={`${
          isDark ? "bg-gray-800" : "bg-white"
        } shadow-2xl rounded-2xl p-10 w-[600px] max-w-[85%] relative z-10 transition-all duration-300`}
      >
     
        <div className="flex justify-between items-center text-gray-700  font-medium mb-8">
          <span className="uppercase tracking-wide text-sm">
            {views.toLocaleString()} PAGEVIEWS
          </span>
          <p className="text-4xl font-bold text-gray-900 ">
            ${price.toFixed(2)}{" "}
            <span className="text-lg font-normal">/ month</span>
          </p>
        </div>

        <Slider views={views} setViews={setViews} />
        <div className="mt-6 flex justify-center">
          <Toggle isYearly={isYearly} setIsYearly={setIsYearly} />
        </div>

       
        <div className="mt-8 border-t border-gray-300 dark:border-gray-600 pt-8">
          <Features />
        </div>
      </div>
    </div>
  );
}
