import Blog from "@/app/clans/warzone/components/Blog";
import Wrapper from "@/app/components/shared/Wrapper";
import React from "react";
import { FaSearch } from "react-icons/fa";
import TournamentsFortnite from "./components/TournamentsFortnite";

const FortniteTournament = () => {
  return (
    <>
      <div
        className="relative flex flex-col min-h-[50vh] items-center justify-center w-full bg-cover bg-center bg-no-repeat bg-blend-overlay bg-[#243350]/100"
        style={{
          backgroundImage: "url(/fortnite/tournament/thumb-fortnite.jpeg)",
        }}
      >
        <Wrapper>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-3xl md:text-4xl font-bold text-center m-4">
              FORTNITE TOURNAMENTS
            </h1>
            <p className="font-semibold text-base md:text-lg text-center m-4">
              Suppose you’re tired of playing solo games on warzone and looking
              for teams that offer unmatched three-player man gameplays. Or
              practice communication and perfect team strats with a clan/team
              that puts tournaments first. Or play casually for fun with no
              desire to go competitive? You’re at the right platform. Our
              listings of warzone clans may fit you perfectly with any criteria.
            </p>
            <div className="flex flex-col items-center mt-4 w-[350px] md:w-full">
              <div className="relative w-[100%]"></div>
            </div>
          </div>
        </Wrapper>
      </div>
      <div className="mt-10">
        <TournamentsFortnite />
      </div>
    </>
  );
};

export default FortniteTournament;
