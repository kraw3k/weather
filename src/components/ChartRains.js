import React from "react";

const ChartRains = ({ rains }) => {
  // if there are big differences between min/max - display modified height values for better visual effect
  let chartHeight;
  if (rains.chartValue > 2) chartHeight = rains.chartValue / 3 + "%";
  else chartHeight = rains.chartValue * 3 + "%";

  // if rains === 0 - don't display chart
  return rains.label > 0 ? (
    <>
      <div className="chartRainsWrapper">
        <p>{rains.label.toString().replace(".", ",")} mm</p>
        <div className="chartRains" style={{ height: chartHeight }} />
      </div>
    </>
  ) : null;
};

export default ChartRains;
