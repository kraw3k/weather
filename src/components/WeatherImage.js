import React from "react";

import sunnyImage from "../icons/sunny.png";
import cloudyImage from "../icons/cloudy.png";
import rainyImage from "../icons/rainy.png";
import foggyImage from "../icons/foggy.png";
import snowyImage from "../icons/snowy.png";
import partlyCloudyImage from "../icons/partlyCloudy.png";

const WeatherImage = ({ weatherName }) => {
  let imageSrc = "";
  switch (weatherName) {
    case "sunny":
      imageSrc = sunnyImage;
      break;
    case "snowy":
      imageSrc = snowyImage;
      break;
    case "foggy":
      imageSrc = foggyImage;
      break;
    case "rainy":
      imageSrc = rainyImage;
      break;
    case "partlyCloudy":
      imageSrc = partlyCloudyImage;
      break;
    default:
      imageSrc = cloudyImage;
  }

  return <img src={imageSrc} alt={weatherName} className="forecastImage" />;
};

export default WeatherImage;
