import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import Chart from "./ChartComponent";

const formatFolderTitle = (folderPath) => {
  const folder = folderPath.split("/").pop();
  return folder.replace(/[_-]/g, " ");
};

const TabViewer = ({ folderPath, trendIcon, trendDetails, details, title }) => {
  const [tabs] = useState([
    "why_its_important",
    "what_is_it",
    "how_are_we_doing",
    "resources",
  ]);
  const [activeTab, setActiveTab] = useState("why_its_important");
  const [content, setContent] = useState("");
  const [error, setError] = useState(null);
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

  useEffect(() => {
    const title = formatFolderTitle(folderPath);
    setFolderTitle(title);
    document.title = `${title} - Performance Tracker`;
  }, [folderPath]);

  const components = {
    // Custom component to handle chart markdown syntax
    p: ({ children }) => {
      if (typeof children === "string" && children.startsWith("chart:")) {
        try {
          const config = JSON.parse(children.slice(6));
          return (
            <Chart
              type={config.type}
              dataPath={`/data/${config.file}`}
              config={config}
            />
          );
        } catch (e) {
          console.error("Error parsing chart config:", e);
          return <p className="text-red-500">Invalid chart configuration</p>;
        }
      }
      return <p>{children}</p>;
    },
  };

  return (
    <div className="w-full h-full bg-gray-900 text-white p-4">
      <div className="flex items-center justify-center max-w-[1024px] mx-auto mb-6">
        <h1 className="text-2xl font-bold">{title}</h1>
      </div>

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
          <ReactMarkdown rehypePlugins={[rehypeRaw]} components={components}>
            {content}
          </ReactMarkdown>
        )}
        <div className="flex items-center justify-center mt-10 gap-5">
          <div className="flex items-center">
            {trendIcon}
            <span className="ml-2 font-semibold">{trendDetails}</span>
          </div>
          <p className="text-gray-300">{details}</p>
        </div>
      </div>
    </div>
  );
};

export default TabViewer;
