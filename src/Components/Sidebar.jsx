import React, { useState } from "react";
import { Select } from "antd";
import { GrPowerCycle } from "react-icons/gr";
import {
  BarChartOutlined,
  SafetyOutlined,
  EnvironmentOutlined,
  TeamOutlined,
  CarOutlined,
  BankOutlined,
  SmileOutlined,
  LikeOutlined,
  MehOutlined,
  FrownOutlined,
  DislikeOutlined,
} from "@ant-design/icons";
import { useCategory } from "../Context/CategoryContext";

function Sidebar() {
  const { Option } = Select;
  const {
    setSelectedCategory,
    setSelectedTrend,
    selectedCategory,
    selectedTrend,
  } = useCategory();
  const [selectedFilter, setSelectedFilter] = useState("category");

  const handleCategoryClick = (category) => {
    const lowercaseCategory = category.toLowerCase();
    // If clicking the same category that's already selected, clear the filter
    if (lowercaseCategory === selectedCategory) {
      setSelectedCategory(null);
    } else {
      // If clicking a different category, set it as the new filter
      setSelectedCategory(lowercaseCategory);
    }
  };

  const handleTrendClick = (trend) => {
    if (trend === selectedTrend) {
      setSelectedTrend(null);
    } else {
      setSelectedTrend(trend);
      setSelectedCategory(null);
    }
  };

  const renderContent = () => {
    if (selectedFilter === "category") {
      return (
        <>
          <div
            onClick={() => handleCategoryClick("sustainability")}
            className={`${categoryClass} bg-[#762a83]  hover:shadow-[0_4px_15px_rgba(251,191,36,0.5)] hover:bg-[#762a83] cursor-pointer transition-all duration-100 ease-in-out mx-2 md:mx-0`}
          >
            <GrPowerCycle style={{ fontSize: "24px", color: "#ffffff" }} />
            <span className="text-white text-base ml-2">Sustainability</span>
          </div>
          <div
            onClick={() => handleCategoryClick("equity")}
            className={`${categoryClass} bg-[#9970ab] hover:shadow-[0_4px_15px_rgba(251,191,36,0.5)] hover:bg-[#9970ab] cursor-pointer transition-all duration-100 ease-in-out mx-2 md:mx-0`}
          >
            <BarChartOutlined style={{ fontSize: "24px", color: "#000000" }} />
            <span className="text-black text-base ml-2">Equity</span>
          </div>
          <div
            onClick={() => handleCategoryClick("resilience")}
            className={`${categoryClass} bg-[#c2a5cf] hover:shadow-[0_4px_15px_rgba(251,191,36,0.5)] hover:bg-[#c2a5cf] cursor-pointer transition-all duration-100 ease-in-out mx-2 md:mx-0`}
          >
            <SafetyOutlined style={{ fontSize: "24px", color: "#000000" }} />
            <span className="text-black text-base ml-2">Resilience</span>
          </div>
          <div
            onClick={() => handleCategoryClick("environment")}
            className={`${categoryClass} bg-[#FFFFA6] hover:shadow-[0_4px_15px_rgba(251,191,36,0.5)] hover:bg-[#FFFFA6] cursor-pointer transition-all duration-100 ease-in-out mx-2 md:mx-0`}
          >
            <EnvironmentOutlined
              style={{ fontSize: "24px", color: "#000000" }}
            />
            <span className="text-black text-base ml-2">Environment</span>
          </div>
          <div
            onClick={() => handleCategoryClick("community")}
            className={`${categoryClass} bg-[#a6dba0] hover:shadow-[0_4px_15px_rgba(251,191,36,0.5)] hover:bg-[#a6dba0] cursor-pointer transition-all duration-100 ease-in-out mx-2 md:mx-0`}
          >
            <TeamOutlined style={{ fontSize: "24px", color: "#000000" }} />
            <span className="text-black text-base ml-2">Community</span>
          </div>
          <div
            onClick={() => handleCategoryClick("transportation")}
            className={`${categoryClass} bg-[#5aae61] hover:shadow-[0_4px_15px_rgba(251,191,36,0.5)] hover:bg-[#5aae61] cursor-pointer transition-all duration-100 ease-in-out mx-2 md:mx-0`}
          >
            <CarOutlined style={{ fontSize: "24px", color: "#000000" }} />
            <span className="text-black text-base ml-2">Transportation</span>
          </div>
          <div
            onClick={() => handleCategoryClick("economy")}
            className={`${categoryClass} bg-[#1b7837] hover:shadow-[0_4px_15px_rgba(251,191,36,0.5)] hover:bg-[#1b7837] cursor-pointer transition-all duration-100 ease-in-out mx-2 md:mx-0`}
          >
            <BankOutlined style={{ fontSize: "24px", color: "#ffffff" }} />
            <span className="text-white text-base ml-2">Economy</span>
          </div>
        </>
      );
    } else {
      return renderTrendContent();
    }
  };

  const renderTrendContent = () => {
    return (
      <>
        <div
          onClick={() => handleTrendClick("very-good")}
          className={`${trendClass} bg-gray-700 hover:bg-gray-800 cursor-pointer`}
        >
          <SmileOutlined style={{ fontSize: "24px", color: "#ffffff" }} />
          <span className="text-white text-base ml-2">Very Good</span>
        </div>
        <div
          onClick={() => handleTrendClick("good")}
          className={`${trendClass} bg-gray-700 hover:bg-gray-800 cursor-pointer`}
        >
          <LikeOutlined style={{ fontSize: "24px", color: "#ffffff" }} />
          <span className="text-white text-base ml-2">Good</span>
        </div>
        <div
          onClick={() => handleTrendClick("neutral")}
          className={`${trendClass} bg-gray-700 hover:bg-gray-800 cursor-pointer`}
        >
          <MehOutlined style={{ fontSize: "24px", color: "#ffffff" }} />
          <span className="text-white text-base ml-2">Neutral</span>
        </div>
        <div
          onClick={() => handleTrendClick("not-good")}
          className={`${trendClass} bg-gray-700 hover:bg-gray-800 cursor-pointer`}
        >
          <FrownOutlined style={{ fontSize: "24px", color: "#ffffff" }} />
          <span className="text-white text-base ml-2">Not Good</span>
        </div>
        <div
          onClick={() => handleTrendClick("poor")}
          className={`${trendClass} bg-gray-700 hover:bg-gray-800 cursor-pointer`}
        >
          <DislikeOutlined style={{ fontSize: "24px", color: "#ffffff" }} />
          <span className="text-white text-base ml-2">Poor</span>
        </div>
      </>
    );
  };

  const handleFilterChange = (value) => {
    setSelectedFilter(value);
    setSelectedCategory(null);
    setSelectedTrend(null);
  };

  return (
    <div className="w-full md:w-[18%] md:h-screen  md:sticky md:top-20">
      <div className="flex flex-col h-full">
        <div className="text-gray-600 w-full h-full flex flex-col">
          {/* Reduce the header height */}
          <div className="w-full h-[60px] flex px-1 bg-gray-800 items-center justify-center">
            <div className="flex items-center">
              <span className="font-semibold mr-1 text-gray-100 text-sm">
                Filter by:
              </span>
              <Select
                defaultValue="category"
                style={{ width: 120 }}
                size="middle"
                className="text-transparent"
                onChange={handleFilterChange}
              >
                <Option value="category">Category</Option>
                <Option value="trend">Trend</Option>
              </Select>
            </div>
          </div>
          {/* Update the content container */}
          <div className="flex flex-row md:flex-col overflow-x-auto md:overflow-hidden">
            <div
              className={`flex flex-row md:flex-col md:h-[calc(100vh-60px)]`}
            >
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Update the category and trend classes with smaller dimensions and remove margins
const categoryClass = `
  min-w-[180px] 
  md:min-w-full 
  flex 
  justify-center 
  items-center 
  md:h-[calc((100vh-80px))] 
  my-2

  py-2
`;

const trendClass = `
  min-w-[180px] 
  md:min-w-full 
  flex 
  justify-center 
  items-center 
  md:h-[calc((100vh-80px)/5.5)] 
  py-2
  my-2

`;

export default Sidebar;
