import React from "react";
import * as d3 from "d3";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Updated color palette for all transport modes
const CHART_COLORS = {
  // Transport mode colors
  "Drive Alone": "#1565C0",    // blue
  "Carpool": "#2E7D32",        // green
  "Transit": "#C62828",        // red
  "Walk": "#6A1B9A",          // purple
  "Bike": "#E65100",          // orange
  "Work from Home": "#00838F", // cyan
};

const customLegendStyle = {
  ".recharts-legend-item": {
    cursor: "pointer",
    padding: "0.5rem",
    borderRadius: "4px",
    transition: "all 0.2s ease",
    backgroundColor: "white",
    margin: "0 4px",
    border: "1px solid #E0E0E0",
  },
  ".recharts-legend-item:hover": {
    backgroundColor: "#F5F5F5",
    border: "1px solid #BDBDBD",
  },
  ".recharts-legend-item.inactive": {
    opacity: 0.5,
  },
};

const CommuteChart = ({ dataPath, config }) => {
  const [data, setData] = React.useState([]);
  const [selectedLocation, setSelectedLocation] = React.useState(
    config.locations[0]?.value
  );
  const [selectedMode, setSelectedMode] = React.useState(
    config.transportModes.options[0]?.value
  );
  const [hiddenSeries, setHiddenSeries] = React.useState(new Set());

  React.useEffect(() => {
    fetch(dataPath)
      .then((response) => response.text())
      .then((csvText) => {
        const parsedData = d3.csvParse(csvText);
        const transformedData = parsedData.map((d) => {
          const obj = { year: d.year };
          config.lines.forEach((line) => {
            obj[line.key] = +d[line.key] || 0;
          });
          return obj;
        });
        setData(transformedData);
      });
  }, [dataPath, config.lines]);

  const renderChart = () => (
    <LineChart
      data={data}
      margin={{ top: 10, right: 30, left: 50, bottom: 20 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="year" />
      <YAxis
        label={{ value: config.yAxis.label, angle: -90, position: "insideLeft" }}
        tickFormatter={(value) => `${value}%`}
      />
      <Tooltip formatter={(value) => `${value}%`} />
      <Legend />
      {config.lines
        .filter(
          (line) =>
            line.name === selectedLocation &&
            line.type === config.transportModes.options.find(
              (opt) => opt.value === selectedMode
            )?.label
        )
        .map((line) => (
          <Line
            key={line.key}
            type="monotone"
            dataKey={line.key}
            name={line.type}
            stroke={CHART_COLORS[line.type] || "#424242"} // Use type-specific color
            strokeWidth={2}
            dot={{ 
              r: 4,
              strokeWidth: 2,
              fill: "white",
              stroke: CHART_COLORS[line.type] || "#424242"
            }}
            activeDot={{
              r: 6,
              strokeWidth: 2,
              fill: "white",
              stroke: CHART_COLORS[line.type] || "#424242"
            }}
            hide={hiddenSeries.has(line.key)}
          />
        ))}
    </LineChart>
  );

  const selectStyle = {
    padding: "0.5rem",
    borderRadius: "4px",
    border: "1px solid #9E9E9E",
    backgroundColor: "#E3F2FD",
    cursor: "pointer",
    color: "#000000",
    fontWeight: "500",
  };

  return (
    <div>
      <div style={{ marginBottom: "20px" }}>
        <select
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
          style={selectStyle}
        >
          {config.locations.map((location) => (
            <option key={location.value} value={location.value}>
              {location.label}
            </option>
          ))}
        </select>
        <select
          value={selectedMode}
          onChange={(e) => setSelectedMode(e.target.value)}
          style={selectStyle}
        >
          {config.transportModes.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <ResponsiveContainer width="100%" height={500}>
        {renderChart()}
      </ResponsiveContainer>
    </div>
  );
};

export default CommuteChart;
