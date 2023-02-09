import React from "react";
import { navLinks } from "../utils/data";
import Link from "next/link";
import Image from "next/image";
import SearchIcon from "../assets/svgs/Search.svg";

function NavMenu(props) {
  return (
    <div className="hidden md:block">
      <div className=" flex gap-x-16 items-center shadow-lg  px-4 py-3 transition-all lg:px-10 lg:py-3">
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

<div className="hidden sm:block relative bg-[#F5F5F5]  rounded-xl text-black grow max-w-xl">
          <div className="flex items-center justify-center rounded">
            <input
              className="bg-[#F5F5F5] rounded-xl border-none mr-1 focus:outline-none px-4 py-2 w-full"
              type="text"
              placeholder="Search... properties, customers here"
            />
            <button type="submit" className="absolute right-0 top-2 mt-1 mr-4">
              <svg
                className="h-4 w-4 fill-current"
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.796 12.9685L11.8749 10.0478C11.743 9.91602 11.5643 9.84279 11.3768 9.84279H10.8992C11.7079 8.80871 12.1884 7.50806 12.1884 6.09316C12.1884 2.72727 9.46065 0 6.0942 0C2.72774 0 0 2.72727 0 6.09316C0 9.45904 2.72774 12.1863 6.0942 12.1863C7.50934 12.1863 8.81021 11.7059 9.84447 10.8974V11.3749C9.84447 11.5623 9.91772 11.741 10.0496 11.8729L12.9707 14.7935C13.2461 15.0688 13.6914 15.0688 13.9639 14.7935L14.7931 13.9645C15.0685 13.6891 15.0685 13.2438 14.796 12.9685ZM6.0942 9.84279C4.02276 9.84279 2.34392 8.16717 2.34392 6.09316C2.34392 4.02207 4.01982 2.34352 6.0942 2.34352C8.16564 2.34352 9.84447 4.01914 9.84447 6.09316C9.84447 8.16424 8.16857 9.84279 6.0942 9.84279Z"
                  fill="#494949"
                />
              </svg>
            </button>
          </div>
        </div>
        
        {/* <div>
          <div className="relative mr-6 my-2 flex justify-between bg-[#E4E4E4] rounded-lg w-[319px] border border-[#E4E4E4] ">
            <input
              type="search"
              className="  p-2   bg-[#E4E4E4] rounded-lg w-[319px] border border-[#E4E4E4] text-[#919191] focus:none"
              placeholder="Search... properties, customers here"
            />
            <div className="absolute  "><Image src={SearchIcon} /></div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default NavMenu;
