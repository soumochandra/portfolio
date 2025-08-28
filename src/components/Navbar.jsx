import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setOpen(false);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="nav-header">
      <nav className="nav container">
        <a className="brand" href="#home">Soumo Chandra</a>

        <ul className={`nav-links ${open ? "open" : ""}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <button className="nav-toggle" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
          {open ? <FiX size={30}/> : <FiMenu size={20}/>}
        </button>
      </nav>
    </header>
  );
}
