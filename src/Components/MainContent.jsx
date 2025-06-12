import React, { useState } from "react";
import {
  FaWind,
  FaBuilding,
  FaHandshake,
  FaBus,
  FaCar,
  FaGraduationCap,
  FaChartLine,
  FaTemperatureHigh,
  FaHome,
  FaFileContract,
  FaDollarSign,
  FaBriefcase,
  FaUsers,
  FaTree,
  FaRoad,
  FaPiggyBank,
  FaCity,
  FaSubway,
  FaShieldAlt,
  FaTint,
  FaCalendarAlt,
  FaChartBar,
} from "react-icons/fa";
import { useCategory } from "../Context/CategoryContext";
import TabViewer from "./TabViewer";
import { GiSuspensionBridge } from "react-icons/gi";
import {
  SmileOutlined,
  LikeOutlined,
  MehOutlined,
  FrownOutlined,
  DislikeOutlined,
} from "@ant-design/icons";

// Update these items based on the markdown files
const items = [
  {
    icon: <FaWind size={40} color="#ffffff" />,
    trendIcon: <LikeOutlined style={{ fontSize: "40px" }} />,
    trendType: "good",
    trendDetails: "One day",
    title: "Air Quality",
    details: "increase in five-year average of violating days",
    markdownPath: "/markdown/Air Quality",
  },
  {
    icon: <GiSuspensionBridge size={40} color="#ffffff" />,
    trendIcon: <SmileOutlined size={40} color="#ffffff" />,
    trendDetails: "62% drop",
    title: "Bridge Conditions",
    details: "in deficient bridge deck area",
    markdownPath: "/markdown/Bridge Conditions",
  },
  {
    icon: <FaBuilding size={40} color="#ffffff" />,
    trendIcon: <SmileOutlined size={40} color="#ffffff" />,
    trendDetails: "95% growth",
    title: "Business Formations",
    details: "in annual applications",
    markdownPath: "/markdown/Business Formations",
  },
  {
    icon: <FaHandshake size={40} color="#ffffff" />,
    trendIcon: <FrownOutlined size={40} color="#ffffff" />,
    trendDetails: "40-51%",
    title: "Community Integration",
    details: "of residents not living in diverse communities",
    markdownPath: "/markdown/Community Integration",
  },
  {
    icon: <FaBus size={40} color="#ffffff" />,
    trendIcon: <MehOutlined size={40} color="#ffffff" />,
    trendDetails: "10.8% fewer",
    title: "Commute Mode",
    details: "residents drive alone to work",
    markdownPath: "/markdown/Commute Mode",
  },
  {
    icon: <FaCar size={40} color="#ffffff" />,
    trendIcon: <MehOutlined size={40} color="#ffffff" />,
    trendDetails: "4.3% less",
    title: "Congestion",
    details: "reliability on region's highways",
    markdownPath: "/markdown/Congestion",
  },
  {
    icon: <FaGraduationCap size={40} color="#ffffff" />,
    trendIcon: <LikeOutlined size={40} color="#ffffff" />,
    trendDetails: "10% rise",
    title: "Educational Attainment",
    details: "in population over 25 with high school diploma",
    markdownPath: "/markdown/Educational Attainment",
  },
  {
    icon: <FaChartLine size={40} color="#ffffff" />,
    trendIcon: <MehOutlined size={40} color="#ffffff" />,
    trendDetails: "1.7% gain",
    title: "Gross Domestic Product",
    details: "annual average GDP growth",
    markdownPath: "/markdown/GDP",
  },
  {
    icon: <FaTemperatureHigh size={40} color="#ffffff" />,
    trendIcon: <MehOutlined size={40} color="#ffffff" />,
    trendDetails: "30% decrease",
    title: "Heat-Trapping Gases",
    details: "in heat-trapping gases per person",
    markdownPath: "/markdown/Heat Trapping Gases",
  },
  {
    icon: <FaHome size={40} color="#ffffff" />,
    trendIcon: <MehOutlined size={40} color="#ffffff" />,
    trendDetails: "9% fewer",
    title: "Housing Affordability",
    details: "cost burdened households since 2011",
    markdownPath: "/markdown/Housing Affordability",
  },
  {
    icon: <FaFileContract size={40} color="#ffffff" />,
    trendIcon: <SmileOutlined size={40} color="#ffffff" />,
    trendDetails: "46% increase",
    title: "Housing Permits",
    details: "in permits in appropriate development areas",
    markdownPath: "/markdown/Housing Permits",
  },
  {
    icon: <FaDollarSign size={40} color="#ffffff" />,
    trendIcon: <DislikeOutlined size={40} color="#ffffff" />,
    trendDetails: "20-35% remaining",
    title: "Income",
    details: "income gaps between groups",
    markdownPath: "/markdown/Income",
  },
  {
    icon: <FaBriefcase size={40} color="#ffffff" />,
    trendIcon: <SmileOutlined size={40} color="#ffffff" />,
    trendDetails: "25% increase",
    title: "Job Growth",
    details: "in jobs",
    markdownPath: "/markdown/Job Growth",
  },
  {
    icon: <FaBriefcase size={40} color="#ffffff" />,
    trendIcon: <LikeOutlined size={40} color="#ffffff" />,
    trendDetails: "5-6% drop",
    title: "Labor Force",
    details: "in participation rate gaps from base years",
    markdownPath: "/markdown/Job Growth",
  },
  {
    icon: <FaBriefcase size={40} color="#ffffff" />,
    trendIcon: <LikeOutlined size={40} color="#ffffff" />,
    trendDetails: "49% drop",
    title: "Land Consumption",
    details: "in land consumption rate",
    markdownPath: "/markdown/Job Growth",
  },
  {
    icon: <FaUsers size={40} color="#ffffff" />,
    trendIcon: <MehOutlined size={40} color="#ffffff" />,
    trendDetails: "0.5% decrease",
    title: "Miles Driven",
    details: "in daily miles driven per person",
    markdownPath: "/markdown/Miles Driven",
  },
  {
    icon: <FaTree size={40} color="#ffffff" />,
    trendIcon: <LikeOutlined size={40} color="#ffffff" />,
    trendDetails: "8-10% drop",
    title: "Mortgage Lending",
    details: "in loan approval rate gaps",
    markdownPath: "/markdown/Mortgage Lending",
  },
  {
    icon: <FaRoad size={40} color="#ffffff" />,
    trendIcon: <MehOutlined size={40} color="#ffffff" />,
    trendDetails: "1.0% fewer",
    title: "Pavement Conditions",
    details: "road lane miles in poor condition",
    markdownPath: "/markdown/Pavement Conditions",
  },
  {
    icon: <FaUsers size={40} color="#ffffff" />,
    trendIcon: <LikeOutlined size={40} color="#ffffff" />,
    trendDetails: "10.6% increase",
    title: "Population Growth",
    details: "in population",
    markdownPath: "/markdown/Population Growth",
  },
  {
    icon: <FaCity size={40} color="#ffffff" />,
    trendIcon: <MehOutlined size={40} color="#ffffff" />,
    trendDetails: "28.6% increase",
    title: "Transit Conditions",
    details: "of revenue vehicles past useful life",
    markdownPath: "/markdown/Transit Conditions",
  },
  {
    icon: <FaSubway size={40} color="#ffffff" />,
    trendIcon: <DislikeOutlined size={40} color="#ffffff" />,
    trendDetails: "37% decrease",
    title: "Transit Ridership",
    details: "in transit trips per person",
    markdownPath: "/markdown/Transit Ridership",
  },
  {
    icon: <FaShieldAlt size={40} color="#ffffff" />,
    trendIcon: <DislikeOutlined size={40} color="#ffffff" />,
    trendDetails: "60.5% increase",
    title: "Transportation Safety",
    details: "in fatalities and severe injuries",
    markdownPath: "/markdown/Transportation Safety",
  },
  {
    icon: <FaTint size={40} color="#ffffff" />,
    trendIcon: <FrownOutlined size={40} color="#ffffff" />,
    trendDetails: "2.8% decrease",
    title: "Water Quality",
    details: "in water supporting aquatic life",
    markdownPath: "/markdown/Water Quality",
  },
  {
    icon: <FaCalendarAlt size={40} color="#ffffff" />,
    trendIcon: <FaChartBar size={40} color="#ffffff" />,
    trendDetails: "49% drop",
    title: "2050",
    details: "",
    markdownPath: "/markdown/Year Founded",
  },
];

