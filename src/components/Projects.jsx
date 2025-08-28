import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectModal from "./ProjectModal";
import "./Projects.css";

const projects = [
  {
    id: "p1",
    title: "Bitcoin Price Predictor",
    tag: "ML",
    desc: "Forecasting Bitcoin closing prices using ML + interactive React UI.",
    img: "/b.png",
    link: "https://myapp3-rtz5.onrender.com/"
  },
  {
    id: "p2",
    title: "Library-Management-MERN",
    tag: "Web",
    desc: "Library Management System built with the MERN stack for efficient book tracking and user management.{NOT DEPLOYED YET} GET BACK TO YOU SOON",
    img: "/c.png",
    link: "https://github.com/soumochandra/Library-Management-MERN.git"
  },
  {
    id: "p3",
    title: "INTELLIGENT RESOURCE SCHEDULING IN CLOUD COMPUTING USING EVOLUTIONARY OPTIMIZATION ALGORITHMS",
    tag: "Algorithm",
    desc: "Still working on it.",
    img: "/d.png",
    link: "#"
  },
   {
    id: "p4",
    title: "Gui-version-of-face-detection-on-pthon",
    tag: "Web",
    desc: "Python desktop app for real-time face detection with a simple GUI.",
    img: "/e.png",
    link: "https://github.com/soumochandra/Gui-version-of-face-detection-on-pthon.git"
  }

];

export default function Projects() {
  const [open, setOpen] = useState(null);
  return (
    <>
      <h2 style={{marginBottom:18}}>Projects</h2>
      <div className="projects-grid">
        {projects.map((p, i) => (
          <motion.article
            key={p.id}
            className="project-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            onClick={() => setOpen(p)}
          >
            <div className="project-media" role="img" aria-label={p.title} style={{backgroundImage:`url(${p.img})`}} />
            <div className="project-body">
              <div className="project-header">
                <h3>{p.title}</h3>
                <span className="tag">{p.tag}</span>
              </div>
              <p className="project-desc">{p.desc}</p>
            </div>
          </motion.article>
        ))}
      </div>

      <AnimatePresence>{open && <ProjectModal project={open} onClose={() => setOpen(null)} />}</AnimatePresence>
    </>
  );
}
