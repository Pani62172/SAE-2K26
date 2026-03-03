import React from "react";
import "./FacultyAdvisors.css";
import SKL from "./images/SKL.jpg";
import JD from "./images/JD.jpeg";

const cards = [
  {
    name: "Prof. Sandeep Kumar Lahiri",
    department: "Department of Chemical Engineering",
    image: SKL,
    //aos: "fade-right",
  },
  {
    name: "Prof. Jayabrata Dhar",
    department: "Department of Mechanical Engineering",
    image: JD,
    //aos: "fade-up",
  },
  /*{
    name: "Prof. Tapas Kumar Saha",
    department: "Department of Electrical Engineering",
    image: require("../images/tapas1.jpeg"),
    aos: "fade-left",
  },*/
];

const CardSection = () => {
  return (
    <>
      <br />
      <h1 className="section-heading">Our Faculty Advisors</h1>
      <hr className="section-underline" />
      <div className="faculty-container">
        {cards.map((card, index) => (
          <div className="faculty-cards" key={index} data-aos={card.aos}>
            <div className="imgBx">
              <img src={card.image} alt={card.name} />
            </div>
            <div className="content">
              <div className="details">
                <h3>
                  {card.name} <br />
                  <span>{card.department}</span>
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CardSection;