import React from "react";
import Image from "next/image";
import {NextPage, GetStaticProps,InferGetStaticPropsType } from "next";
import DownloadIcon from "../assets/svgs/download.svg";
import DownArrow from "../assets/svgs/down-arrow.svg";
import UploadIcon from "../assets/svgs/reveneu.svg";
import WatchListIcon from "../assets/svgs/watchlist.svg";
import ForwardIcon from "../assets/svgs/forward.svg";
import PreviousIcon from "../assets/svgs/previous.svg";
import TopSellingImage from "../assets/svgs/selling.svg";
import balanceImage from "../assets/svgs/balance.svg";
import NextIcon from "../assets/svgs/next.svg";
import PropertyOverview from "@/components/PropertyOverview";
import CustomerOverview from "./CustomerOverview";

import axios from "axios"
import { useQuery } from "react-query";
import Chart from "./Chart";

// const  getDashboardData = async () => {
//  await axios.get("https://dev.matadortrust.com/v2/developers/dashboard_data").then((res) => console.log(res.data.data) )
//  console.log (getDashboardData, "jj")
  
// } 

// const DashboardData:NextPage = ()

function Overview({dashboardData}) {
  // const  {
  //   data:dashboardData
  // } = useQuery(['dashboardDatas'], () => {
  //   return axios.get("https://dev.matadortrust.com/v2/developers/dashboard_data").then(({ data }) => data)
  // })
  // // const {data:dashboardData} = useQuery(() => getDashboardData())
  // console.log(dashboardData,"my data")
  return (
    <>
        <div className="px-4 py-4 transition-all lg:px-10 lg:py-6 ">
      <div className="md:flex gap-x-6 mb-4">
        <div className="w-full md:w-3/5 shadow-lg p-4 rounded-xl">
          <div className="flex justify-between items-center mb-3">
            <div className="flex flex-col gap-y-2">
              <div className="font-semibold text-xl text-[#191919]">
                Overview
              </div>
              <div className="text-xs font-normal">
                Showing overview Jan 2022 - Sep 2022
              </div>
            </div>
            <div>
              <div className="p-3 flex gap-x-2 items-center rounded-xl border border-[#4545FE] cursor-pointer">
                <Image src={DownloadIcon} alt="download-icon" />
                <div className="text-[#4545FE]">Download Report</div>
                <Image src={DownArrow} alt="down-arrow-icon" />
              </div>
            </div>
          </div>
          <div className="flex gap-x-10 items-center justify-end mb-4">
            <button className="text-[#606060] text-xs font-normal">
              View Method
            </button>
            <button className="text-sm font-semibold text-[#3D3D3D] bg-[#F5F5F5] rounded-lg p-2">
              Monthly
            </button>
            <button className="text-[#606060] text-xs font-normal">
              Yearly
            </button>
          </div>
          <hr />
          <div className="md:flex gap-x-2 items-center mt-4">
            <div className="w-full md:w-1/2">
              <Chart />
            </div>
            <div className="w-full md:w-1/2">
              <div className=" md:flex  gap-x-4 mb-4 ">
                <div className="rounded-xl border flex flex-col justify-center border-[#E4E4E4] p-2">
                  <div className="mb-2 text-[#4545FE] font-semibold text-lg">
                  ₦{dashboardData?.wallet.total}
                  {/* <span className="text-[#E4E4E4]">.00</span> */}
                  </div>
                  <div className="flex gap-x-2 items-center ">
                    <div className="font-medium text-xs">Balance</div>
                    <div className="flex gap-x-2 items-center">
                      <Image src={UploadIcon} alt="down-arrow-icon" />
                      <div>
                        <span className="text-[#12D8A0] text-xs font-normal">
                        {dashboardData?.wallet.graph_data}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rounded-xl border flex flex-col justify-center border-[#E4E4E4] p-2">
                  <div className="mb-2 text-[₦ 800,000,000.00] font-semibold text-lg">
                  ₦{dashboardData?.deposits.total}
                  {/* <span className="text-[#E4E4E4]">.00</span> */}
                  </div>
                  <div className="flex gap-x-2 items-center ">
                    <div className="font-medium text-xs">Revenue</div>
                    <div className="flex gap-x-2 items-center">
                      <Image src={UploadIcon} alt="down-arrow-icon" />
                      <div>
                        <span className="text-[₦ 800,000,000.00] text-xs font-normal">
                          2.5%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:flex gap-x-4 ">
                <div className="rounded-xl border flex flex-col justify-center border-[#E4E4E4] p-2">
                  <div className=" mb-2 text-[#FF6A6A] font-semibold text-lg">
                  ₦{dashboardData?.withdrawals.total}
                  {/* <span className="text-[#E4E4E4]">.00</span> */}
                  </div>
                  <div className="flex gap-x-2 items-center ">
                    <div className="font-medium text-xs">Withdrawal</div>
                    <div className="flex gap-x-2 items-center">
                      <Image src={UploadIcon} alt="down-arrow-icon" />
                      <div>
                        <span className="text-[#FF6A6A] text-xs font-normal">
                          0.5%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rounded-xl border flex flex-col justify-center border-[#E4E4E4] p-2">
                  <div className="mb-2 text-[#4545FE] font-semibold text-lg">
                    ₦120,000,000<span className="text-[#E4E4E4]">.00</span>
                  </div>
                  <div className="flex gap-x-2 items-center ">
                    <div className="font-medium text-xs">Balance</div>
                    <div className="flex gap-x-2 items-center">
                      <Image src={UploadIcon} alt="down-arrow-icon" />
                      <div>
                        <span className="text-[#12D8A0] text-xs font-normal">
                          2.5%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="w-full md:w-2/5">
          <PropertyOverview TotalProjects={dashboardData?.total_project
} available={dashboardData?.available_projects
} soldout={dashboardData?.sold_out
} />
          <CustomerOverview active={dashboardData?.total_active_users} inactive={dashboardData?.total_inactive_users} Totalnew={dashboardData?.total_new_user} Totalusers={dashboardData?.total_users}
 />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="rounded-2xl border shadow-lg p-4 w-full">
          <h4 className="text-lg font-semibold text-[#191919]">
            Listing Overview
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="">
              <h5 className="font-normal text-xs text-[#191919] mb-2">
                Most viewed
              </h5>
              <hr />
              <div className="flex items-center gap-x-4 p-2">
                <div className="w-[67px] h-[68px] rounded-xl border border-[#4545FE] ">
                <Image
          src={dashboardData?.most_viewed.project.project_image}
         width="67"
         height="68"
         alt="image"
        />
                </div>
                <div className="font-semibold text-sm text-[#191919]">
                  {dashboardData?.most_viewed.project.name}

                </div>
              </div>
            </div>
            <div className="">
              <h5 className="font-normal text-xs text-[#191919] mb-2">
                Most shared
              </h5>
              <hr />
              <div className="flex items-center gap-x-4 p-2">
                <div className="w-[67px] h-[68px] rounded-xl border border-[#4545FE]">
                <Image
          src={dashboardData?.most_shared.project.project_image}
         width="67"
         height="68"
         alt="image"
        />
                </div>
                <div className="font-semibold text-sm text-[#191919] ">
                {dashboardData?.most_shared.project.name}
                </div>
              </div>
            </div>
            <div className="">
              <h5 className="font-normal text-xs text-[#191919] mb-2">
                Most watchlisted
              </h5>
              <div className="flex items-center gap-x-4 p-2">
                <div className="w-[67px] h-[68px] rounded-xl border border-[#4545FE]">
                <Image
          src={dashboardData?.most_watchlisted.project.project_image}
         width="67"
         height="68"
         alt="image"
        />
                </div>
                <div className="font-semibold text-sm text-[#191919]">
                {dashboardData?.most_watchlisted.project.name}
                </div>
              </div>
            </div>
            <div className="">
              <div className="rounded-xl border p-2 flex justify-between items-center">
                <div className="">
                  <div className="mb-2 text-2xl font-normal leading-8">{dashboardData?.most_watchlisted.total_projects_on_watchlist}</div>
                  <div className="">Number of watchlists</div>
                </div>
                <div>
                  {" "}
                  <Image src={WatchListIcon} alt="download-icon" />
                </div>
              </div>
            </div>
          </div>
          {/* <div className="w-full md:w-1/2">
                <h5></h5>
            </div>
            <div className="w-full md:w-1/2"></div> */}
        </div>
        <div className="rounded-2xl border shadow-lg p-4 md:max-w-md">
          <div className="flex justify-between items-center mb-6 mt-2">
            <div>
              <div className="mb-2 text-[#191919] font-semibold text-3xl">
                ₦ 912,000,000<span className="text-[#E4E4E4]">.00</span>
              </div>
              <div className="text-sm text-[#606060] ">
                Total Outstanding Balance
              </div>
            </div>
            <div className="flex gap-2 items-center cursor-pointer">
              <div className="text-[#4545FE] text-xs font-medium">View all</div>
              <Image src={ForwardIcon} alt="forward-icon" />
            </div>
          </div>
          <div className="flex gap-x-6 ">
            <div className="w-[154px] h-[155px] rounded-lg bg-blue-200">
              <Image src={balanceImage} alt="down-arrow-icon" />
            </div>
            <div>
              <div className="mb-6">
                <div className="font-semibold text-base text-[#191919]">
                  Plaza Decan
                </div>
                <div className="text-xs text-[#606060] ">Construed</div>
              </div>
              <div className="mb-2">
                <div className=" mb-2 text-[#FF6A6A] font-semibold text-xl">
                  ₦12,000,000<span className="text-[#E4E4E4]">.00</span>
                </div>
                <div className="text-xs text-[#606060] ">
                  Outstanding Balance
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-x-2 justify-end">
            <div className="text-[#606060] text-sm">1/5</div>
            <div className="h-8 w-8 rounded-full bg-gray-300 flex justify-center items-center cursor-pointer">
              <Image
                src={PreviousIcon}
                alt="forward-icon"
                className="h-4 w-4"
              />
            </div>
            <div className="h-8 w-8 rounded-full bg-gray-300 flex justify-center items-center cursor-pointer">
              <Image src={NextIcon} alt="forward-icon" className="h-4 w-4" />
            </div>
          </div>
        </div>
        <div className="rounded-2xl border shadow-lg p-4 md:max-w-md">
          <h1 className="font-semibold text-base text-[#12D8A0] mb-2">
            Top Selling
          </h1>
          <div className="mb-4">
            <div className="text-[#191919] font-semibold text-3xl">
              ₦ 86,000,000<span className="text-[#E4E4E4]">.00</span>
            </div>
            <div className="text-sm text-[#606060] ">Property Value</div>
          </div>
          <div className="flex gap-x-6 ">
            <div className="w-[154px] h-[155px] rounded-lg">
              <Image src={TopSellingImage} alt="down-arrow-icon" />
            </div>
            <div>
              <div className="mb-2">
                <div className="font-semibold text-base text-[#191919]">
                  Astird 2.0
                </div>
                <div className="text-xs text-[#606060] ">Construed</div>
              </div>
              <div className="mb-2">
                <div className="text-[#4545FE] font-semibold text-base">
                  2/10
                </div>
                <div className="text-xs text-[#606060] ">Units sold</div>
              </div>
              <div className="">
                <div className="text-[#12D8A0] font-semibold text-base">
                  20k/80k
                </div>
                <div className="text-xs text-[#606060] ">
                  Fractions available
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* {dashboardData.map((item) => {
      return (
    

      )
    })} */}
    </>
    
  );
}

export default Overview;
