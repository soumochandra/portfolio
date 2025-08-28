import React from "react";
import { motion } from "framer-motion";
import "./ProjectModal.css";

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;
  return (
    <motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <motion.div className="modal-card" initial={{ y: 30, scale: 0.98 }} animate={{ y: 0, scale: 1 }} exit={{ y: 20, opacity: 0 }} transition={{ duration: 0.28 }}>
        <button className="modal-close" onClick={onClose} aria-label="Close">✕</button>
        <div className="modal-media" style={{backgroundImage:`url(${project.img})`}} />
        <div className="modal-body">
          <h3>{project.title}</h3>
          <p>{project.desc}</p>
          <div style={{marginTop:16, display:"flex", gap:12}}>
            <a className="btn btn-primary" href={project.link} target="_blank" rel="noreferrer">Open Project</a>
            <button className="btn btn-ghost" onClick={onClose}>Close</button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
