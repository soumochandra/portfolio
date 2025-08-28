import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Contact.css";

export default function Contact() {
  const [status, setStatus] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    setStatus("Thanks — message not actually sent in demo.");
    setTimeout(()=>setStatus(""), 4000);
  };

  return (
    <div className="contact-wrap">
      <h2>Contact</h2>
      <div className="contact-details" style={{ marginBottom: 24 }}>
        <p>
          <strong>Phone:</strong> <a href="tel:9748229962">9748229962</a><br />
          <strong>Email:</strong> <a href="mailto:soumo23july@gmail.com">soumo23july@gmail.com</a><br />
          <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/soumo-chandra-b5aa6424b" target="_blank" rel="noopener noreferrer">
  Click Here
          </a>
        </p>
      </div>
      </div>)}


