"use client";

import React, { useState, useRef, MouseEvent } from "react";
import Wrapper from "../shared/Wrapper";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { TbBrandValorant, TbBrandFortnite } from "react-icons/tb";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import clsx from "clsx";

const Header: React.FC = () => {
  const router = useRouter();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (event: MouseEvent) => {
    if (dropdownTimeout.current) {
      clearTimeout(dropdownTimeout.current);
    }
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = (event: MouseEvent) => {
    dropdownTimeout.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 200); // Adjust the delay time as needed
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="bg-[#1f2435]/80 backdrop-blur-lg text-white py-4 z-50 sticky top-0">
      <Wrapper>
        <div className="flex items-center justify-between md:justify-start gap-4">
          <div
            onClick={() => {
              router.push("/");
            }}
            className="cursor-pointer"
          >
            <Image
              src={"/layout/ngage_logo.svg"}
              alt={"logo"}
              width={1920}
              height={1080}
              className="w-[140px]"
            />
          </div>
          <div
            className="md:hidden cursor-pointer text-right"
            onClick={toggleMobileMenu}
          >
            <Image
              src={"/media/hamburger.svg"}
              alt={"menu"}
              width={28}
              height={28}
              className=""
            />
          </div>
          <div
            className="hidden md:flex bg-[#243350] w-52 mx-2 p-2 rounded-lg relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <span>
              <Image
                src={"/media/hamburger.svg"}
                alt={"icon"}
                width={28}
                height={28}
              />
            </span>
            <button className="text-left mx-2 font-bold">Tracker</button>
            {isDropdownOpen && (
              <div className="absolute top-full left-0 bg-[#1f2435] mt-2 p-2 rounded-lg shadow-lg w-full z-50">
                <a
                  href="/tracker/valorant"
                  className="flex items-center p-2 hover:bg-[#243350] rounded-md"
                >
                  <TbBrandValorant className="mr-2 text-red-500" />
                  Valorant Tracker
                </a>
                <a
                  href="/tracker/fortnite"
                  className="flex items-center p-2 mt-1 hover:bg-[#243350] rounded-md"
                >
                  <TbBrandFortnite className="mr-2 text-blue-500" />
                  Fortnite Tracker
                </a>
              </div>
            )}
          </div>
          <div className="hidden gap-4 md:flex">
            |
            <a
              href="/news"
              className="text-gray-300 font-bold text-md hover:text-gray-200"
            >
              NEWS
            </a>
            <span>|</span>
            <a
              href="/clans"
              className="text-gray-300 font-bold text-md hover:text-gray-200"
            >
              CLANS
            </a>
            <span>|</span>
            <a
              href="/tournaments"
              className="text-gray-300 font-bold text-md hover:text-gray-200"
            >
              TOURNAMENTS
            </a>
          </div>
        </div>
        {/* Mobile Menu */}
        <div
          className={clsx(
            "fixed inset-0 bg-black backdrop-blur-sm bg-opacity-50 z-50 flex justify-end transition-transform transform lg:hidden",
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="w-64 bg-black text-white h-full p-8 relative">
            <AiOutlineClose
              size={28}
              className="absolute top-4 right-4 cursor-pointer"
              onClick={toggleMobileMenu}
            />
            <nav className="mt-16 flex flex-col gap-4">
              <a
                href="/news"
                className="text-gray-300 font-bold text-md hover:text-gray-200"
                onClick={toggleMobileMenu}
              >
                NEWS
              </a>
              <hr className="border-gray-600" />
              <a
                href="/clans"
                className="text-gray-300 font-bold text-md hover:text-gray-200"
                onClick={toggleMobileMenu}
              >
                CLANS
              </a>
              <hr className="border-gray-600" />
              <a
                href="/tournaments"
                className="text-gray-300 font-bold text-md hover:text-gray-200"
                onClick={toggleMobileMenu}
              >
                TOURNAMENTS
              </a>
              <hr className="border-gray-600" />
              <a
                href="/tracker/valorant"
                className="flex items-center text-gray-300 font-bold text-md hover:text-gray-200"
                onClick={toggleMobileMenu}
              >
                <TbBrandValorant size={24} className="mr-1 text-red-500" />
                Valorant Tracker
              </a>
              <hr className="border-gray-600" />
              <a
                href="/tracker/fortnite"
                className="flex items-center text-gray-300 font-bold text-md hover:text-gray-200"
                onClick={toggleMobileMenu}
              >
                <TbBrandFortnite size={24} className="mr-1 text-blue-500" />
                Fortnite Tracker
              </a>
              <hr className="border-gray-600" />
            </nav>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Header;
