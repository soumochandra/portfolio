import React from "react";
import "./Skills.css";

const data = [
  { name: "MERN STACK", logo: "/f.ico" },
  { name: "CORE JAVA", logo: "/g.ico" },
  { name: "PYTHON", logo: "/h.ico" },
  { name: "JAVA SCRIPT", logo: "/i.ico" },
  { name: "Machine Learning", logo: "/j.ico" },
  { name: "DSA", logo: "/k.ico" },
  { name: "OOP", logo: "/l.ico" },
  { name: "Problem-Solving & Analytical Thinking", logo: "/m.ico" },
  { name: "Team Collaboration & Communication", logo: "/n.ico" },
  { name: "Pandas, NumPy, Scikit-learn", logo: "/o.ico" },
  { name: "OS", logo: "/p.ico" },
  { name: "ALGORITHMS", logo: "/q.ico" },
];

export default function Skills() {
  return (
    <div>
      <h2 style={{marginBottom:18}}>Skills</h2>
      <div className="skills-grid">
        {data.map((s) => (
          <div className="skill" key={s.name} aria-label={s.name}>
            <div className="radial">
              <div className="radial-inner">
                <img src={s.logo} alt={s.name} className="skill-logo" />
              </div>
            </div>
            <div className="skill-name">{s.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
