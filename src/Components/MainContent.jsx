import React, { useState } from "react";
import {
  FaChartBar,
  FaUsers,
  FaLeaf,
  FaGlobe,
  FaCity,
  FaSchool,
  FaCar,
  FaHeartbeat,
  FaBuilding,
  FaTree,
  FaLightbulb,
  FaWater,
} from "react-icons/fa";
import { useCategory } from "../Context/CategoryContext";
import TabViewer from "./TabViewer";

const items = [
  {
    icon: <FaChartBar size={40} color="#ffffff" />,
    title: "Performance",
    details: "See how the region is performing with up-to-date metrics.",
    markdownPath: "/markdown/Air Quality",
  },
  {
    icon: <FaUsers size={40} color="#ffffff" />,
    title: "Population",
    details: "Track population growth and demographic changes.",
    markdownPath: "/markdown/Bridge Conditions",
  },
  {
    icon: <FaLeaf size={40} color="#ffffff" />,
    title: "Sustainability",
    details: "Monitor sustainability and green initiatives.",
    markdownPath: "/markdown/Sustainability",
  },
  {
    icon: <FaGlobe size={40} color="#ffffff" />,
    title: "Global Impact",
    details: "Understand the region's global connections.",
    markdownPath: "/markdown/Global Impact",
  },
  {
    icon: <FaCity size={40} color="#ffffff" />,
    title: "Urban Development",
    details: "Explore urban growth and infrastructure projects.",
    markdownPath: "/markdown/Urban Development",
  },
  {
    icon: <FaSchool size={40} color="#ffffff" />,
    title: "Education",
    details: "Review educational attainment and resources.",
    markdownPath: "/markdown/Education",
  },
  {
    icon: <FaCar size={40} color="#ffffff" />,
    title: "Transportation",
    details: "Analyze transportation networks and mobility.",
    markdownPath: "/markdown/Transportation",
  },
  {
    icon: <FaHeartbeat size={40} color="#ffffff" />,
    title: "Health",
    details: "Check public health and wellness indicators.",
    markdownPath: "/markdown/Health",
  },
  {
    icon: <FaBuilding size={40} color="#ffffff" />,
    title: "Housing",
    details: "Assess housing availability and affordability.",
    markdownPath: "/markdown/Housing",
  },
  {
    icon: <FaTree size={40} color="#ffffff" />,
    title: "Environment",
    details: "Track environmental quality and conservation.",
    markdownPath: "/markdown/Environment",
  },
  {
    icon: <FaLightbulb size={40} color="#ffffff" />,
    title: "Innovation",
    details: "See innovation and technology trends.",
    markdownPath: "/markdown/Innovation",
  },
  {
    icon: <FaWater size={40} color="#ffffff" />,
    title: "Water Resources",
    details: "Monitor water quality and resource management.",
    markdownPath: "/markdown/Water Resources",
  },
];

// Update the categoryColors object to match Sidebar colors

const categoryMapping = {
  sustainability: ["Sustainability", "Environment", "Water Resources"],
  equity: ["Population", "Housing", "Education"],
  resilience: ["Health", "Innovation", "Performance"],
  environment: ["Environment", "Water Resources", "Sustainability"],
  community: ["Population", "Education", "Health"],
  transportation: ["Transportation"],
  economy: ["Performance", "Housing", "Innovation"],
};

function MainContent() {
  const { selectedCategory } = useCategory();
  const [selectedPath, setSelectedPath] = useState(null);

  const isItemActive = (title) => {
    if (!selectedCategory) return true;
    return categoryMapping[selectedCategory]?.includes(title);
  };

  const getItemBackground = (title) => {
    if (!selectedCategory) return "#008085"; // Default gray-800 color
    if (!isItemActive(title)) return "#ffffff";

    // Update the categoryColors object to match Sidebar colors

    const colors = {
      sustainability: "#762a83",
      equity: "#9970ab",
      resilience: "#c2a5cf",
      environment: "#FFFFA6",
      community: "#a6dba0",
      transportation: "#5aae61",
      economy: "#1b7837",
    };

    return colors[selectedCategory];
  };

  const getTextAndIconColor = (title) => {
    if (!selectedCategory) return "#ffffff";
    if (!isItemActive(title)) return "#9CA3AF";

    // Light background colors that need dark text
    const lightBackgrounds = ["environment", "community", "resilience"];
    return lightBackgrounds.includes(selectedCategory) ? "#000000" : "#ffffff";
  };

  const handleBoxClick = (markdownPath) => {
    setSelectedPath(markdownPath);
  };

  if (selectedPath) {
    return (
      <div className="flex-[80%] bg-gray-900">
        <button
          onClick={() => setSelectedPath(null)}
          className="m-4 px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600"
        >
          Back to Grid
        </button>
        <TabViewer folderPath={selectedPath} />
      </div>
    );
  }

  return (
    <div className="flex-[80%] bg-gray-900 p-4 flex items-start justify-start">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-6 [@media(min-width:1800px)]:grid-cols-7 [@media(min-width:2100px)]:grid-cols-8 gap-8 w-full max-w-full">
        {items.map((item, idx) => (
          <div
            onClick={() => handleBoxClick(item.markdownPath)}
            className={`layout-item rounded-lg shadow-md ${
              !isItemActive(item.title) ? "pointer-events-none opacity-50" : ""
            } cursor-pointer`}
            key={idx}
          >
            <div className="flip-card-inner h-56">
              <div
                className="flip-card-front"
                style={{
                  backgroundColor: getItemBackground(item.title),
                  color: getTextAndIconColor(item.title),
                }}
              >
                {React.cloneElement(item.icon, {
                  color: getTextAndIconColor(item.title),
                })}
                <div className="mt-4 text-lg font-semibold hover-text">
                  {item.title}
                </div>
              </div>
              <div
                className="flip-card-back"
                style={{
                  backgroundColor: getItemBackground(item.title),
                  color: getTextAndIconColor(item.title),
                }}
              >
                {React.cloneElement(item.icon, {
                  color: getTextAndIconColor(item.title),
                })}
                <div className="mt-4 text-base text-center">{item.details}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainContent;
