import React from "react";
import "./FacultyAdvisors.css";

const cards = [
  {
    name: "Prof. Nilotpal Banerjee",
    department: "Department of Mechanical Engineering",
    image: require("../images/niloptal1.jpeg"),
    aos: "fade-right",
  },
  {
    name: "Prof. Apurba Layek",
    department: "Department of Mechanical Engineering",
    image: require("../images/apurba1.jpeg"),
    aos: "fade-up",
  },
  {
    name: "Prof. Tapas Kumar Saha",
    department: "Department of Electrical Engineering",
    image: require("../images/tapas1.jpeg"),
    aos: "fade-left",
  },
];

const CardSection = () => {
  return (
    <>
      <br />
      <h2 className="section-heading">Our Faculty Advisors</h2>
      <hr className="section-underline" />
      <div className="faculty-container">
        {cards.map((card, index) => (
          <div className="faculty-cards" key={index} data-aos={card.aos}>
            <div className="imgBx">
              <img src={card.image} alt={card.name} />
            </div>
            <div className="content">
              <div className="details">
                <h2>
                  {card.name} <br />
                  <span>{card.department}</span>
                </h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CardSection;