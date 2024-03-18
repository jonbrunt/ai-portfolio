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

  return (
    <div
      data-testid="navbar"
      className="navbar sticky top-0 z-[1000] h-[4rem] bg-base-300"
    >
      <div className="flex-1 px-2 lg:flex-none">
        <a className="text-lg font-bold">Jonathan Brunt</a>
      </div>
      <div className="flex flex-1 justify-end px-2">
        <div className="flex items-stretch">
          <label className="m-3 flex cursor-pointer gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>

            {/* theme controller */}
            <input
              type="checkbox"
              value="synthwave"
              className="theme-controller toggle"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>

          {/* dropdown menu */}
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost rounded-btn"
            >
              Menu
            </div>

            {/* menu content */}
            <ul
              tabIndex={0}
              className="menu dropdown-content mt-4 w-52 rounded-box bg-base-100 p-2 shadow"
            >
              {/* menu content mapping from menuItems */}
              {menuItems.map((item, index) => (
                <li key={index}>
                  <a onClick={() => handleItemClick(item)}>{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