// Update categoryMapping to match the folders exactly
const categoryMapping = {
  sustainability: [
    "Air Quality",
    "Commute Mode",
    "Congestion",
    "Housing Permits",
    "Land Consumption",
    "Miles Driven",
    "Transit Ridership",
    "Water Quality",
  ],
  equity: [
    "Air Quality",
    "Community Integration",
    "Housing Affordability",
    "Educational Attainment",
    "Income",
    "Labor Force",
    "Mortgage Lending",
    "Transportation Safety",
  ],
  resilience: [
    "Gross Domestic Product",
    "Heat-Trapping Gases",
    "Housing Affordability",
    "Income",
    "Job Growth",
    "Land Consumption",
    "Mortgage Lending",
    "Pavement Conditions",
    "Transit Conditions",
  ],
  environment: [
    "Air Quality",
    "Commute Mode",
    "Heat-Trapping Gases",
    "Housing Permits",
    "Land Consumption",
    "Miles Driven",
    "Population Growth",
    "Transit Ridership",
    "Water Quality",
    "2050",
  ],
  community: [
    "Community Integration",
    "Commute Mode",
    "Congestion",
    "Educational Attainment",
    "Heat-Trapping Gases",
    "Housing Affordability",
    "Housing Permits",
    "Income",
    "Job Growth",
    "Labor Force",
    "Land Consumption",
    "Population Growth",
    "Transit Ridership",
    "2050",
  ],
  transportation: [
    "Air Quality",
    "Bridge Conditions",
    "Commute Mode",
    "Miles Driven",
    "Pavement Conditions",
    "Transit Conditions",
    "Transit Ridership",
    "Transportation Safety",
    "2050",
  ],
  economy: [
    "Business Formations",
    "Community Integration",
    "Congestion",
    "Educational Attainment",
    "Gross Domestic Product",
    "Housing Affordability",
    "Housing Permits",
    "Income",
    "Job Growth",
    "Labor Force",
    "Mortgage Lending",
    "Population Growth",
    "2050",
  ],
};

