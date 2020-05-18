import React from "react";

const ChartPressure = ({ data }) => {
  let pathData = "M35"; // "d" parameter for svg path, M35 - start chart from the middle of first column
  const labelsData = []; // array of labels (points and text values)
  let offset = 35; // start chart from the middle of first column
  data.forEach((elem) => {
    labelsData.push({
      x: offset,
      y: elem.chartValue / 3 + 50,
      label: elem.label,
    });
    offset += 71; // 70px column width + 1px border
    pathData += `, ${elem.chartValue / 3 + 50} ${offset}`; // adding coords of each point to path
  });
  const chartWidth = data.length * 71; // px chart width

  return (
    <div className="chartLineWrapper">
      <svg height={100} width={chartWidth} className="chart">
        <path d={pathData} className="chartPath chartPathPressure" />
        {labelsData.map((elem) => (
          <>
            <text
              className="chartLabel chartLabelPressure"
              x={elem.x}
              y={elem.y - 14} // place label over point
            >
              {elem.label} hPa
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

export default ChartPressure;
