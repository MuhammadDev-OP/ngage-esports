import React from "react";
import Wrapper from "../shared/Wrapper";
import Image from "next/image";

const Header = () => {
  return (
    <div className="bg-[#1f2435] text-white py-4">
      <Wrapper>
        <div className="flex items-center gap-4">
          <div className="text-xl font-bold">LOGO</div>
          <div className="flex bg-[#243350] w-52 mx-2 p-2 rounded-lg">
            <span>
              <Image
                src={"/media/hamburger.svg"}
                alt={"icon"}
                width={28}
                height={28}
              />
            </span>
            <button className="text-left mx-2 font-bold">Tracker</button>
          </div>
          <div className="flex gap-4">
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
      </Wrapper>
    </div>
  );
};

export default Header;
