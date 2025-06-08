import React from "react";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";

function Content() {
  return (
    <div className="flex flex-col md:flex-row max-w-full mt-10 mx-auto">
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default Content;
