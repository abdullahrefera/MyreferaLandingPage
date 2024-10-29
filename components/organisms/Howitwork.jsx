// Howitwork.jsx
import React from 'react';
import Container from '../atoms/Container';
import VectorBox from '../molecules/VectorBox';
import { LuClipboardSignature } from "react-icons/lu";
import { FaStoreAlt } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { BsGraphUpArrow } from "react-icons/bs";
import { GrAchievement } from "react-icons/gr";
import { CiBadgeDollar } from "react-icons/ci";
import { FiUploadCloud } from "react-icons/fi";
import { PiRocketLaunchDuotone } from "react-icons/pi";
import WaitlistButton from '../atoms/WaitlistButton';


const Howitwork = ({ activeTab, onTabClick }) => {
  return (
    <div className='mt-[60px]' >
      <Container>
      <div className="w-full flex flex-wrap gap-2 justify-between pb-[38px] sm:pb-[76px] ">
            <span className='text-[12.3px] text-[#00296E] font-[500] bg-[#EFEFEF] rounded-[4.3px] py-1 px-3'>Get Unboxing Videos</span>
            <span className='text-[12.3px] text-[#00296E] font-[500] bg-[#EFEFEF] rounded-[4.3px] py-1 px-3'>Testimonials</span>
            <span className='text-[12.3px] text-[#00296E] font-[500] bg-[#EFEFEF] rounded-[4.3px] py-1 px-3'>Reviews</span>
            <span className='text-[12.3px] text-[#00296E] font-[500] bg-[#EFEFEF] rounded-[4.3px] py-1 px-3'>Fixed Fee Campaigns</span>
            <span className='text-[12.3px] text-[#00296E] font-[500] bg-[#EFEFEF] rounded-[4.3px] py-1 px-3'>Commission Based Campaigns</span>
            <span className='text-[12.3px] text-[#00296E] font-[500] bg-[#EFEFEF] rounded-[4.3px] py-1 px-3'>Subscription Based Campaigns</span>
            <span className='text-[12.3px] text-[#00296E] font-[500] bg-[#EFEFEF] rounded-[4.3px] py-1 px-3'>Detailed Analytics</span>
            <span className='text-[12.3px] text-[#00296E] font-[500] bg-[#EFEFEF] rounded-[4.3px] py-1 px-3'>Performance Tracking</span>
          </div>
        <div className="bg-[#EDF2FE] rounded-[40px] gap-4 flex w-[295px] mx-auto">
          {/* Tab Buttons */}
          <button
            className={`px-6 font-bold rounded-[40px] py-2 ${activeTab === "brand"
              ? "bg-[#0D0ED6] text-white"
              : "bg-transparent text-black"
              }`}
            onClick={() => onTabClick("brand")}
          >
            For Brands
          </button>
          <button
            className={`px-6 font-bold rounded-[40px] py-2 ${activeTab === "creator"
              ? "bg-[#0D0ED6] text-white"
              : "bg-transparent text-black"
              }`}
            onClick={() => onTabClick("creator")}
          >
            For Creators
          </button>
        </div>

        {/* Tab Content */}
        <div>
          {activeTab === "brand" ? (
            <div className='flex flex-col gap-[60px] pt-[30px] md:pt-[60px]' >
              {/* Content for Creators */}
              <h2 className='text-[24px] sm:text-[48px] font-[700] sm:max-w-[350px] sm:leading-[57px] text-center sm:text-left' >How it works...</h2>
              <div className='flex flex-col sm:flex-row w-[100%] justify-between gap-5'>
                <VectorBox icon={<LuClipboardSignature />} text="Create your campaign" />
                <VectorBox icon={<FaStoreAlt />} text="Post in MyRefera marketplace" />
                <VectorBox icon={<ImProfile />} text="Or handpick your preferred creator" />
                <VectorBox icon={<BsGraphUpArrow />} text="Track Campaign’s Performance" />
              </div>
            </div>
          ) : (
            <div>

            </div>
          )}
          {activeTab === "creator" ? (
            <div className='flex flex-col gap-[60px] pt-[30px] md:pt-[60px]' >
              {/* Content for Creators */}
              <h2 className='text-[24px] sm:text-[48px] font-[700] sm:max-w-[350px] sm:leading-[57px] text-center sm:text-left' >How it works...</h2>
              <div className='flex flex-col sm:flex-row w-[100%] justify-between gap-5'>
                <VectorBox icon={<CiBadgeDollar />} text="Create Your Offerings" />
                <VectorBox icon={<FiUploadCloud />} text="Post in MyRefera Marketplace" />
                <VectorBox icon={<PiRocketLaunchDuotone />} text="Or Pick Ready-to-Launch Campaigns in the Marketplace" />
                <VectorBox icon={<GrAchievement />} text="Show Off Your Results!" />
              </div>
            </div>
          ) : (
            <div>
              {/* Content for Brands */}

            </div>
          )}
        </div>

        {/* Bottom section */}

        <div className="sm:flex w-[100%] gap-16 sm:justify-center items-center py-20">
          <WaitlistButton />
        </div >

      </Container>
    </div>
  );
};

export default Howitwork;
