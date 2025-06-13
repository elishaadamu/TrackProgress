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
  Bike: "#E65100", // orange
  Bus: "#2E7D32", // green
  Ferry: "#00838F", // cyan
  Motorcycle: "#6A1B9A", // purple
  "Motor Other": "#AD1457", // pink
  "Non-SOV": "#827717", // olive
  Other: "#4E342E", // brown
  Carpool: "#F9A825", // yellow
  Rail: "#4527A0", // deep purple
  "Drive Alone": "#1565C0", // blue
  Subway: "#00695C", // teal
  Taxi: "#FF8F00", // amber
  Transit: "#C62828", // red
  Trolley: "#37474F", // blue grey
  Walk: "#6A1B9A", // purple
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

// Custom tooltip component
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
              borderRadius: "2px",
              marginRight: "5px",
            }}
          />
          <span style={{ color: "#000000" }}>
            {entry.name}: {entry.value}%
          </span>
        </div>
      ))}
    </div>
  );
};

const INITIAL_VISIBLE_MODES = [
  "sov", // Drive Alone
  "transit", // Transit
  "pool", // Carpool
  "walk", // Walk
  "wfh", // Work from Home
];

const CommuteChart = ({ dataPath, config }) => {
  const [data, setData] = React.useState([]);
  const [selectedLocation, setSelectedLocation] = React.useState(
    config.locations[0]?.value
  );
  const [selectedValue, setSelectedValue] = React.useState("Residence");
  const [hiddenSeries, setHiddenSeries] = React.useState(
    new Set(
      config.transportModes.options
        .filter((mode) => !INITIAL_VISIBLE_MODES.includes(mode.value))
        .map((mode) => `${config.locations[0]?.value}_${mode.value}`)
    )
  );

  const getInitialHiddenSeries = (location) => {
    return new Set(
      config.transportModes.options
        .filter((mode) => !INITIAL_VISIBLE_MODES.includes(mode.value))
        .map((mode) => `${location}_${mode.value}`)
    );
  };

  React.useEffect(() => {
    fetch(dataPath)
      .then((response) => response.text())
      .then((csvText) => {
        const parsedData = d3.csvParse(csvText);
        const filteredData = parsedData.filter((d) => d.Value === selectedValue);

        // Transform data for the selected location
        const transformedData = [];
        const years = [...new Set(filteredData.map((d) => d.year))];

        years.forEach((year) => {
          const yearData = { year };
          config.transportModes.options.forEach((mode) => {
            const columnName = `${selectedLocation}_${mode.value}`;
            const value = filteredData.find((d) => d.year === year)?.[columnName];
            yearData[columnName] = value ? parseFloat(value) : 0;
          });
          transformedData.push(yearData);
        });

        // Keep initial visibility based on INITIAL_VISIBLE_MODES only
        const newHiddenSeries = new Set(
          config.transportModes.options
            .filter((mode) => !INITIAL_VISIBLE_MODES.includes(mode.value))
            .map((mode) => `${selectedLocation}_${mode.value}`)
        );

        setHiddenSeries(newHiddenSeries);
        setData(transformedData);
      })
      .catch((error) => {
        console.error("Error loading chart data:", error);
      });
  }, [dataPath, selectedLocation, selectedValue, config.transportModes.options]);

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

  const selectStyle = {
    padding: "0.5rem",
    borderRadius: "4px",
    border: "1px solid #9E9E9E",
    backgroundColor: "#E3F2FD",
    cursor: "pointer",
    color: "#000000",
    fontWeight: "500",
  };

  const renderChart = () => {
    if (data.length === 0) {
      return <div>Loading data...</div>;
    }

    return (
      <LineChart
        data={data}
        margin={{ top: 10, right: 30, left: 50, bottom: 20 }}
        style={{ backgroundColor: "white" }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#E0E0E0" />
        <XAxis
          dataKey="year"
          tick={{ fill: "#000000", fontSize: 12 }}
          stroke="#666666"
        />
        <YAxis
          tick={{ fill: "#000000", fontSize: 12 }}
          stroke="#666666"
          tickFormatter={(value) => `${value}%`}
          label={{
            value: config.yAxis.label,
            angle: -90,
            position: "insideLeft",
            offset: -40,
          }}
        />
        <Tooltip content={<CustomTooltip />} />
        <Legend
          onClick={handleLegendClick}
          iconSize={10}
          iconType="circle"
          wrapperStyle={{ paddingTop: "20px" }}
        />
        {config.transportModes.options.map((mode) => {
          const key = `${selectedLocation}_${mode.value}`;
          return (
            <Line
              key={key}
              type="monotone"
              dataKey={key}
              name={mode.label}
              stroke={CHART_COLORS[mode.label]}
              strokeWidth={2}
              dot={{
                r: 4,
                strokeWidth: 2,
                fill: "white",
                stroke: CHART_COLORS[mode.label],
              }}
              activeDot={{
                r: 6,
                strokeWidth: 2,
                fill: "white",
                stroke: CHART_COLORS[mode.label],
              }}
              hide={hiddenSeries.has(key)}
            />
          );
        })}
      </LineChart>
    );
  };

  // Update location selector handler
  const handleLocationChange = (e) => {
    setSelectedLocation(e.target.value);
  };

  // Remove resetting hiddenSeries from Value select onChange
  const handleValueChange = (e) => {
    setSelectedValue(e.target.value);
  };

  return (
    <div>
      <div style={{ marginBottom: "1rem", display: "flex", gap: "1rem" }}>
        <div>
          <label
            htmlFor="locationSelect"
            style={{
              marginRight: "0.5rem",
              fontWeight: "500",
              color: "#ffffff",
            }}
          >
            Select Location:
          </label>
          <select
            id="locationSelect"
            value={selectedLocation}
            onChange={handleLocationChange}
            style={selectStyle}
          >
            {config.locations.map((location) => (
              <option key={location.value} value={location.value}>
                {location.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label
            htmlFor="valueSelect"
            style={{
              marginRight: "0.5rem",
              fontWeight: "500",
              color: "#ffffff",
            }}
          >
            Select Value:
          </label>
          <select
            id="valueSelect"
            value={selectedValue}
            onChange={handleValueChange}
            style={selectStyle}
          >
            {config.filters.Value.map((value) => (
              <option key={value.value} value={value.value}>
                {value.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={600}>
        {renderChart()}
      </ResponsiveContainer>
    </div>
  );
};

export default CommuteChart;
