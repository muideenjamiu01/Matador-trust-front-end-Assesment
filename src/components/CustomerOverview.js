import React from "react";
import Image from "next/image";
import HomeIcon from "../assets/svgs/home.svg";
import UserIcon from "../assets/svgs/user.svg";
import ForwardIcon from "../assets/svgs/forward.svg";





function CustomerOverview({active, inactive, Totalnew, Totalusers}) {
  const customerData = [
    {
      value: Totalusers,
      name: "Total",
    },
    {
      value: Totalnew,
      name: "New",
    },
    {
      value: active,
      name: "Active",
    },
    {
      value:inactive ,
      name: "Inactive",
    },
  ];
  

  return (
    <div className="w-full shadow-lg p-4 rounded-xl">
      <div>
        <div className="flex items-center justify-between">
          <div className="flex gap-4 items-center">
            <Image src={UserIcon} alt="user-icon" />
            <div className="text-sm font-medium text-[#3D3D3D]">
              Customers Overview
            </div>
          </div>
          <div className="flex gap-2 items-center cursor-pointer">
            <div className="text-[#4545FE] text-xs font-medium">View all</div>
            <Image src={ForwardIcon} alt="forward-icon" />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-x-8 mt-6">
        {customerData.map((data, index) => (
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
  );
}

export default CustomerOverview;
