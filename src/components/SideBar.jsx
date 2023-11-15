import React, { useState } from "react";
import duck from "../assets/images/svg/duckImage.svg";
import search from "../assets/images/svg/searchIcon.svg";
import home from "../assets/images/svg/homeIcon.svg";
import progress from "../assets/images/svg/progressIcon.svg";
import notification from "../assets/images/svg/bellIcon.svg";
import cutIcon from "../assets/images/svg/cutIcon.svg";
import Inventory from "../assets/images/svg/lastIcon.svg";
import logOut from "../assets/images/svg/logOutIcon.svg";
const SideBar = () => {
  const [show, setShow] = useState(false);
  const [light, setLight] = useState(false);
  return (
    <>
      <div className=" bg-sky-300">
        <div className="flex overflow-hidden relative">
          <div
            className={`min-h-screen flex flex-col py-6  transition-all ease-out duration-300 overflow-hidden justify-between max-w-[300px]  ${
              show ? "" : "ms-[-300px]"
            } ${light ? "bg-white" : "bg-black"}`}
          >
            <div className="flex flex-col px-6 gap-10 mt-10">
              <div className="flex items-center ">
                <img
                  src={duck}
                  alt="duck"
                  height={56}
                  width={56}
                  className="min-w-[56px] h-[56px] cursor-pointer"
                />
                <div
                  className="ps-3 transition-all ease-out duration-200 inline"
                  onClick={() => setShow(!show)}
                >
                  <p
                    className={`font-semibold whitespace-nowrap text-[16px] cursor-pointer ${
                      light ? "text-black" : "text-white"
                    }`}
                  >
                    Duck UI
                  </p>
                  <p className="text-[#C0BFBD] cursor-pointer">
                    Duckui@demo.com
                  </p>
                </div>
              </div>
              {/* search */}
              <div className="flex items-center">
                <div className="flex items-center justify-center p-4 bg-[#1F1F22] h-[56px] min-w-[56px] rounded-[16px]">
                  <img
                    src={search}
                    alt="search"
                    height={24}
                    width={24}
                    className="w-[24px] h-[24px] cursor-pointer"
                    onClick={() => setShow(!show)}
                  />
                  <div className="ms-3 transition-all ease-out duration-200 bg-[#1F1F22] me-4 ">
                    <input
                      type="text"
                      placeholder="Search"
                      className="bg-transparent w-full"
                    />
                  </div>
                </div>
              </div>
              {/* home */}
              <div className="flex items-center ps-4">
                <img
                  src={home}
                  alt="home"
                  height={24}
                  width={24}
                  className="min-w-[24px] h-[24px] cursor-pointer"
                  onClick={() => setShow(!show)}
                />

                <p
                  className={`font-semibold whitespace-nowrap text-[16px] cursor-pointer ps-3 ${
                    light ? "text-black" : "text-white"
                  }`}
                  onClick={() => setShow(!show)}
                >
                  Dashboard
                </p>
              </div>
              {/* progress */}
              <div className="flex items-center ps-4">
                <img
                  src={progress}
                  alt="progress"
                  height={24}
                  width={24}
                  className="min-w-[24px] h-[24px] cursor-pointer"
                  onClick={() => setShow(!show)}
                />
                <p
                  className={`font-semibold whitespace-nowrap text-[16px] cursor-pointer ps-3 ${
                    light ? "text-black" : "text-white"
                  }`}
                  onClick={() => setShow(!show)}
                >
                  Revenue
                </p>
              </div>
              {/* notification */}
              <div className="flex items-center ps-4">
                <img
                  src={notification}
                  alt="notification"
                  height={24}
                  width={24}
                  className="min-w-[24px] h-[24px] cursor-pointer"
                  onClick={() => setShow(!show)}
                />

                <p
                  className={`font-semibold whitespace-nowrap text-[16px] cursor-pointer ps-3 ${
                    light ? "text-black" : "text-white"
                  }`}
                  onClick={() => setShow(!show)}
                >
                  Notification
                </p>
              </div>
              {/* cutIcon */}
              <div className="flex items-center ps-4">
                <img
                  src={cutIcon}
                  alt="cutIcon"
                  height={24}
                  width={24}
                  className="min-w-[24px] h-[24px] cursor-pointer"
                  onClick={() => setShow(!show)}
                />
                <p
                  className={`font-semibold whitespace-nowrap text-[16px] cursor-pointer ps-3 ${
                    light ? "text-black" : "text-white"
                  }`}
                  onClick={() => setShow(!show)}
                >
                  Analytics
                </p>
              </div>
              {/* last */}
              <div className="flex items-center ps-4">
                <img
                  src={Inventory}
                  alt="Inventory"
                  height={24}
                  width={24}
                  className="min-w-[24px] h-[24px] cursor-pointer"
                  onClick={() => setShow(!show)}
                />

                <p
                  className={`font-semibold whitespace-nowrap text-[16px] cursor-pointer ps-3 ${
                    light ? "text-black" : "text-white"
                  }`}
                  onClick={() => setShow(!show)}
                >
                  Inventory
                </p>
              </div>
            </div>
            <div className="flex flex-col px-6 gap-10">
              {/* logout */}
              <div className="flex items-center ps-4">
                <img
                  src={logOut}
                  alt="logOut"
                  height={24}
                  width={24}
                  className="min-w-[24px] h-[24px] cursor-pointer"
                  onClick={() => setShow(!show)}
                />
                <p
                  className={`font-semibold whitespace-nowrap text-[16px] cursor-pointer ps-3 ${
                    light ? "text-black" : "text-white"
                  }`}
                  onClick={() => setShow(!show)}
                >
                  Log Out
                </p>
              </div>
              <button
                className={`${light ? "bg-black text-white" : "bg-white text-black"}`}
                onClick={() => setLight(!light)}
              >
                {light ? "Dark" : "Light"} mode
              </button>
            </div>
          </div>
          <div
            className={` cursor-pointer flex flex-col justify-center items-center h-[30px] w-[30px] absolute start-0 top-0 z-50 ms-5 mt-5 ${
              show ? "cross" : ""
            }`}
            onClick={() => setShow(!show)}
          >
            <div
              className={`h-[3px] w-[25px] relative z-10 my-[3px] line ${
                light ? "bg-black" : "bg-white"
              }`}
            ></div>
            <div
              className={`h-[3px] w-[25px] relative z-10 my-[3px] line ${
                light ? "bg-black" : "bg-white"
              }`}
            ></div>
            <div
              className={`h-[3px] w-[25px] relative z-10 my-[3px] line ${
                light ? "bg-black" : "bg-white"
              }`}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SideBar;