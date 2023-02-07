import React from "react";
import Image from "next/image";
import HomeIcon from "../assets/svgs/home.svg";
import ForwardIcon from "../assets/svgs/forward.svg";



function PropertyOverview({TotalProjects,available, soldout}) {
  const PropertyData = [
    {
      value: TotalProjects,
      name: "Total",
    },
    {
      value: available,
      name: "Available",
    },
    {
      value: soldout,
      name: "Sold out",
    },
  ];
  
  return (
    <div>
      <div className="w-full mb-6 shadow-lg p-4 rounded-xl">
        <div className="flex items-center justify-between ">
          <div className="flex gap-4 items-center">
            <Image src={HomeIcon} alt="home-icon" />
            <div className="text-sm font-medium text-[#3D3D3D]">
              Property Overview
            </div>
          </div>
          <div className="flex gap-2 items-center cursor-pointer">
            <div className="text-[#4545FE] text-xs font-medium">View all</div>
            <Image src={ForwardIcon} alt="forward-icon" />
          </div>
        </div>

        <div className="flex items-center justify-center gap-x-8 mt-6">
          {PropertyData.map((data, index) => (
            <div
              className="rounded-xl border w-40 p-2 flex flex-col gap-y-4 justify-center items-center shadow-md"
              key={index}
            >
              <div className="text-2xl font-semibold text-[#191919]">
                {data.value}
              </div>
              <div className="font-normal text-sm text-[#606060] ">
                {data.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PropertyOverview;
