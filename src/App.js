import React, { useEffect } from "react";
import { WeatherColumn, LabelColumn } from "./components/WeatherColumn";
import NavigationColumn from "./components/NavigationColumn";
import { weatherData } from "./data";
import { getLineChartData, getBarChartData } from "./scripts/getChartData";
import {
  handleMouseEvents,
  buttonScrollRight,
  buttonScrollLeft,
} from "./scripts/mouseEvents";

const App = () => {
  const temperatures = weatherData.map((elem) => elem.temperature);
  const pressures = weatherData.map((elem) => elem.pressure);
  const rains = weatherData.map((elem) => elem.rains);
  const temperatureChartData = getLineChartData(temperatures);
  const pressureChartData = getLineChartData(pressures);
  const rainsChartData = getBarChartData(rains);

  useEffect(() => {
    handleMouseEvents();
  }, []);

  return (
    <div id="app">
      <LabelColumn />
      <NavigationColumn onClick={buttonScrollLeft} id="navColumnLeft" />
      <ul id="weatherList">
        {weatherData.map((elem, index) => (
          <WeatherColumn
            chartTemperatureData={index === 0 ? temperatureChartData : null}
            chartPressureData={index === 0 ? pressureChartData : null}
            chartRainsData={rainsChartData[index]}
            data={elem}
          />
        ))}
      </ul>
      <NavigationColumn onClick={buttonScrollRight} id="navColumnRight" />
    </div>
  );
};

export default App;
