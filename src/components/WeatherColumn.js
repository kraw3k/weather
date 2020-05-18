import React from "react";

import WeatherImage from "./WeatherImage";
import WindDirectionImage from "./WindDirectionImage";
import ChartTemperature from "./ChartTemperature";
import ChartPressure from "./ChartPressure";
import ChartRains from "./ChartRains";

const getWindSpeedDescription = (speed) => {
  if (speed <= 15) return "Słaby";
  else if (speed > 15 && speed < 30) return "Umiar.";
  else return "Silny";
};

export const WeatherColumn = ({
  chartTemperatureData,
  chartPressureData,
  chartRainsData,
  data,
}) => {
  const windSpeedDescription = getWindSpeedDescription(data.windSpeed);

  return (
    <li className="columnWrapper">
      <div className="columnElement columnDay">
        <p>{data.hour === "00:00" ? data.day.toUpperCase() : null}</p>
      </div>
      <div className="columnElement columnHour">
        <p>{data.hour}</p>
      </div>
      <div className="columnElement columnForecast">
        <WeatherImage weatherName={data.weatherName} />
      </div>
      <div className="columnTemperatureChart">
        {chartTemperatureData && (
          <ChartTemperature data={chartTemperatureData} />
        )}
      </div>
      <div className="columnElement columnRains">
        <ChartRains rains={chartRainsData} />
      </div>
      <div className="columnElement columnWindDirection">
        <WindDirectionImage windDirection={data.windDirection} />
      </div>
      <div className="columnElement columnWindSpeed">
        <p>{windSpeedDescription}</p>
        <p className="windSpeedValue">{data.windSpeed} km/h</p>
      </div>
      <div className="columnPressureChart">
        {chartPressureData && <ChartPressure data={chartPressureData} />}
      </div>
    </li>
  );
};

export const LabelColumn = () => (
  <li className="columnWrapper columnLabelsWrapper">
    <div className=" columnLabelElement columnDay">
      <p>Dzień</p>
    </div>
    <div className=" columnLabelElement columnHour">
      <p>Godzina</p>
    </div>
    <div className=" columnLabelElement columnForecast">
      <p>Prognoza</p>
    </div>
    <div className=" columnLabelElement columnTemperatureChart">
      <p>Temperatura</p>
    </div>
    <div className=" columnLabelElement columnRains">
      <p>Opady</p>
    </div>
    <div className=" columnLabelElement columnWindDirection">
      <p>Kierunek wiatru</p>
    </div>
    <div className=" columnLabelElement columnWindSpeed">
      <p>Prędkość wiatru</p>
    </div>
    <div className=" columnLabelElement columnPressureChart">
      <p>Ciśnienie</p>
    </div>
  </li>
);
