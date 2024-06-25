import React from "react";
import Wrapper from "../shared/Wrapper";

const Header = () => {
  return (
    <div className="bg-[#1f2435]">
      <Wrapper>
        <div className="flex flex-row gap-4 ">
          <div>LOGO</div>
          <div className="flex gap-2">
            <div>
              <a href="">NEWS</a>
            </div>
            <div>
              <a href="">CLANS</a>
            </div>
            <div>
              <a href="">TOURNAMENTS</a>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Header;
