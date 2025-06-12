import React from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { csv } from "d3";

// Update the color palette with more distinct and contrasting colors
const CHART_COLORS = [
  "#1565C0", // darker blue
  "#C62828", // darker red
  "#2E7D32", // darker green
  "#6A1B9A", // darker purple
  "#E65100", // darker orange
  "#00838F", // darker cyan
  "#4E342E", // darker brown
  "#F9A825", // darker yellow
  "#37474F", // darker blue grey
  "#AD1457", // darker pink
  "#00695C", // darker teal
  "#4527A0", // darker purple
];

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

const Chart = ({ type, dataPath, config }) => {
  const [data, setData] = React.useState([]);
  const [hiddenSeries, setHiddenSeries] = React.useState(new Set());
  const [selectedValue, setSelectedValue] = React.useState(null);
  const [availableValues, setAvailableValues] = React.useState([]);

  React.useEffect(() => {
    csv(dataPath).then((csvData) => {
      // Extract unique values from the Value column
      const values = [...new Set(csvData.map((item) => item.Value))];
      setAvailableValues(values);
      // Set default selected value
      if (values.length > 0 && !selectedValue) {
        setSelectedValue(values[0]);
      }

      // Filter data based on selected value
      const filteredData = selectedValue
        ? csvData.filter((item) => item.Value === selectedValue)
        : csvData;

      setData(filteredData);
    });
  }, [dataPath, selectedValue]);

  const handleValueChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleLegendClick = (entry) => {
    setHiddenSeries((prev) => {
      const newHidden = new Set(prev);
      if (newHidden.has(entry.dataKey)) {
        newHidden.delete(entry.dataKey);
      } else {
        newHidden.add(entry.dataKey);
      }
      return newHidden;
    });
  };

  const renderChart = () => {
    const commonChartProps = {
      margin: { top: 10, right: 30, left: 0, bottom: 0 },
      style: { backgroundColor: "white" },
    };

    switch (type) {
      case "line":
        return (
          <LineChart {...commonChartProps} data={data}>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#E0E0E0"
              fill="white"
            />
            <XAxis
              dataKey={config.xAxis}
              tick={{ fill: "#000000", fontSize: 12 }}
              stroke="#666666"
              tickLine={{ stroke: "#666666" }}
            />
            <YAxis
              tick={{ fill: "#000000", fontSize: 12 }}
              stroke="#666666"
              tickLine={{ stroke: "#666666" }}
              domain={["auto", "auto"]}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "white",
                border: "1px solid #666666",
                borderRadius: "4px",
                boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
                padding: "10px",
                fontSize: "12px",
              }}
              labelStyle={{ color: "#000000", fontWeight: "bold" }}
              itemStyle={{ color: "#000000" }}
            />
            <Legend
              onClick={handleLegendClick}
              wrapperStyle={customLegendStyle}
              iconSize={10}
              iconType="circle"
            />
            {config.lines.map((line, index) => (
              <Line
                key={index}
                type="monotone"
                dataKey={line.key}
                stroke={line.color || CHART_COLORS[index % CHART_COLORS.length]}
                strokeWidth={3}
                dot={{
                  strokeWidth: 2,
                  r: 4,
                  fill: "white",
                  stroke:
                    line.color || CHART_COLORS[index % CHART_COLORS.length],
                }}
                activeDot={{
                  r: 8,
                  strokeWidth: 2,
                  fill: "white",
                  stroke:
                    line.color || CHART_COLORS[index % CHART_COLORS.length],
                }}
                name={line.name}
                hide={hiddenSeries.has(line.key)}
              />
            ))}
          </LineChart>
        );

      case "bar":
        return (
          <BarChart {...commonChartProps} data={data}>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#E0E0E0"
              fill="white"
            />
            <XAxis
              dataKey={config.xAxis}
              tick={{ fill: "#000000", fontSize: 12 }}
              stroke="#666666"
              tickLine={{ stroke: "#666666" }}
            />
            <YAxis
              tick={{ fill: "#000000", fontSize: 12 }}
              stroke="#666666"
              tickLine={{ stroke: "#666666" }}
              domain={["auto", "auto"]}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "white",
                border: "1px solid #666666",
                borderRadius: "4px",
                boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
                padding: "10px",
                fontSize: "12px",
              }}
              labelStyle={{ color: "#000000", fontWeight: "bold" }}
              itemStyle={{ color: "#000000" }}
            />
            <Legend
              onClick={handleLegendClick}
              wrapperStyle={customLegendStyle}
              iconSize={10}
              iconType="square"
            />
            {config.bars.map((bar, index) => (
              <Bar
                key={index}
                dataKey={bar.key}
                fill={bar.color || CHART_COLORS[index % CHART_COLORS.length]}
                name={bar.name}
                stackId={config.stacked ? "stack" : undefined}
                hide={hiddenSeries.has(bar.key)}
                opacity={1}
              />
            ))}
          </BarChart>
        );

      default:
        return null;
    }
  };

  return (
    <div>
      {availableValues.length > 0 && (
        <div
          style={{
            marginBottom: "1rem",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <label
            htmlFor="valueSelect"
            style={{
              fontWeight: 500,
              color: "#424242",
            }}
          >
            Select Value:
          </label>
          <select
            id="valueSelect"
            value={selectedValue || ""}
            onChange={handleValueChange}
            style={{
              padding: "0.5rem",
              borderRadius: "4px",
              border: "1px solid #9E9E9E",
              backgroundColor: "white",
              cursor: "pointer",
            }}
          >
            {availableValues.map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>
      )}
      <ResponsiveContainer width="100%" height={400}>
        {renderChart()}
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
