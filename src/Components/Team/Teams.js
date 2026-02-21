import React, { useEffect, useState } from "react";
import FacultyAdvisors from "../Home/FacultyAdvisors/FacultyAdvisors.jsx";
import "./Teams.css";
import { finalYear } from "./Assets/finalYear.js";
import { thirdYear } from "./Assets/thirdYear.js";
import { secondYear } from "./Assets/secondYear.js";
import BeamsDemo from "./Assets/Beams.jsx";

const Card = ({ member }) => (
  <div className="grid-item">
    <div className="card">
      <img className="card-image" src={member.url} alt={member.name} />
      <div className="card-text">
        <h3 className="card-name">{member.name}</h3>
        <p className="card-designation">{member.position}</p>
      </div>
      <div className="social-icons">
        <a href={member.instaLink} target="_blank" rel="noopener noreferrer" className="social-icon">
          <i className="fab fa-instagram"></i>
        </a>
        <a href={member.linkedinLink} target="_blank" rel="noopener noreferrer" className="social-icon">
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
    </div>
  </div>
);

const GridLayout = ({ members }) => {
  const [cols, setCols] = useState(4);

  useEffect(() => {
    function updateCols() {
      const w = window.innerWidth;
      if (w <= 576) setCols(1);
      else if (w <= 992) setCols(2);
      else if (w <= 1200) setCols(3);
      else setCols(4);
    }
    updateCols();
    window.addEventListener("resize", updateCols);
    return () => window.removeEventListener("resize", updateCols);
  }, []);

  const remainder = members.length % cols;
  const completeMembers = remainder === 0 ? members : members.slice(0, members.length - remainder);
  const lastRowMembers = remainder === 0 ? [] : members.slice(members.length - remainder);

  return (
    <div>
      {/* Complete rows — normal grid */}
      {completeMembers.length > 0 && (
        <div className="grid-container">
          {completeMembers.map((member, index) => (
            <Card key={index} member={member} />
          ))}
        </div>
      )}

      {/* Incomplete last row — centered flex */}
      {lastRowMembers.length > 0 && (
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
          padding: "0 4rem 2rem",
          flexWrap: "wrap",
        }}>
          {lastRowMembers.map((member, index) => (
            <div key={"last-" + index} style={{ width: "240px", flexShrink: 0 }}>
              <Card member={member} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const Teams = () => {
  useEffect(() => {
    const sections = document.querySelectorAll(".section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("section-visible");
          } else {
            entry.target.classList.remove("section-visible");
          }
        });
      },
      { threshold: 0.07 }
    );
    sections.forEach((section) => observer.observe(section));
  }, []);

  return (
    <>
      <BeamsDemo />
      <br /><br />
      <FacultyAdvisors />
      <div className="teams-page">
        <section className="section">
          <h2 className="sub-heading">Office Bearers</h2>
          <hr className="section-divider" />
          <GridLayout members={finalYear} />
        </section>

        <section className="section">
          <h2 className="sub-heading">Senior Coordinators</h2>
          <hr className="section-divider" />
          <GridLayout members={thirdYear} />
        </section>

        <section className="section">
          <h2 className="sub-heading">Junior Coordinators</h2>
          <hr className="section-divider" />
          <GridLayout members={secondYear} />
        </section>
      </div>
    </>
  );
};

export default Teams;