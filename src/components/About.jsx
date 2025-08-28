import React from "react";
import { motion } from "framer-motion";
import "./About.css";

export default function About() {
  return (
    <div className="about-grid">
      <motion.div initial={{ opacity:0, x:-30 }} whileInView={{ opacity:1, x:0 }} transition={{duration:0.6}} className="about-card">
        <div className="avatar-wrap">
          <div className="avatar-ring">
            <img src="/a.png" alt="profile" className="avatar" />
          </div>
        </div>
      </motion.div>

      <motion.div initial={{ opacity:0, x:30 }} whileInView={{ opacity:1, x:0 }} transition={{duration:0.6, delay:0.12}} className="about-text">
        <h2>About Me</h2>
         <p>
            👋 Hi, I’m <span>Soumo Chandra</span> — an AI/ML enthusiast and 
            <strong> Fullstack Web Developer</strong>.
          </p>
          <p>
            Currently pursuing <strong>B.Tech in CSE (AI & ML)</strong> at 
            <span> JIS University</span>, I love building intelligent solutions —
            from <em>machine learning prototypes</em> to <em>animated, high-performance web apps</em>.
          </p>
          <p>
            🚀 My focus: blending <span>AI</span> with clean design, smooth 
            animations, and delightful user experiences.
          </p>
        <ul className="about-list">
          <li>AI / Machine Learning prototyping</li>
          <li>React, modern CSS, animations</li>
          <li>Production deployments & monitoring</li>
        </ul>
      </motion.div>
    </div>
  );
}
