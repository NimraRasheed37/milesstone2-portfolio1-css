"use client";
 
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <div>
      <nav className="navbar">
        <h1 className="main-heading">
          Nimra Rasheed
        </h1>

        {/* Hamburger Icon */}
        <div
          className="fabars"
          onClick={toggleSidebar}
        >
          <FontAwesomeIcon icon={faBars} size="lg" className="text-xl" />
        </div>

        {/* Desktop Navigation */}
        <ul className="navul">
          <a href="#about">
            <li className="navlinks">About</li>
          </a>
          <a href="#skills">
            <li className="navlinks">Skills</li>
          </a>
          <a href="#projects">
            <li className="navlinks">Projects</li>
          </a>
          <a href="#contact">
            <li className="navlinks">Contact</li>
          </a>
        </ul>
      </nav>

      {/* Sidebar */}
      <div
        className={`sidebar ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300`}
      >
        <div className="sidebar-header">
          <h2 className="">Nimra Rasheed</h2>
          {/* Close Icon */}
          <div
            className="text-white text-2xl cursor-pointer"
            onClick={toggleSidebar}
          >
            <FontAwesomeIcon icon={faTimes} />
          </div>
        </div>
        <ul className="sidebar-menu">
          <a href="#about">
            <li className="sidelinks">About</li>
          </a>
          <a href="#skills">
            <li className="sidelinks">Skills</li>
          </a>
          <a href="#projects">
            <li className="sidelinks">Projects</li>
          </a>
          <a href="#contact">
            <li className="sidelinks">Contact</li>
          </a>
        </ul>
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="overlay"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
}
