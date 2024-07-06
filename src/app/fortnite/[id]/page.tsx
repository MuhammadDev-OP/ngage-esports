"use client";

import Wrapper from "@/app/components/shared/Wrapper";
import { PlayerStats } from "@/app/types/utils";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaUser, FaHeart } from "react-icons/fa";
import { useUser } from "@/app/context/UserContext";
import toast from "react-hot-toast";
import TournamentsFortnite from "@/app/tournaments/fortnite/components/TournamentsFortnite";

interface IParams {
  id?: string;
}

const FortniteUser = ({ params }: { params: IParams }) => {
  const { id } = params;
  const [playerStats, setPlayerStats] = useState<PlayerStats | null>(null);
  const [selectedMode, setSelectedMode] = useState("solo");
  const [isFavorite, setIsFavorite] = useState(false);
  const { user } = useUser();

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

  useEffect(() => {
    fetchPlayerStats();
  }, [id]);

  useEffect(() => {
    if (user && user.favoriteIds.includes(id!)) {
      setIsFavorite(true);
    }
  }, [user, id]);

  const handleModeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMode(e.target.value);
  };

  const handleFavoriteClick = async () => {
    if (!user) {
      toast.error("You need to be logged in to add favorites.");
      return;
    }

    try {
      const response = await axios.post(`/api/favoriteId/${id}`, {
        userId: user.id,
      });
      setIsFavorite(true);
      toast.success("Player added to favorites!");
    } catch (error) {
      console.error("Error adding player to favorites:", error);
      toast.error("Failed to add player to favorites.");
    }
  };

  return (
    <>
      <Wrapper>
        <div className="flex flex-col items-center p-6">
          <div className="w-full max-w-4xl bg-[#1f2435] shadow-md rounded-lg p-6">
            <div className="flex items-center space-x-4 mb-6">
              <FaUser className="text-6xl text-slate-500" />
              <h1 className="text-3xl text-[#fdda0d] font-bold">
                {playerStats?.name || "Player"}
              </h1>
              <FaHeart
                className={`text-4xl cursor-pointer ${
                  isFavorite ? "text-red-500" : "text-gray-500"
                }`}
                onClick={handleFavoriteClick}
              />
            </div>
            <div className="mb-6">
              <label className="text-white font-semibold mr-4">
                Select Game Mode:
              </label>
              <select
                value={selectedMode}
                onChange={handleModeChange}
                className="px-3 py-2 rounded-lg shadow-md bg-gray-700 text-white capitalize"
              >
                <option className="" value="solo">
                  Solo
                </option>
                <option value="duo">Duo</option>
                <option value="squad">Squad</option>
                <option value="ltm">LTM</option>
              </select>
            </div>
            {playerStats && (
              <div className="mt-6 text-white">
                <div className="bg-gray-800 p-4 rounded-lg shadow-md">
                  <h3 className="text-xl capitalize font-semibold mb-4">
                    {selectedMode}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div>
                      <p className="text-lg font-bold">Wins:</p>
                      <p className="text-2xl text-white font-bold">
                        {playerStats?.global_stats[selectedMode]?.placetop1 ||
                          0}
                      </p>
                    </div>
                    <div>
                      <p className="text-lg font-bold">Kills:</p>
                      <p className="text-2xl text-white font-bold">
                        {playerStats.global_stats[selectedMode]?.kills || 0}
                      </p>
                    </div>
                    <div>
                      <p className="text-lg font-bold">Matches Played:</p>
                      <p className="text-2xl text-white font-bold">
                        {playerStats.global_stats[selectedMode]
                          ?.matchesplayed || 0}
                      </p>
                    </div>
                    <div>
                      <p className="text-lg font-bold">K/D Ratio:</p>
                      <p className="text-2xl text-white font-bold">
                        {playerStats.global_stats[selectedMode]?.kd || 0}
                      </p>
                    </div>
                    <div>
                      <p className="text-lg font-bold">Win Rate:</p>
                      <p className="text-2xl text-white font-bold">
                        {playerStats.global_stats[selectedMode]?.winrate || 0}%
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </Wrapper>
      <div className="bg-[#1f2435] p-4">
        <TournamentsFortnite />
      </div>
    </>
  );
};

export default FortniteUser;
