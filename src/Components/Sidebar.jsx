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
  const [selectedFilter, setSelectedFilter] = useState("category");
  const { setSelectedCategory } = useCategory();

  const handleCategoryClick = (category) => {
    setSelectedCategory(category.toLowerCase());
  };

  const renderContent = () => {
    if (selectedFilter === "category") {
      return (
        <>
          <div
            onClick={() => setSelectedCategory(null)}
            className="min-w-[200px] md:min-w-full flex justify-center items-center h-20 mt-3 bg-gray-700 hover:shadow-2xl hover:bg-gray-800 cursor-pointer transition-all duration-500 ease-in-out mx-2 md:mx-0"
          >
            <span className="text-white text-xl">Show All</span>
          </div>
          <div
            onClick={() => handleCategoryClick("sustainability")}
            className="min-w-[200px] md:min-w-full flex justify-center items-center h-20 mt-3 bg-emerald-900 hover:shadow-2xl hover:bg-emerald-950 cursor-pointer transition-all duration-500 ease-in-out mx-2 md:mx-0"
          >
            <GrPowerCycle style={{ fontSize: "40px", color: "#ffffff" }} />
            <span className="text-white text-xl ml-2">Sustainability</span>
          </div>
          <div
            onClick={() => handleCategoryClick("equity")}
            className="min-w-[200px] md:min-w-full flex justify-center items-center h-20 mt-3 bg-blue-900 hover:shadow-2xl hover:bg-blue-950 cursor-pointer transition-all duration-500 ease-in-out mx-2 md:mx-0"
          >
            <BarChartOutlined style={{ fontSize: "40px", color: "#ffffff" }} />
            <span className="text-white text-xl ml-2">Equity</span>
          </div>
          <div
            onClick={() => handleCategoryClick("resilience")}
            className="min-w-[200px] md:min-w-full flex justify-center items-center h-20 mt-3 bg-purple-900 hover:shadow-2xl hover:bg-purple-950 cursor-pointer transition-all duration-500 ease-in-out mx-2 md:mx-0"
          >
            <SafetyOutlined style={{ fontSize: "40px", color: "#ffffff" }} />
            <span className="text-white text-xl ml-2">Resilience</span>
          </div>
          <div
            onClick={() => handleCategoryClick("environment")}
            className="min-w-[200px] md:min-w-full flex justify-center items-center h-20 mt-3 bg-green-900 hover:shadow-2xl hover:bg-green-950 cursor-pointer transition-all duration-500 ease-in-out mx-2 md:mx-0"
          >
            <EnvironmentOutlined
              style={{ fontSize: "40px", color: "#ffffff" }}
            />
            <span className="text-white text-xl ml-2">Environment</span>
          </div>
          <div
            onClick={() => handleCategoryClick("community")}
            className="min-w-[200px] md:min-w-full flex justify-center items-center h-20 mt-3 bg-orange-900 hover:shadow-2xl hover:bg-orange-950 cursor-pointer transition-all duration-500 ease-in-out mx-2 md:mx-0"
          >
            <TeamOutlined style={{ fontSize: "40px", color: "#ffffff" }} />
            <span className="text-white text-xl ml-2">Community</span>
          </div>
          <div
            onClick={() => handleCategoryClick("transportation")}
            className="min-w-[200px] md:min-w-full flex justify-center items-center h-20 mt-3 bg-cyan-900 hover:shadow-2xl hover:bg-cyan-950 cursor-pointer transition-all duration-500 ease-in-out mx-2 md:mx-0"
          >
            <CarOutlined style={{ fontSize: "40px", color: "#ffffff" }} />
            <span className="text-white text-xl ml-2">Transportation</span>
          </div>
          <div
            onClick={() => handleCategoryClick("economy")}
            className="min-w-[200px] md:min-w-full flex justify-center items-center h-20 mt-3 bg-yellow-900 hover:shadow-2xl hover:bg-yellow-950 cursor-pointer transition-all duration-500 ease-in-out mx-2 md:mx-0"
          >
            <BankOutlined style={{ fontSize: "40px", color: "#ffffff" }} />
            <span className="text-white text-xl ml-2">Economy</span>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="min-w-[200px] md:min-w-full flex justify-center items-center h-20 mt-3 bg-gray-700 hover:shadow-2xl hover:bg-gray-800 cursor-pointer transition-all duration-500 ease-in-out mx-2 md:mx-0">
            <SmileOutlined style={{ fontSize: "40px", color: "#ffffff" }} />
            <span className="text-white text-xl ml-2">Very Good</span>
          </div>
          <div className="min-w-[200px] md:min-w-full flex justify-center items-center h-20 mt-3 bg-gray-700 hover:shadow-2xl hover:bg-gray-800 cursor-pointer transition-all duration-500 ease-in-out mx-2 md:mx-0">
            <LikeOutlined style={{ fontSize: "40px", color: "#ffffff" }} />
            <span className="text-white text-xl ml-2">Good</span>
          </div>
          <div className="min-w-[200px] md:min-w-full flex justify-center items-center h-20 mt-3 bg-gray-700 hover:shadow-2xl hover:bg-gray-800 cursor-pointer transition-all duration-500 ease-in-out mx-2 md:mx-0">
            <MehOutlined style={{ fontSize: "40px", color: "#ffffff" }} />
            <span className="text-white text-xl ml-2">Neutral</span>
          </div>
          <div className="min-w-[200px] md:min-w-full flex justify-center items-center h-20 mt-3 bg-gray-700 hover:shadow-2xl hover:bg-gray-800 cursor-pointer transition-all duration-500 ease-in-out mx-2 md:mx-0">
            <FrownOutlined style={{ fontSize: "40px", color: "#ffffff" }} />
            <span className="text-white text-xl ml-2">Not Good</span>
          </div>
          <div className="min-w-[200px] md:min-w-full flex justify-center items-center h-20 mt-3 bg-gray-700 hover:shadow-2xl hover:bg-gray-800 cursor-pointer transition-all duration-500 ease-in-out mx-2 md:mx-0">
            <DislikeOutlined style={{ fontSize: "40px", color: "#ffffff" }} />
            <span className="text-white text-xl ml-2">Poor</span>
          </div>
        </>
      );
    }
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
                onChange={(value) => setSelectedFilter(value)}
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
