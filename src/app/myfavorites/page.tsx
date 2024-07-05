"use client";

import { useRouter } from "next/navigation";
import Wrapper from "../components/shared/Wrapper";
import axios from "axios";
import { useUser } from "../context/UserContext";
import { useEffect, useState } from "react";
import { FaHeart, FaUser } from "react-icons/fa";
import toast from "react-hot-toast";

const Favorites = () => {
  const router = useRouter();
  const { user, setUser } = useUser();
  const [playersData, setPlayersData] = useState<
    { id: string; name: string }[]
  >([]);

  // Ensure favoriteIds is always an array of strings
  const userFavorites: string[] = user?.favoriteIds ?? [];

  const fetchPlayerStats = async (favoriteIds: string[]) => {
    try {
      const playersData = await Promise.all(
        favoriteIds.map(async (id) => {
          const response = await axios.get(
            `https://fortniteapi.io/v1/stats?account=${encodeURIComponent(id)}`,
            {
              headers: {
                Authorization: process.env.NEXT_PUBLIC_API_KEY,
              },
            }
          );
          return { id, name: response.data.name };
        })
      );
      setPlayersData(playersData);
    } catch (error) {
      console.error("Error fetching player data:", error);
    }
  };

  const handleFavoriteClick = async (id: string) => {
    if (!user) {
      toast.error("You need to be logged in to manage favorites.");
      return;
    }

    if (userFavorites.includes(id)) {
      // Remove from favorites
      try {
        await axios.delete(`/api/favoriteId/${id}`, {
          data: { userId: user.id },
        });

        // Update local state
        setPlayersData(playersData.filter((player) => player.id !== id));
        setUser({
          ...user,
          favoriteIds: userFavorites.filter((favId) => favId !== id),
        });
        toast.success("Player removed from favorites!");
      } catch (error) {
        console.error("Error removing player from favorites:", error);
        toast.error("Failed to remove player from favorites.");
      }
    } else {
      // Add to favorites
      try {
        await axios.post(`/api/favoriteId/${id}`, {
          userId: user.id,
        });

        // Update local state
        setUser({
          ...user,
          favoriteIds: [...userFavorites, id],
        });
        fetchPlayerStats([...userFavorites, id]);
        toast.success("Player added to favorites!");
      } catch (error) {
        console.error("Error adding player to favorites:", error);
        toast.error("Failed to add player to favorites.");
      }
    }
  };

  useEffect(() => {
    if (userFavorites.length > 0) {
      fetchPlayerStats(userFavorites);
    }
  }, [userFavorites]);

  return (
    <Wrapper>
      <div className="grid grid-cols-1 md:grid-cols-3 md:flex-row p-6 gap-4 ">
        {playersData.map((player) => (
          <div
            key={player.id}
            className="w-full max-w-xl bg-[#1f2435] shadow-md rounded-lg p-6 flex flex-col items-center"
          >
            <FaUser className="text-6xl text-slate-500 mb-4" />
            <h1 className="text-3xl text-[#fdda0d] font-bold mb-4">
              {player.name || "Player"}
            </h1>
            <FaHeart
              className={`text-2xl cursor-pointer mb-4 ${
                userFavorites.includes(player.id)
                  ? "text-red-500"
                  : "text-gray-500"
              }`}
              onClick={() => handleFavoriteClick(player.id)}
            />
            <button
              onClick={() => router.push(`fortnite/${player.id}`)}
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
            >
              See Details
            </button>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default Favorites;
