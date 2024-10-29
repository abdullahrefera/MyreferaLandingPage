import React from 'react';

const Navbuttons = ({ activeTab, onTabClick }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-5">
      <button
        className={`px-[6px] sm:px-[12px] block h-[40px] sm:h-auto sm:py-[10.5px] rounded-[7px] font-[600] sm:text-[24px] ${
          activeTab === "brand" ? "bg-[#0D0ED6] text-white" : "bg-[#EDF2FE] text-black"
        }`}
        onClick={() => onTabClick("brand")}
      >
        For Brands
      </button>
      <button
        className={`px-[6px] sm:px-[12px] block h-[40px] sm:h-auto sm:py-[10.5px] rounded-[7px] font-[600] sm:text-[24px] ${
          activeTab === "creator" ? "bg-[#0D0ED6] text-white" : "bg-[#EDF2FE] text-black"
        }`}
        onClick={() => onTabClick("creator")}
      >
        For Creators
      </button>
    </div>
  );
};

export default Navbuttons;
