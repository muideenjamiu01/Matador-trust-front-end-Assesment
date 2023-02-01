import React from "react";
import Image from "next/image";
import HandIcon from "../assets/svgs/Hand.svg";
import DownArrow from "../assets/svgs/down-arrow.svg";

function Welcome() {
  return (
    <div>
      <div className="mt-6 flex justify-between items-center p-4">
        <div>
          <div className="flex gap-4 items-center">
            <Image
              src={HandIcon}
              alt="veerge-logo"
              width="100px"
              height="100px"
            />
            <div>
              <span className="font-semibold text-xl text-[#191919]">
                Hi Ahmed
              </span>
            </div>
          </div>
          <div className="mt-4 text-xs font-normal">
            Welcome to your Dashboard
          </div>
        </div>
        <div className="rounded-2xl p-4 flex gap-4 items-center border border-[#E4E4E4]">
          <div className="text-[#4545FE] text-sm font-normal">
            Jan 2022 - Sep 2022
          </div>
          <Image src={DownArrow} alt="down-arrow" />
        </div>
      </div>
    </div>
  );
}

export default Welcome;
