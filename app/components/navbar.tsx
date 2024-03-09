"use client";

import React, { useState } from "react";

interface NavbarProps {
  setCurrentView: (view: string) => void;
}

const menuItems: string[] = [
  "Home",
  "About",
  "Skills",
  "Projects",
  "Blog",
  "YouTube",
  "Contact",
];

const Navbar: React.FC<NavbarProps> = ({ setCurrentView }) => {
  const handleItemClick = (view: string) => {
    setCurrentView(view);
    window.scrollTo(0, 0);
  };

  return <div className="navbar sticky top-0 bg-base-300"></div>;
};

export default Navbar;
