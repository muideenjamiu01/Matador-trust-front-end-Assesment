import React from "react";
import { navLinks } from "../utils/data";
import Link from "next/link";
import Image from "next/image";
import Logo from "../assets/svgs/logo.svg";
import infoCircle from "../assets/svgs/infoCircle.svg";
import AddLogo from "../assets/svgs/add.svg";
import Notification from "../assets/svgs/notification.svg";
import Speaker from "../assets/svgs/speaker.svg";
import Settings from "../assets/svgs/setting.svg";
import UpArrow from "../assets/svgs/up-arrow.svg";
import UserImage from "../assets/svgs/user-profile.svg";

export default function Header() {
  return (
    <header className="bg-[#191919]">
      <div className="flex items-center justify-center">
        <Image src={Logo} alt="veerge-logo" width="100px" height="100px" />
      </div>
      <div className="flex gap-6 items-center">
        <div className="flex gap-2 items-center">
          <div className="flex justify-center">
            {" "}
            <Image src={infoCircle} alt="infoCircle" />
          </div>
          <div className="text-[#CBCBCB]">Release Note</div>
        </div>
        <div className="flex gap-2 items-center rounded-xl bg-white p-2">
          <div className="flex justify-center">
            {" "}
            <Image src={AddLogo} alt="infoCircle" />
          </div>
          <div className="text-black font-normal text-sm ">New Listing</div>
        </div>
        <div className="flex gap-4 items-center">
          <Image src={Speaker} alt="veerge-logo" width="100px" height="100px" />

          <Image
            src={Notification}
            alt="veerge-logo"
            width="100px"
            height="100px"
          />
          <Image
            src={Settings}
            alt="veerge-logo"
            width="100px"
            height="100px"
          />
        </div>
        <div className="flex gap-4 items-center">
          <div
            className="h-8 w-8 rounded-full border-2 border-[
#4545FE] bg-gradient-to-b from-[#E3F3FF] to-[#99FFC9] "
          >
            {" "}
            <Image
              src={UserImage}
              alt="veerge-logo"
              width="100px"
              height="100px"
            />
          </div>
          <div className="text-white">Ahmed Ali</div>
          <Image src={UpArrow} alt="veerge-logo" width="100px" height="100px" />
        </div>
      </div>
    </header>
  );
}
