"use client";

import React from "react";
import Wrapper from "../components/shared/Wrapper";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Tournaments = () => {
  const router = useRouter();

  return (
    <Wrapper>
      <div className="flex flex-col justify-center my-5">
        <h1 className="text-4xl font-bold text-center my-5">
          ESports Tournaments
        </h1>
        <p className="text-lg font-semibold text-center">
          eSports are becoming increasingly popular, and tournaments are a great
          way to show off your skills. If you’re looking for a competitive
          gaming experience, our eSports tournament is the perfect place for
          you.
        </p>
        <p className="my-3 text-center text-lg font-semibold">
          We’ll be pitting the best gamers against each other in a variety of
          games, so come join us and see if you have what it takes to come out
          on top. There’s sure to be plenty of fun and excitement, so don’t miss
          out. Sign up today and we’ll see you at the tournament. We can’t wait
          to see who will emerge as the victor.
        </p>
      </div>
      <div className="">
        <div className="mt-7">
          <Image
            src={"/media/csgo-game.jpg"}
            alt={"img"}
            width={1920}
            height={1080}
            className="w-[300px]"
          />
        </div>
        <h1
          onClick={() => {
            router.push("/tournaments/csgo");
          }}
          className="text-yellow-500 hover:text-orange-500 duration-150 cursor-pointer"
        >
          CSGO Tournaments
        </h1>
      </div>
      <div>
        <div className="mt-7">
          <Image
            src={"/fortnite/tournament/fortnite_cover.jpg"}
            alt={"img"}
            width={1920}
            height={1080}
            className="w-[300px]"
          />
        </div>
        <h1
          onClick={() => {
            router.push("/tournaments/fortnite");
          }}
          className="text-yellow-500 hover:text-orange-500 duration-150 cursor-pointer"
        >
          Fortnite Tournaments
        </h1>
      </div>
    </Wrapper>
  );
};

export default Tournaments;
