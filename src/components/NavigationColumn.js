import React from "react";
import arrowLeft from "../icons/arrowLeft.svg";
import arrowRight from "../icons/arrowRight.svg";

const NavigationColumn = ({ onClick, id }) => (
  <div id={id} className="navigationColumn">
    <button onClick={onClick}>
      <img src={id === "navColumnLeft" ? arrowLeft : arrowRight} alt="move" />
    </button>
  </div>
);

export default NavigationColumn;
