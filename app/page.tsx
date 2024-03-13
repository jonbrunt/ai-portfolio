"use client";

import React, { useState } from "react";
import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero/hero";
import About from "./components/about/about";
import Skills from "./components/skills/skills";

const Home: React.FC = () => {
  const [currentView, setCurrentView] = useState<string>("Home");

  return (
    <div data-theme="luxury">
      <Navbar setCurrentView={setCurrentView} />
      {currentView === "Home" && <Hero />}
      {currentView === "About" && <About />}
      {currentView === "Skills" && <Skills />}
    </div>
  );
};

export default Home;
