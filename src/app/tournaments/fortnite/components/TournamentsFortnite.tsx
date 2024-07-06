"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Wrapper from "@/app/components/shared/Wrapper";
import Image from "next/image";

const TournamentsFortnite = () => {
  const [upcomingTournaments, setUpcomingTournaments] = useState([]);
  const [previousTournaments, setPreviousTournaments] = useState([]);

  useEffect(() => {
    const fetchTournaments = async () => {
      try {
        const response = await axios.get(
          "https://fortniteapi.io/v1/events/list?lang=en&region=NAE",
          {
            headers: {
              Authorization: process.env.NEXT_PUBLIC_API_KEY,
            },
          }
        );
        const currentTime = new Date().getTime();
        const filteredTournaments = response.data.events.filter(
          (tournament: { beginTime: string | number | Date }) => {
            const beginYear = new Date(tournament.beginTime).getFullYear();
            return beginYear === 2024;
          }
        );

        console.log("Filtered Tournaments:", filteredTournaments);

        const upcoming = filteredTournaments.filter((tournament) => {
          const beginTime = new Date(tournament.beginTime).getTime();
          return beginTime >= currentTime;
        });

        const previous = filteredTournaments.filter((tournament) => {
          const beginTime = new Date(tournament.beginTime).getTime();
          return beginTime < currentTime;
        });

        console.log("Upcoming Tournaments:", upcoming);
        console.log("Previous Tournaments:", previous);

        setUpcomingTournaments(upcoming.slice(0, 10)); // Limit to 10 upcoming tournaments
        setPreviousTournaments(previous.slice(0, 10)); // Limit to 10 previous tournaments
      } catch (error) {
        console.error("Error fetching tournaments:", error);
      }
    };

    fetchTournaments();
  }, []);

  const formatTime = (time: string | number | Date) => {
    const date = new Date(time);
    if (isNaN(date.getTime())) {
      return "Invalid time value"; // Return a fallback value instead of throwing an error
    }

    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    };

    return date.toLocaleString("en-US", options);
  };

  const renderTournaments = (tournaments: any[]) => {
    return tournaments.map((tournament) => (
      <div
        key={tournament.id}
        className="bg-white rounded-lg shadow-md overflow-hidden"
      >
        <div className="relative">
          <Image
            width={1920}
            height={1080}
            src={tournament.poster}
            alt={tournament.name_line1}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
            <h2 className="text-lg font-bold">{tournament.name_line1}</h2>
            <h3 className="text-sm font-bold">{tournament.name_line2}</h3>
          </div>
        </div>
        <div className="p-4 text-black">
          <p className="text-sm font-bold">{tournament.long_description}</p>
          <p className="text-base font-bold mt-2">
            <strong>Start Time:</strong> {formatTime(tournament.beginTime)}
          </p>
          <p className="text-base font-bold mt-1">
            <strong>End Time:</strong> {formatTime(tournament.endTime)}
          </p>
        </div>
      </div>
    ));
  };

  return (
    <Wrapper>
      <div className="p-4">
        <h2 className="text-3xl m-2 text-[#fdda0d] text-center font-bold mb-4">
          Upcoming Tournaments
        </h2>
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6">
          {renderTournaments(upcomingTournaments)}
        </div>

        <h2 className="text-3xl m-2 text-center text-[#fdda0d] font-bold mt-8 mb-4">
          Previous Tournaments
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {renderTournaments(previousTournaments)}
        </div>
      </div>
    </Wrapper>
  );
};

export default TournamentsFortnite;
