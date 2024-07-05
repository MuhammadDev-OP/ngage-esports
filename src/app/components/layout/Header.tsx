"use client";

import React, { useState, useRef, MouseEvent } from "react";
import Wrapper from "../shared/Wrapper";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { TbBrandValorant, TbBrandFortnite } from "react-icons/tb";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlinePoweroff,
} from "react-icons/ai";
import { FaHeart, FaUserCircle } from "react-icons/fa";
import clsx from "clsx";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import { useUser } from "@/app/context/UserContext";

const Header: React.FC = () => {
  const { user, setUser } = useUser();
  const router = useRouter();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownTimeout = useRef<NodeJS.Timeout | null>(null);

  const registerModal = useRegisterModal();

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

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user"); // Assuming user data is stored in localStorage
    router.push("/");
  };

  const handleTrackerClick = (event: MouseEvent, url: string) => {
    if (!user) {
      event.preventDefault();
      registerModal.onOpen();
    } else {
      router.refresh();
      router.push(url);
    }
  };

  return (
    <div className="bg-[#1f2435] text-white py-4 z-50 sticky top-0">
      <Wrapper>
        <div className="flex items-center justify-between gap-4">
          <div
            onClick={() => {
              router.push("/");
            }}
            className="cursor-pointer"
          >
            <Image
              src={"/layout/ngage_logo.svg"}
              alt={"logo"}
              width={140}
              height={40}
            />
          </div>
          <div className="md:hidden cursor-pointer" onClick={toggleMobileMenu}>
            <Image
              src={"/media/hamburger.svg"}
              alt={"menu"}
              width={28}
              height={28}
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
                  href="/valorant"
                  className="flex items-center p-2 hover:bg-[#243350] rounded-md"
                  // onClick={(e) => handleTrackerClick(e, "/valorant")}
                >
                  <TbBrandValorant className="mr-2 text-red-500" />
                  Valorant Tracker
                </a>
                <a
                  href="/fortnite"
                  className="flex items-center p-2 mt-1 hover:bg-[#243350] rounded-md"
                  // onClick={(e) => handleTrackerClick(e, "/fortnite")}
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
          <div className="ml-auto hidden items-center md:flex">
            <FaUserCircle size={24} className="mr-2 text-gray-300" />
            <h1
              onClick={registerModal.onOpen}
              className="text-gray-300 font-bold text-md hover:text-gray-200 cursor-pointer"
            >
              {user ? user.username : "login/signup"}
            </h1>
            {user && (
              <>
                <AiOutlinePoweroff
                  size={24}
                  className="ml-2 text-red-500 cursor-pointer"
                  onClick={handleLogout}
                />
                <FaHeart
                  className={`text-2xl ml-2 text-red-600 cursor-pointer`}
                  onClick={() => router.push("/myfavorites")}
                />
              </>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={clsx(
            "fixed inset-0 bg-black backdrop-blur-sm bg-opacity-50 z-50 flex justify-end transition-transform transform lg:hidden",
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="w-64 bg-[#1f2435] text-white h-full p-8 relative">
            <AiOutlineClose
              size={28}
              className="absolute top-4 right-4 cursor-pointer"
              onClick={toggleMobileMenu}
            />
            <nav className="mt-16 flex flex-col gap-5">
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
                onClick={(e) => handleTrackerClick(e, "/valorant")}
              >
                <TbBrandValorant size={24} className="mr-2 text-red-500" />
                Valorant Tracker
              </a>
              <hr className="border-gray-600" />
              <a
                href="/tracker/fortnite"
                className="flex items-center text-gray-300 font-bold text-md hover:text-gray-200"
                onClick={(e) => handleTrackerClick(e, "/fortnite")}
              >
                <TbBrandFortnite size={24} className="mr-2 text-blue-500" />
                Fortnite Tracker
              </a>
              <hr className="border-gray-600" />
              <div className=" flex items-center">
                <FaUserCircle size={24} className="mr-2 text-gray-300" />
                <h1
                  onClick={registerModal.onOpen}
                  className="text-gray-300 font-bold text-md hover:text-gray-200 cursor-pointer"
                >
                  {user ? user.username : "login/signup"}
                </h1>
                {user && (
                  <AiOutlinePoweroff
                    size={24}
                    className="ml-2 text-red-500 cursor-pointer"
                    onClick={handleLogout}
                  />
                )}
              </div>
            </nav>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Header;
