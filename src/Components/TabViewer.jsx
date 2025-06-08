import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

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

  return (
    <div className="w-full h-full bg-gray-900 text-white p-4">
      <div className="flex space-x-4 mb-4 border-b border-gray-700">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 ${
              activeTab === tab
                ? "border-b-2 border-yellow-500 text-yellow-500"
                : "text-gray-400 hover:text-gray-200"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab
              .split("_")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")}
          </button>
        ))}
      </div>
      <div className="prose prose-invert max-w-none">
        {error ? (
          <div className="text-red-500">{error}</div>
        ) : (
          <ReactMarkdown
            remarkPlugins={[]}
            rehypePlugins={[]}
            children={content}
          />
        )}
      </div>
    </div>
  );
};

export default TabViewer;
