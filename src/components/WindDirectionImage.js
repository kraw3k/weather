import React from "react";
import directionArrow from "../icons/directionArrow.svg";

const WindDirectionImage = ({ windDirection }) => {
  let windDirectionDescription;
  let rotateValue;

  switch (windDirection) {
    default:
      windDirectionDescription = "Północny";
      rotateValue = 0;
      break;
    case 1:
      windDirectionDescription = "Pn.-Zach.";
      rotateValue = 1;
      break;
    case 2:
      windDirectionDescription = "Zachodni";
      rotateValue = 2;
      break;
    case 3:
      windDirectionDescription = "Pd.Zach.";
      rotateValue = 3;
      break;
    case 4:
      windDirectionDescription = "Południowy";
      rotateValue = 4;
      break;
    case 5:
      windDirectionDescription = "Pd.Wsch.";
      rotateValue = 5;
      break;
    case 6:
      windDirectionDescription = "Wschodni";
      rotateValue = 6;
      break;
    case 7:
      windDirectionDescription = "Pn.-Wsch.";
      rotateValue = 7;
      break;
  }

  return (
    <>
      <img
        src={directionArrow}
        alt="windDirection"
        className="windDirectionImage"
        style={{ transform: `rotate(${rotateValue * -45}deg)` }}
      />
      <p>{windDirectionDescription}</p>
    </>
  );
};

export default WindDirectionImage;
