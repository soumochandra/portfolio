import React from "react";
import { motion } from "framer-motion";
import "./Hero.css";

export default function Hero() {
  return (
    <div className="hero-wrap">
      <motion.h1
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="hero-title"
      >
        Hi, I’m <span>Soumo Chandra</span>
      </motion.h1>

      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="hero-sub">
        "AI/ML Developer • Fullstack Engineer — From training models to crafting animated, performant web apps."
      </motion.p>

      <motion.div className="hero-ctas" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
        <a className="btn btn-primary" href="#projects">See Projects</a>
        <a className="btn btn-ghost" href="#contact">Let’s Talk</a>
      </motion.div>

      <div className="hero-orbits" aria-hidden>
        <div className="orb orb--one"></div>
        <div className="orb orb--two"></div>
        <div className="orb orb--three"></div>
      </div>
    </div>
  );
}
