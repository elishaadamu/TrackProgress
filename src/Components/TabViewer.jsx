import React, { useState, useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import * as d3 from "d3";

// Custom component to render D3 charts
const D3Chart = ({ chartData, type }) => {
  const chartRef = useRef();

  useEffect(() => {
    if (chartData && chartRef.current) {
      // Clear any existing charts
      d3.select(chartRef.current).selectAll("*").remove();

      const margin = { top: 20, right: 20, bottom: 30, left: 40 };
      const width = chartRef.current.clientWidth - margin.left - margin.right;
      const height = 300 - margin.top - margin.bottom;

      const svg = d3
        .select(chartRef.current)
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

      if (type === "bar") {
        // Create scales
        const x = d3
          .scaleBand()
          .range([0, width])
          .domain(chartData.data.map((d) => d.label))
          .padding(0.1);

        const y = d3
          .scaleLinear()
          .range([height, 0])
          .domain([0, d3.max(chartData.data, (d) => d.value)]);

        // Add X axis
        svg
          .append("g")
          .attr("transform", `translate(0,${height})`)
          .call(d3.axisBottom(x))
          .selectAll("text")
          .style("fill", "white");

        // Add Y axis
        svg
          .append("g")
          .call(d3.axisLeft(y))
          .selectAll("text")
          .style("fill", "white");

        // Add bars
        svg
          .selectAll("rect")
          .data(chartData.data)
          .join("rect")
          .attr("x", (d) => x(d.label))
          .attr("width", x.bandwidth())
          .attr("y", (d) => y(d.value))
          .attr("height", (d) => height - y(d.value))
          .attr("fill", "#4f46e5");
      }
    }
  }, [chartData, type]);

  return <div ref={chartRef} className="w-full h-[300px]"></div>;
};

const TabViewer = ({ folderPath }) => {
  const [tabs] = useState([
    "why_its_important",
    "what_is_it",
    "how_are_we_doing",
    "resources",
  ]);
  const [activeTab, setActiveTab] = useState("why_its_important");
  const [content, setContent] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(null);
    fetch(`${folderPath}/${activeTab}.md`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Tab content not found: ${activeTab}`);
        }
        return res.text();
      })
      .then((text) => {
        setContent(text);
        setError(null);
      })
      .catch((err) => {
        console.error("Error loading markdown:", err);
        setError(err.message);
        setContent("");
      });
  }, [folderPath, activeTab]);

  // Custom components for markdown
  const components = {
    // Add custom component for charts
    d3chart: ({ node, ...props }) => {
      try {
        const chartData = JSON.parse(props.data);
        return <D3Chart chartData={chartData} type={props.type} />;
      } catch (err) {
        console.error("Error parsing chart data:", err);
        return <div className="text-red-500">Error loading chart</div>;
      }
    },
  };

  return (
    <div className="w-full h-full bg-gray-900 text-white p-4">
      {/* Scrollable tab container on mobile */}
      <div className="relative flex transistion-all duration-300 ease-in-out md:justify-center overflow-x-auto whitespace-nowrap space-x-4 mb-4 border-b border-gray-700 scrollbar-hide">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`shrink-0 px-4 py-2 whitespace-nowrap relative transition-all duration-300 ease-in-out
              ${
                activeTab === tab
                  ? "text-yellow-500"
                  : "text-gray-400 hover:text-gray-200"
              }
              after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5
              after:transition-all after:duration-300 after:ease-in-out
              ${
                activeTab === tab
                  ? "after:bg-yellow-500 after:opacity-100"
                  : "after:bg-transparent after:opacity-0"
              }
            `}
            onClick={() => setActiveTab(tab)}
          >
            {tab
              .split("_")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")}
          </button>
        ))}
      </div>

      <div className="prose prose-invert mt-10 max-w-[1024px] mx-auto">
        {error ? (
          <div className="text-red-500">{error}</div>
        ) : (
          <ReactMarkdown components={components}>{content}</ReactMarkdown>
        )}
      </div>
    </div>
  );
};

export default TabViewer;
