import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container" style={{display:"flex", justifyContent:"space-between", alignItems:"center", gap:12}}>
        <div>© {new Date().getFullYear()} Soumo Chandra</div>
        <div style={{color:"var(--muted)"}}>Built with React •</div>
      </div>
    </footer>
  );
}
