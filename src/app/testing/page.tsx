"use client";
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

interface ITestingProps {}

const Testing: React.FunctionComponent<ITestingProps> = (props) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      <nav
        id="navbar"
        className="fixed z-50 flex justify-between bg-[#454545] items-center h-[100px] w-full shadow-lg top-0 py-[10rem] md:px-[8rem]"
      >
        <img id="logo" src="logo.png" className="md:mx-0 ml-10" />
        <RxHamburgerMenu
          size={40}
          onClick={() => setOpenMenu(!openMenu)}
          className="text-white cursor-pointer md:hidden"
        />
        <ul className="text-white md:flex hidden gap-[4rem] transition-opacity duration-300">
          <li className="relative">
            <a href="#" className="relative group">
              HOME
              <div className="absolute -bottom-3 left-0 w-0 h-[4px] bg-rainbow-gradient transition-all duration-300 group-hover:w-full"></div>
            </a>
          </li>
          <li className="relative">
            <a href="#description1" className="relative group">
              SKILLS
              <div className="absolute -bottom-3 left-0 w-0 h-[4px] bg-rainbow-gradient transition-all duration-300 group-hover:w-full"></div>
            </a>
          </li>
          <li className="relative">
            <a href="#description2" className="relative group">
              PORTFOLIO
              <div className="absolute -bottom-3 left-0 w-0 h-[4px] bg-rainbow-gradient transition-all duration-300 group-hover:w-full"></div>
            </a>
          </li>
          <li className="relative">
            <a href="#description3" className="relative group">
              RESUME
              <div className="absolute -bottom-3 left-0 w-0 h-[4px] bg-rainbow-gradient transition-all duration-300 group-hover:w-full"></div>
            </a>
          </li>
          <li className="relative">
            <a href="#description4" className="relative group">
              CONTACT
              <div className="absolute -bottom-3 left-0 w-0 h-[3px] bg-rainbow-gradient transition-all duration-300 group-hover:w-[85px]"></div>
            </a>
          </li>
        </ul>
        <button className="text-white button bg-[#f40841] rounded-3xl w-[8rem] h-[2.5rem] md:block hidden">
          Lets Talk
        </button>
        {openMenu && (
          <>
            <div className="w-full  text-white text-center absolute top-[96px] z-[20] left-0 md:hidden">
              <ul className="flex flex-col align-middle">
                <li className="border-[#242424] bg-black py-4 border-b hover:bg-white hover:text-black">
                  <a href="#" onClick={() => setOpenMenu(false)}>
                    HOME
                  </a>
                </li>
                <li className="border-[#242424] bg-black py-4 border-b hover:bg-white hover:text-black">
                  <a href="#description1" onClick={() => setOpenMenu(false)}>
                    SKILLS
                  </a>
                </li>
                <li className="border-[#242424] bg-black py-4 border-b hover:bg-white hover:text-black">
                  <a href="#description2" onClick={() => setOpenMenu(false)}>
                    PORTFOLIO
                  </a>
                </li>
                <li className="border-[#242424] bg-black py-4 border-b hover:bg-white hover:text-black">
                  <a href="#description3" onClick={() => setOpenMenu(false)}>
                    RESUME
                  </a>
                </li>
                <li className="border-[#242424] bg-black py-4 border-b hover:bg-white hover:text-black">
                  <a href="#description4" onClick={() => setOpenMenu(false)}>
                    CONTACT
                  </a>
                </li>
              </ul>
            </div>
          </>
        )}
      </nav>
      {openMenu && (
        <div className="fixed md:hidden left-0 top-0 z-[10] h-full w-full bg-black bg-opacity-50 backdrop-blur-sm backdrop-filter"></div>
      )}
    </>
  );
};

export default Testing;
