import React from "react";
import Wrapper from "../components/shared/Wrapper";
import Image from "next/image";

const Clans = () => {
  return (
    <Wrapper>
      <div className="my-10 ">
        <div>
          <h3 className="text-3xl font-bold text-center">
            Game Clans, Guilds & Teams
          </h3>
          <p className="text-center mt-3">
            If you enjoy playing video games with others online, then it might
            be time to consider joining a game clan. These clans can offer great
            opportunities for socializing and collaborating with other players,
            as well as helping you improve your skills on the games you love. If
            you’re looking to join a clan but don’t know where to start,
            Ngage.gg is the place to be.
          </p>
        </div>
        <div className="grid grid-cols-4 mt-10 gap-4">
          <div className="relative">
            <Image
              src={"/media/csgo.jpg"}
              alt={"csgo"}
              width={1920}
              height={1080}
              className="w-[300px] h-[180px] object-cover transition-transform duration-200 transform hover:scale-105"
            />
            <div className="absolute inset-0 top-[158px] flex items-center justify-center">
              <div className="bg-[#1f2435] py-3 px-8 rounded-lg">
                <h3 className="text-white text-2xl font-bold text-center">
                  CSGO Clans
                </h3>
              </div>
            </div>
          </div>
          <div className="relative">
            <Image
              src={"/media/csgo.jpg"}
              alt={"csgo"}
              width={1920}
              height={1080}
              className="w-[300px] h-[180px] object-cover transition-transform duration-200 transform hover:scale-105"
            />
            <div className="absolute inset-0 top-[158px] flex items-center justify-center">
              <div className="bg-[#1f2435] py-3 px-8 rounded-lg">
                <h3 className="text-white text-2xl font-bold text-center">
                  CSGO Clans
                </h3>
              </div>
            </div>
          </div>
          <div className="relative">
            <Image
              src={"/media/csgo.jpg"}
              alt={"csgo"}
              width={1920}
              height={1080}
              className="w-[300px] h-[180px] object-cover transition-transform duration-200 transform hover:scale-105"
            />
            <div className="absolute inset-0 top-[158px] flex items-center justify-center">
              <div className="bg-[#1f2435] py-3 px-8 rounded-lg">
                <h3 className="text-white text-lg  text-center">CSGO Clans</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Clans;