import React from "react";
import Image from "next/image";
import {
  CalendarCheck2,
  Flag,
  Languages,
  MapPinHouse,
  Tag,
} from "lucide-react";

const OverviewInformations = ({ hidden }) => {
  return (
    <div className={`flex flex-col ${hidden ? "hidden" : "block"}`}>
      <div className="flex items-center text-base md:hidden">
        <p className="font-bold text-orange-400 text-3xl">|</p>
        <span className="font-bold text-2xl ml-2"> Overview information</span>
      </div>
      <div className="flex max-sm:mt-7">
        <div className="flex flex-col space-y-5 flex-grow max-sm:w-full">
          <div className="flex items-center text-base">
            <Tag />
            <p className="ml-4">First name</p>
          </div>
          <div className="flex items-center text-base">
            <Tag />
            <p className="ml-4">Last name</p>
          </div>
          <div className="flex items-center text-base">
            <CalendarCheck2 />
            <p className="ml-4">Year of birth</p>
          </div>
          <div className="flex items-center text-base">
            <Languages />
            <p className="ml-4">Language</p>
          </div>
          <div className="flex items-center text-base">
            <Flag />
            <p className="ml-4">Nationality</p>
          </div>
          <div className="flex items-center text-base">
            <MapPinHouse />
            <p className="ml-4">Address</p>
          </div>
        </div>

        <div className="flex flex-col space-y-5 md:ml-4 flex-grow max-sm:w-full">
          {/* <div className="flex items-center text-base font-bold max-sm:mt-5">
          <p className="ml-4"></p>
        </div> */}
          <div className="flex items-center text-base font-bold">
            <p className="ml-4">Phạm Anh</p>
          </div>
          <div className="flex items-center text-base font-bold">
            <p className="ml-4">Dũng</p>
          </div>
          <div className="flex items-center text-base font-bold">
            <p className="ml-4">2003</p>
          </div>
          <div className="flex items-center text-base font-bold">
            <p className="ml-4">Vietnamese, English</p>
          </div>
          <div className="flex items-center text-base font-bold">
            <p className="ml-4">Viet Nam</p>
          </div>
          <div className="flex items-center text-base font-bold">
            <p className="ml-4">Duy Tien, Ha Nam, Viet Nam</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewInformations;
