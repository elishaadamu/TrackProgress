import React from "react";
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

const items = [
  {
    icon: <FaChartBar size={40} color="#ffffff" />,
    title: "Performance",
    details: "See how the region is performing with up-to-date metrics.",
  },
  {
    icon: <FaUsers size={40} color="#ffffff" />,
    title: "Population",
    details: "Track population growth and demographic changes.",
  },
  {
    icon: <FaLeaf size={40} color="#ffffff" />,
    title: "Sustainability",
    details: "Monitor sustainability and green initiatives.",
  },
  {
    icon: <FaGlobe size={40} color="#ffffff" />,
    title: "Global Impact",
    details: "Understand the region's global connections.",
  },
  {
    icon: <FaCity size={40} color="#ffffff" />,
    title: "Urban Development",
    details: "Explore urban growth and infrastructure projects.",
  },
  {
    icon: <FaSchool size={40} color="#ffffff" />,
    title: "Education",
    details: "Review educational attainment and resources.",
  },
  {
    icon: <FaCar size={40} color="#ffffff" />,
    title: "Transportation",
    details: "Analyze transportation networks and mobility.",
  },
  {
    icon: <FaHeartbeat size={40} color="#ffffff" />,
    title: "Health",
    details: "Check public health and wellness indicators.",
  },
  {
    icon: <FaBuilding size={40} color="#ffffff" />,
    title: "Housing",
    details: "Assess housing availability and affordability.",
  },
  {
    icon: <FaTree size={40} color="#ffffff" />,
    title: "Environment",
    details: "Track environmental quality and conservation.",
  },
  {
    icon: <FaLightbulb size={40} color="#ffffff" />,
    title: "Innovation",
    details: "See innovation and technology trends.",
  },
  {
    icon: <FaWater size={40} color="#ffffff" />,
    title: "Water Resources",
    details: "Monitor water quality and resource management.",
  },
];

const categoryColors = {
  sustainability: "bg-emerald-900",
  equity: "bg-blue-900",
  resilience: "bg-purple-900",
  environment: "bg-green-900",
  community: "bg-orange-900",
  transportation: "bg-cyan-900",
  economy: "bg-yellow-900",
};

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

  const isItemActive = (title) => {
    if (!selectedCategory) return true;
    return categoryMapping[selectedCategory]?.includes(title);
  };

  const getItemBackground = (title) => {
    if (!selectedCategory) return "bg-gray-800"; // Default color
    if (!isItemActive(title)) return "bg-white";
    return categoryColors[selectedCategory];
  };

  return (
    <div className="flex-[80%] bg-gray-900 p-4 flex items-start justify-start">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-6 [@media(min-width:1800px)]:grid-cols-7 [@media(min-width:2100px)]:grid-cols-8 gap-8 w-full max-w-full">
        {items.map((item, idx) => (
          <div
            className={`layout-item rounded-lg shadow-md ${
              !isItemActive(item.title) ? "pointer-events-none opacity-50" : ""
            }`}
            key={idx}
          >
            <div className="flip-card-inner h-56">
              <div
                className={`flip-card-front ${getItemBackground(item.title)} ${
                  !isItemActive(item.title) ? "text-gray-400" : "text-white"
                }`}
              >
                {item.icon}
                <div className="mt-4 text-lg font-semibold hover-text">
                  {item.title}
                </div>
              </div>
              <div
                className={`flip-card-back ${getItemBackground(item.title)} ${
                  !isItemActive(item.title) ? "text-gray-400" : ""
                }`}
              >
                {item.icon}
                <div className="mt-4 text-base text-gray-100 text-center">
                  {item.details}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainContent;
