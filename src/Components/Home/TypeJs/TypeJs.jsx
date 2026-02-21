import React from "react";
import "./TypeJs.css"; // Import the CSS styles

const TypeJs = () => {
  const text = "We are the Society of Automotive Engineers Collegiate Club of National Institute of Technology Durgapur";

  return (
    <div className="hom-typeJsWrapper">
      <div className="hom-container mx-auto">
        <p className="hom-typeJsText">{text}</p>
      </div>
    </div>
  );
};

export default TypeJs;
