import React, { useState, useEffect, lazy, Suspense } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

// Lazy load ApexCharts to avoid SSR issues
const Chart = lazy(() => import("react-apexcharts"));

// Add a loading component
const ChartLoader = () => (
  <div className="h-[300px] w-full flex items-center justify-center bg-gray-800">
    <div className="text-white">Loading chart...</div>
  </div>
);

const ChartRenderer = ({ chartData, type }) => {
  const theme = {
    mode: "dark",
    palette: "palette1",
    monochrome: {
      enabled: false,
      color: "#4f46e5",
    },
  };

  const defaultOptions = {
    theme,
    chart: {
      background: "transparent",
      toolbar: {
        show: false,
      },
    },
    grid: {
      borderColor: "#334155",
      opacity: 0.1,
    },
    xaxis: {
      labels: {
        style: {
          colors: "#ffffff",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#ffffff",
        },
      },
    },
    legend: {
      labels: {
        colors: "#ffffff",
      },
    },
  };

  switch (type) {
    case "bar":
      return (
        <Chart
          options={{
            ...defaultOptions,
            xaxis: {
              ...defaultOptions.xaxis,
              categories: chartData.data.map((d) => d.label),
            },
          }}
          series={[{ data: chartData.data.map((d) => d.value) }]}
          type="bar"
          height={300}
        />
      );

    case "multiLine":
      return (
        <Chart
          options={{
            ...defaultOptions,
            colors: chartData.colors,
            xaxis: {
              ...defaultOptions.xaxis,
              type: "category",
            },
            stroke: {
              width: 2,
              curve: "smooth",
            },
            markers: {
              size: 4,
            },
          }}
          series={chartData.data.map((series) => ({
            name: series.name || series.key,
            data: series.values.map((d) => ({
              x: d.x || d.year,
              y: d.y || d.value,
            })),
          }))}
          type="line"
          height={300}
        />
      );

    case "stackedBar":
      return (
        <Chart
          options={{
            ...defaultOptions,
            colors: chartData.colors,
            xaxis: {
              ...defaultOptions.xaxis,
              categories: chartData.data[0].values.map((d) => d.x),
              labels: {
                rotate: -45,
                style: {
                  colors: "#ffffff",
                },
              },
            },
            plotOptions: {
              bar: {
                horizontal: false,
                borderRadius: 4,
                columnWidth: "70%",
                stacked: true,
              },
            },
          }}
          series={chartData.data.map((series) => ({
            name: series.key,
            data: series.values.map((d) => d.y),
          }))}
          type="bar"
          height={300}
        />
      );

    default:
      return null;
  }
};

// Simple CSV parser
const parseCSV = (text) => {
  const lines = text.trim().split("\n");
  const headers = lines[0].split(",").map((h) => h.trim());
  return lines
    .slice(1)
    .filter((line) => line.trim())
    .map((line) => {
      const values = line.split(",");
      return headers.reduce((obj, header, i) => {
        obj[header] = values[i]?.trim();
        return obj;
      }, {});
    });
};

const CSVChart = ({ filename, type, config }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`/data/${filename}`)
      .then((res) => res.text())
      .then((text) => {
        const records = parseCSV(text);
        const formattedData = {
          data: config.series.map((series) => ({
            key: series.key,
            values: records.map((record) => ({
              x: record[config.xAxis],
              y: parseFloat(record[series.column]) || 0,
            })),
          })),
          colors: config.colors,
        };
        setData(formattedData);
      })
      .catch((err) => console.error("Error loading CSV:", err));
  }, [filename, config]);

  if (!data) return <ChartLoader />;
  return <ChartRenderer chartData={data} type={type} />;
};

// Add this function at the top of the file
const formatFolderTitle = (folderPath) => {
  // Extract the last part of the path
  const folder = folderPath.split("/").pop();
  // Remove any special characters and split by spaces
  return folder.replace(/[_-]/g, " ");
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

  // Add new state for folder title
  const [folderTitle, setFolderTitle] = useState("");

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

  // Add useEffect to set folder title
  useEffect(() => {
    const title = formatFolderTitle(folderPath);
    setFolderTitle(title);
    document.title = `${title} - Performance Tracker`; // Optional: update page title
  }, [folderPath]);

  // Custom components for markdown
  const components = {
    // Add custom component for charts
    d3chart: ({ node, ...props }) => {
      try {
        if (props.csv) {
          // Validate required props
          if (!props.type || !props.config) {
            throw new Error("Missing required chart properties");
          }

          return (
            <div className="chart-container">
              <CSVChart
                filename={props.csv}
                type={props.type}
                config={
                  typeof props.config === "string"
                    ? JSON.parse(props.config)
                    : props.config
                }
              />
            </div>
          );
        }

        const chartData =
          typeof props.data === "string" ? JSON.parse(props.data) : props.data;

        // Validate required properties
        if (!chartData || !props.type) {
          console.error("Invalid chart configuration:", {
            chartData,
            type: props.type,
          });
          return (
            <div className="text-red-500">Invalid chart configuration</div>
          );
        }

        return (
          <div className="chart-container">
            <Suspense fallback={<ChartLoader />}>
              <ChartRenderer chartData={chartData} type={props.type} />
            </Suspense>
          </div>
        );
      } catch (err) {
        console.error("Error parsing chart data:", err);
        return (
          <div className="text-red-500">Error loading chart: {err.message}</div>
        );
      }
    },
  };

  return (
    <div className="w-full h-full bg-gray-900 text-white p-4">
      {/* Add folder title */}
      <h1 className="text-2xl font-bold text-center mb-6">{folderTitle}</h1>

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
          <ReactMarkdown
            components={components}
            rehypePlugins={[rehypeRaw]} // Add this line
          >
            {content}
          </ReactMarkdown>
        )}
      </div>
    </div>
  );
};

export default TabViewer;
