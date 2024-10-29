"use client";

import React, { useState } from 'react';
import "@/app/globals.css"
import Howitwork from "@/components/organisms/Howitwork";
import Maximize from "@/components/organisms/Maximize";
import StickyNav from "@/components/organisms/StickyNav";
import Header from "@/components/templates/Header";

export default function Home() {

  const [activeTab, setActiveTab] = useState("brand");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="main relative ">
      <StickyNav />
      <Header activeTab={activeTab} onTabClick={handleTabClick} />
      <Maximize />
      <Howitwork activeTab={activeTab} onTabClick={handleTabClick} />
      <div className="sticky-box fixed bottom-16 right-10 rounded-[12px] py-[20px] hidden  px-[30px] w-[274px] h-[116px] sm:flex items-center justify-center ">
          <h4 className=' text-[16px] leading-[19.36px] text-center font-500 ' >This platform is currently invite-only to ensure we provide our clients with the best possible experience</h4>
        </div>
    </div>
  );
}
