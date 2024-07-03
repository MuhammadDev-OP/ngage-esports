"use client";

import Wrapper from "@/app/components/shared/Wrapper";
import { PlayerStats } from "@/app/types/utils";
import axios from "axios";
import { useState } from "react";

interface IParams {
  id?: string;
}

const FortniteUser = ({ params }: { params: IParams }) => {
  const { id } = params;
  const [playerStats, setPlayerStats] = useState<PlayerStats | null>(null);

  const fetchPlayerStats = async () => {
    try {
      const response = await axios.get(
        `https://fortniteapi.io/v1/stats?account=${encodeURIComponent(id)}`,
        {
          headers: {
            Authorization: process.env.NEXT_PUBLIC_API_KEY,
          },
        }
      );
      setPlayerStats(response.data);
    } catch (error) {
      console.error("Error fetching player data:", error);
    }
  };

  const handleSearchIconClick = () => {
    fetchPlayerStats();
  };

  console.log("✅", id);
  return (
    <Wrapper>
      <div>
        <button onClick={handleSearchIconClick}>Fetch Player Stats</button>
        {playerStats && (
          <div>
            <h2>Player Stats</h2>
            <pre>{JSON.stringify(playerStats, null, 2)}</pre>
          </div>
        )}
      </div>
    </Wrapper>
  );
};

export default FortniteUser;