// First, add this mapping near the top of the file, after the items array
const trendTypeMapping = {
  "very-good": <SmileOutlined style={{ fontSize: "40px" }} />,
  good: <LikeOutlined style={{ fontSize: "40px" }} />,
  neutral: <MehOutlined style={{ fontSize: "40px" }} />,
  "not-good": <FrownOutlined style={{ fontSize: "40px" }} />,
  poor: <DislikeOutlined style={{ fontSize: "40px" }} />,
};

function MainContent() {
  const { selectedCategory, selectedTrend } = useCategory();
  const [selectedPath, setSelectedPath] = useState(null);

  const isItemActive = (item) => {
    if (!selectedCategory && !selectedTrend) return true;

    if (
      selectedCategory &&
      !categoryMapping[selectedCategory]?.includes(item.title)
    ) {
      return false;
    }

    if (selectedTrend) {
      // Convert trendIcon to string for comparison
      const itemTrendType = item.trendType;
      return itemTrendType === selectedTrend;
    }

    return true;
  };

  const getItemBackground = (title) => {
    if (!selectedCategory) return "#008085"; // Default color

    // Check if the item belongs to the selected category
    const isActive = categoryMapping[selectedCategory]?.includes(title);
    if (!isActive) return "#4a5568"; // Inactive color

    // Category-specific colors
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

  // Update the getTextAndIconColor function
  const getTextAndIconColor = (title) => {
    if (!selectedCategory) return "#ffffff";

    // Check if the item belongs to the selected category
    const isActive = categoryMapping[selectedCategory]?.includes(title);
    if (!isActive) return "#9CA3AF";

    // Light background colors that need dark text
    const lightBackgrounds = ["environment", "community", "resilience"];
    return lightBackgrounds.includes(selectedCategory) ? "#000000" : "#ffffff";
  };

  const handleBoxClick = (markdownPath) => {
    setSelectedPath(markdownPath);
  };

  if (selectedPath) {
    // Find the selected item
    const selectedItem = items.find(
      (item) => item.markdownPath === selectedPath
    );

    return (
      <div className="flex-[80%] bg-gray-900">
        <button
          onClick={() => setSelectedPath(null)}
          className="m-4 px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600"
        >
          Back to Grid
        </button>
        <TabViewer
          folderPath={selectedPath}
          trendIcon={selectedItem.trendIcon}
          trendDetails={selectedItem.trendDetails}
          details={selectedItem.details}
          title={selectedItem.title}
        />
      </div>
    );
  }

  return (
    <div className="flex-[80%] bg-gray-900 p-4 flex items-start justify-start">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-6 gap-8 w-full max-w-full">
        {items.map((item, idx) => (
          <div
            onClick={() => handleBoxClick(item.markdownPath)}
            className={`layout-item rounded-lg shadow-md ${
              !isItemActive(item) ? "pointer-events-none opacity-50" : ""
            } cursor-pointer`}
            key={idx}
          >
            <div className="flip-card-inner text-center h-56">
              <div
                className="flip-card-front"
                style={{
                  backgroundColor: getItemBackground(item.title),
                  color: getTextAndIconColor(item.title),
                }}
              >
                {React.cloneElement(item.icon, {
                  color: getTextAndIconColor(item.title),
                  style: { color: getTextAndIconColor(item.title) },
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
                {React.cloneElement(item.trendIcon, {
                  style: {
                    fontSize: "40px",
                    color: getTextAndIconColor(item.title),
                  },
                })}
                <span className="font-bold">{item.trendDetails}</span>
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
