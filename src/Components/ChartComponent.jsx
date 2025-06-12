import React from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  ComposedChart, // Add this import
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
  const [selectedOption, setSelectedOption] = React.useState(null);
  const [availableOptions, setAvailableOptions] = React.useState([]);

  // Update the useEffect hook to handle bar filtering
  React.useEffect(() => {
    csv(dataPath).then((csvData) => {
      // Extract unique values from the Value column
      const values = [...new Set(csvData.map((item) => item.Value))];
      setAvailableValues(values);

      // Set options from config if provided
      if (config.options) {
        setAvailableOptions(config.options);
        if (!selectedOption && config.options.length > 0) {
          setSelectedOption(config.options[0].value);
        }
      }

      // Filter data based on selected value
      let filteredData = csvData;
      if (selectedValue) {
        filteredData = filteredData.filter(
          (item) => item.Value === selectedValue
        );
      }

      setData(filteredData);
    });
  }, [dataPath, selectedValue, selectedOption, config.optionKey]);

  const handleValueChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
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

  // Add a custom tooltip formatter
  const CustomTooltip = ({ active, payload, label }) => {
    if (!active || !payload) return null;

    return (
      <div
        style={{
          backgroundColor: "white",
          border: "1px solid #666666",
          borderRadius: "4px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
          padding: "10px",
          fontSize: "12px",
        }}
      >
        <p
          style={{
            margin: "0 0 5px 0",
            fontWeight: "bold",
            color: "#000000",
          }}
        >
          {label}
        </p>
        {payload.map((entry, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "3px",
            }}
          >
            <div
              style={{
                width: "10px",
                height: "10px",
                backgroundColor: entry.color,
                marginRight: "5px",
                borderRadius: entry.type === "line" ? "50%" : "2px",
              }}
            />
            <span style={{ color: "#000000" }}>
              {entry.name}: {Number(entry.value).toLocaleString()}
            </span>
          </div>
        ))}
      </div>
    );
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
              content={<CustomTooltip />}
              cursor={{ stroke: "rgba(0, 0, 0, 0.2)" }}
            />
            <Legend
              onClick={handleLegendClick}
              wrapperStyle={customLegendStyle}
              iconSize={10}
              iconType="circle"
            />
            {Array.isArray(config.lines) ? (
              // Handle multiple lines
              config.lines.map((line, index) => (
                <Line
                  key={`line-${index}`}
                  type="monotone"
                  dataKey={line.key}
                  stroke={
                    line.color || CHART_COLORS[index % CHART_COLORS.length]
                  }
                  strokeWidth={2}
                  dot={{
                    strokeWidth: 2,
                    r: 4,
                    fill: "white",
                    stroke:
                      line.color || CHART_COLORS[index % CHART_COLORS.length],
                  }}
                  activeDot={{
                    r: 6,
                    strokeWidth: 2,
                    fill: "white",
                    stroke:
                      line.color || CHART_COLORS[index % CHART_COLORS.length],
                  }}
                  name={line.name}
                  hide={hiddenSeries.has(line.key)}
                />
              ))
            ) : (
              // Handle single line for backwards compatibility
              <Line
                type="monotone"
                dataKey={config.line.key}
                stroke={config.line.color || CHART_COLORS[0]}
                strokeWidth={2}
                dot={{
                  strokeWidth: 2,
                  r: 4,
                  fill: "white",
                  stroke: config.line.color || CHART_COLORS[0],
                }}
                activeDot={{
                  r: 6,
                  strokeWidth: 2,
                  fill: "white",
                  stroke: config.line.color || CHART_COLORS[0],
                }}
                name={config.line.name}
                hide={hiddenSeries.has(config.line.key)}
              />
            )}
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
              content={<CustomTooltip />}
              cursor={{ fill: "rgba(0, 0, 0, 0.05)" }}
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

      case "mixed":
        return (
          <ComposedChart {...commonChartProps} data={data}>
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
              content={<CustomTooltip />}
              cursor={{ fill: "rgba(0, 0, 0, 0.05)" }}
            />
            <Legend
              onClick={handleLegendClick}
              wrapperStyle={customLegendStyle}
              iconSize={10}
            />
            {config.bars?.map((bar, index) => (
              <Bar
                key={`bar-${index}`}
                dataKey={bar.key}
                fill={bar.color || CHART_COLORS[index % CHART_COLORS.length]}
                name={bar.name}
                hide={hiddenSeries.has(bar.key)}
                opacity={0.8}
              />
            ))}
            {config.lines?.map((line, index) => (
              <Line
                key={`line-${index}`}
                type="monotone"
                dataKey={line.key}
                stroke={
                  line.color ||
                  CHART_COLORS[
                    (index + (config.bars?.length || 0)) % CHART_COLORS.length
                  ]
                }
                strokeWidth={3}
                dot={{
                  strokeWidth: 2,
                  r: 4,
                  fill: "white",
                  stroke:
                    line.color ||
                    CHART_COLORS[
                      (index + (config.bars?.length || 0)) % CHART_COLORS.length
                    ],
                }}
                activeDot={{
                  r: 8,
                  strokeWidth: 2,
                  fill: "white",
                  stroke:
                    line.color ||
                    CHART_COLORS[
                      (index + (config.bars?.length || 0)) % CHART_COLORS.length
                    ],
                }}
                name={line.name}
                hide={hiddenSeries.has(line.key)}
              />
            ))}
          </ComposedChart>
        );

      case "stacked":
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
              domain={[0, "auto"]}
            />
            <Tooltip
              content={<CustomTooltip />}
              cursor={{ fill: "rgba(0, 0, 0, 0.05)" }}
            />
            <Legend
              onClick={handleLegendClick}
              wrapperStyle={customLegendStyle}
              iconSize={10}
              iconType="square"
            />
            {config.bars
              .filter((bar) => !selectedOption || bar.type === selectedOption)
              .map((bar, index) => (
                <Bar
                  key={index}
                  dataKey={bar.key}
                  fill={bar.color || CHART_COLORS[index % CHART_COLORS.length]}
                  name={bar.name}
                  stackId="stack"
                  hide={hiddenSeries.has(bar.key)}
                />
              ))}
          </BarChart>
        );

      default:
        return null;
    }
  };

  // Update the select styles in the return section
  const selectStyle = {
    padding: "0.5rem",
    borderRadius: "4px",
    border: "1px solid #9E9E9E",
    backgroundColor: "#E3F2FD", // Light blue background
    cursor: "pointer",
    color: "#000000", // Black text for options
    fontWeight: "500",
  };

  const labelStyle = {
    fontWeight: 500,
    color: "#FFFFFF", // White text for labels
    padding: "0.5rem",
    borderRadius: "4px",
  };

  return (
    <div>
      <div
        style={{
          marginBottom: "1rem",
          display: "flex",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        {/* Only show options selector if config.option is true */}
        {config.option && config.options && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <label htmlFor="optionSelect" style={labelStyle}>
              {config.optionLabel || "Select Option"}:
            </label>
            <select
              id="optionSelect"
              value={selectedOption || ""}
              onChange={handleOptionChange}
              style={selectStyle}
            >
              {config.options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>
      <ResponsiveContainer width="100%" height={400}>
        {renderChart()}
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
