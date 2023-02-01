import React from "react";
import { navLinks } from "../utils/data";
import Link from "next/link";
import Image from "next/image";
import SearchIcon from "../assets/svgs/Search.svg";

function NavMenu(props) {
  return (
    <div>
      <div className=" mt-24 flex gap-x-16 items-center p-6 shadow-lg">
        {navLinks.map((link, index) => {
          return (
            <div key={index} className="">
              <div className=" text-black cursor-pointer  hover:rounded-lg ">
                {/* <Link href={link.path}> */}
                <div className="flex gap-2 items-center ">
                  <Image
                    src={link.icon}
                    alt="veerge-logo"
                    width="100px"
                    height="100px"
                    responsive="true"
                  />
                  <div key={index} className="text-sm font-normal leading-5">
                    {link.name}
                  </div>
                </div>
                {/* </Link> */}
              </div>
            </div>
          );
        })}
        <div>
          <div class="relative mr-6 my-2 flex justify-between bg-[#E4E4E4] rounded-lg w-[319px] border border-[#E4E4E4] ">
            <input
              type="search"
              className="  p-2   bg-[#E4E4E4] rounded-lg w-[319px] border border-[#E4E4E4] text-[#919191] focus:none"
              placeholder="Search... properties, customers here"
            />
            <div class="absolute  ">{/* <Image src={SearchIcon} /> */}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavMenu;
