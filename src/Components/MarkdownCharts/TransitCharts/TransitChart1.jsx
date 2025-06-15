import React, { useState } from "react";
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

const CHART_COLORS = {
  auto: "#000000",
  truck: "#FF5722",
  articulated: "#4CAF50",
};

const INITIAL_VISIBLE_LOCATIONS = ["auto", "truck", "articulated"];

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
      <p style={{ margin: "0 0 5px 0", fontWeight: "bold", color: "#000000" }}>
        {label}
      </p>
      {payload.map((entry, index) => (
        <div
          key={index}
          style={{ display: "flex", alignItems: "center", marginBottom: "3px" }}
        >
          <div
            style={{
              width: "10px",
              height: "10px",
              backgroundColor: entry.color,
              borderRadius: "2px",
              marginRight: "5px",
            }}
          />
          <span style={{ color: "#000000" }}>
            {entry.name}: {entry.value.toFixed(3)}
          </span>
        </div>
      ))}
    </div>
  );
};

const TransitChart1 = ({ dataPath, config }) => {
  const [data, setData] = useState([]);
  const [selectedTimePeriod, setSelectedTimePeriod] = useState(
    config.defaultOption
  );
  const [hiddenSeries, setHiddenSeries] = useState(new Set());

  React.useEffect(() => {
    fetch(dataPath)
      .then((response) => response.text())
      .then((csvText) => {
        const parsedData = d3.csvParse(csvText);

        // Fix: Properly filter and format the data
        const filteredData = parsedData
          .filter((row) => row.Value === selectedTimePeriod)
          .map((row) => {
            const yearData = { year: row.year };
            config.locations.forEach((location) => {
              yearData[location.value] = parseFloat(row[location.value]) || 0;
            });
            return yearData;
          });

        console.log("Filtered Data:", filteredData); // Debug log
        setData(filteredData);
      })
      .catch((error) => {
        console.error("Error loading chart data:", error);
      });
  }, [dataPath, selectedTimePeriod, config.locations]);

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
    if (data.length === 0) {
      return <div>Loading data...</div>;
    }

    return (
      <LineChart
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis
          domain={[0, "auto"]}
          label={{
            value: config.yAxis?.label || "",
            angle: -90,
            position: "insideLeft",
          }}
        />
        <Tooltip content={CustomTooltip} />
        <Legend onClick={handleLegendClick} />
        {config.locations.map((location) => (
          <Line
            key={location.value}
            type="cardinal"
            dataKey={location.value}
            name={location.name}
            stroke="#1565C0"
            strokeWidth={2}
            dot={{
              r: 4,
              strokeWidth: 2,
              fill: "white",
              stroke: "#1565C0",
            }}
            activeDot={{
              r: 6,
              strokeWidth: 2,
              fill: "white",
              stroke: "#1565C0",
            }}
            connectNulls={true}
            hide={hiddenSeries.has(location.value)}
          />
        ))}
      </LineChart>
    );
  };

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
    <div className="chart-container">
      <div style={{ marginBottom: "1rem" }}>
        <label
          htmlFor="timePeriodSelect"
          style={{
            marginRight: "0.5rem",
            fontWeight: "500",
            color: "#ffffff",
          }}
        >
          Select Road Type:
        </label>
        <select
          id="timePeriodSelect"
          value={selectedTimePeriod}
          onChange={(e) => setSelectedTimePeriod(e.target.value)}
          style={selectStyle}
        >
          {Object.entries(config.timePeriods).map(([value, label]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>
      <ResponsiveContainer width="100%" height={400}>
        {renderChart()}
      </ResponsiveContainer>
    </div>
  );
};

export default TransitChart1;
