import React from "react";

const ChartTemperature = ({ data }) => {
  let pathData = "M35"; // "d" parameter for svg path, M35 - start chart from the middle of first column
  let labelsData = []; // array of labels (points and text values)
  let offset = 35; // start chart from the middle of first column
  data.forEach((elem) => {
    labelsData.push({
      x: offset.toString(),
      y: elem.chartValue + 40,
      label: elem.label,
    });
    offset += 71; // 70px column width + 1px border
    pathData += `, ${elem.chartValue + 40} ${offset}`;
  });
  const chartWidth = data.length * 71;

  return (
    <div className="chartLineWrapper">
      <svg height={180} width={chartWidth} className="chart">
        <path d={pathData} className="chartPath chartPathTemperature" />
        {labelsData.map((elem) => (
          <>
            <text
              className="chartLabel chartLabelTemperature"
              x={elem.x}
              y={elem.y - 14} // place label over point
            >
              {elem.label}&deg;
            </text>
            <circle
              className="chartPoint"
              cx={elem.x}
              cy={elem.y}
              r="4"
            ></circle>
          </>
        ))}
      </svg>
    </div>
  );
};

export default ChartTemperature;
