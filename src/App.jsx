import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <section className="section" id="home"><div className="container"><Hero /></div></section>
        <section className="section" id="about"><div className="container"><About /></div></section>
        <section className="section" id="skills"><div className="container"><Skills /></div></section>
        <section className="section" id="projects"><div className="container"><Projects /></div></section>
        <section className="section" id="contact"><div className="container"><Contact /></div></section>
      </main>
      <Footer />
    </div>
  );
}
