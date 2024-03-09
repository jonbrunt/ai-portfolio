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
