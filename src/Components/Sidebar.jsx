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
  const { setSelectedCategory, setSelectedTrend } = useCategory();
  const [selectedFilter, setSelectedFilter] = useState("category");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category.toLowerCase());
  };

  const handleTrendClick = (trend) => {
    setSelectedTrend(trend);
    setSelectedCategory(null);
  };

  const renderContent = () => {
    if (selectedFilter === "category") {
      return (
        <>
          <div
            onClick={() => handleCategoryClick("sustainability")}
            className="min-w-[200px] md:min-w-full flex justify-center items-center h-20 mt-3 bg-[#762a83]  hover:shadow-[0_4px_15px_rgba(251,191,36,0.5)] hover:bg-[#762a83] cursor-pointer transition-all duration-100 ease-in-out mx-2 md:mx-0"
          >
            <GrPowerCycle style={{ fontSize: "40px", color: "#ffffff" }} />
            <span className="text-white text-xl ml-2">Sustainability</span>
          </div>
          <div
            onClick={() => handleCategoryClick("equity")}
            className="min-w-[200px] md:min-w-full flex justify-center items-center h-20 mt-3 bg-[#9970ab] hover:shadow-[0_4px_15px_rgba(251,191,36,0.5)] hover:bg-[#9970ab] cursor-pointer transition-all duration-100 ease-in-out mx-2 md:mx-0"
          >
            <BarChartOutlined style={{ fontSize: "40px", color: "#000000" }} />
            <span className="text-black text-xl ml-2">Equity</span>
          </div>
          <div
            onClick={() => handleCategoryClick("resilience")}
            className="min-w-[200px] md:min-w-full flex justify-center items-center h-20 mt-3 bg-[#c2a5cf] hover:shadow-[0_4px_15px_rgba(251,191,36,0.5)] hover:bg-[#c2a5cf] cursor-pointer transition-all duration-100 ease-in-out mx-2 md:mx-0"
          >
            <SafetyOutlined style={{ fontSize: "40px", color: "#000000" }} />
            <span className="text-black text-xl ml-2">Resilience</span>
          </div>
          <div
            onClick={() => handleCategoryClick("environment")}
            className="min-w-[200px] md:min-w-full flex justify-center items-center h-20 mt-3 bg-[#FFFFA6] hover:shadow-[0_4px_15px_rgba(251,191,36,0.5)] hover:bg-[#FFFFA6] cursor-pointer transition-all duration-100 ease-in-out mx-2 md:mx-0"
          >
            <EnvironmentOutlined
              style={{ fontSize: "40px", color: "#000000" }}
            />
            <span className="text-black text-xl ml-2">Environment</span>
          </div>
          <div
            onClick={() => handleCategoryClick("community")}
            className="min-w-[200px] md:min-w-full flex justify-center items-center h-20 mt-3 bg-[#a6dba0] hover:shadow-[0_4px_15px_rgba(251,191,36,0.5)] hover:bg-[#a6dba0] cursor-pointer transition-all duration-100 ease-in-out mx-2 md:mx-0"
          >
            <TeamOutlined style={{ fontSize: "40px", color: "#000000" }} />
            <span className="text-black text-xl ml-2">Community</span>
          </div>
          <div
            onClick={() => handleCategoryClick("transportation")}
            className="min-w-[200px] md:min-w-full flex justify-center items-center h-20 mt-3 bg-[#5aae61] hover:shadow-[0_4px_15px_rgba(251,191,36,0.5)] hover:bg-[#5aae61] cursor-pointer transition-all duration-100 ease-in-out mx-2 md:mx-0"
          >
            <CarOutlined style={{ fontSize: "40px", color: "#000000" }} />
            <span className="text-black text-xl ml-2">Transportation</span>
          </div>
          <div
            onClick={() => handleCategoryClick("economy")}
            className="min-w-[200px] md:min-w-full flex justify-center items-center h-20 mt-3 bg-[#1b7837] hover:shadow-[0_4px_15px_rgba(251,191,36,0.5)] hover:bg-[#1b7837] cursor-pointer transition-all duration-100 ease-in-out mx-2 md:mx-0"
          >
            <BankOutlined style={{ fontSize: "40px", color: "#ffffff" }} />
            <span className="text-white text-xl ml-2">Economy</span>
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
          onClick={() => handleTrendClick(null)}
          className="min-w-[200px] md:min-w-full flex justify-center items-center h-20 mt-3 bg-gray-700 hover:shadow-[0_4px_15px_rgba(251,191,36,0.5)] hover:bg-gray-700 cursor-pointer"
        >
          <span className="text-white text-xl">Show All</span>
        </div>
        <div
          onClick={() => handleTrendClick("very-good")}
          className="min-w-[200px] md:min-w-full flex justify-center items-center h-20 mt-3 bg-gray-700 hover:bg-gray-800 cursor-pointer"
        >
          <SmileOutlined style={{ fontSize: "40px", color: "#ffffff" }} />
          <span className="text-white text-xl ml-2">Very Good</span>
        </div>
        <div
          onClick={() => handleTrendClick("good")}
          className="min-w-[200px] md:min-w-full flex justify-center items-center h-20 mt-3 bg-gray-700 hover:bg-gray-800 cursor-pointer"
        >
          <LikeOutlined style={{ fontSize: "40px", color: "#ffffff" }} />
          <span className="text-white text-xl ml-2">Good</span>
        </div>
        <div
          onClick={() => handleTrendClick("neutral")}
          className="min-w-[200px] md:min-w-full flex justify-center items-center h-20 mt-3 bg-gray-700 hover:bg-gray-800 cursor-pointer"
        >
          <MehOutlined style={{ fontSize: "40px", color: "#ffffff" }} />
          <span className="text-white text-xl ml-2">Neutral</span>
        </div>
        <div
          onClick={() => handleTrendClick("not-good")}
          className="min-w-[200px] md:min-w-full flex justify-center items-center h-20 mt-3 bg-gray-700 hover:bg-gray-800 cursor-pointer"
        >
          <FrownOutlined style={{ fontSize: "40px", color: "#ffffff" }} />
          <span className="text-white text-xl ml-2">Not Good</span>
        </div>
        <div
          onClick={() => handleTrendClick("poor")}
          className="min-w-[200px] md:min-w-full flex justify-center items-center h-20 mt-3 bg-gray-700 hover:bg-gray-800 cursor-pointer"
        >
          <DislikeOutlined style={{ fontSize: "40px", color: "#ffffff" }} />
          <span className="text-white text-xl ml-2">Poor</span>
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
    <div className="w-full md:w-[20%] pb-3 md:pr-3 overflow-x-auto">
      <div className="flex flex-col">
        <div className="text-gray-600 w-full h-full">
          <div className="w-full h-20 flex px-1 bg-gray-800 items-center justify-center">
            <div className="flex items-center">
              <span className="font-semibold mr-1 text-gray-100">
                Filter by:
              </span>
              <Select
                defaultValue="category"
                style={{ width: 150 }}
                size="large"
                className="text-transparent"
                onChange={handleFilterChange}
              >
                <Option value="category">Category</Option>
                <Option value="trend">Trend</Option>
              </Select>
            </div>
          </div>
          <div className="flex flex-row md:flex-col overflow-x-auto whitespace-nowrap">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
