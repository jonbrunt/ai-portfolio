"use client";

import React, { useState } from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";

const Home: React.FC = () => {
  const [currentView, setCurrentView] = useState<string>("Home");

  return (
    <div data-theme="luxury">
      <Navbar setCurrentView={setCurrentView} />
      {currentView === "Home" && <Hero />}
    </div>
  );
};

export default Home;
