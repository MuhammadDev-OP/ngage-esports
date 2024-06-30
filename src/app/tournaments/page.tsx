import React from "react";
import Wrapper from "../components/shared/Wrapper";
import Image from "next/image";

const Tournaments = () => {
  return (
    <Wrapper>
      <div className="my-5">
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
      <div className="mt-7">
        <Image
          src={"/media/csgo-game.jpg"}
          alt={"img"}
          width={1920}
          height={1080}
          className="w-[300px]"
        />
      </div>
      <h1 className="text-yellow-500 hover:text-orange-500 duration-150">
        CSGO Tournaments
      </h1>
    </Wrapper>
  );
};

export default Tournaments;
