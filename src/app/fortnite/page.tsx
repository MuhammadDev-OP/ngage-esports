"use client";

import Wrapper from "../components/shared/Wrapper";
import Image from "next/image";
import InfoFortnite from "./components/InfoFortnite";
import axios from "axios";
import { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";

const FortniteTracker = () => {
  const router = useRouter();
  const [playerData, setPlayerData] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [userId, setUserId] = useState<any>(null); // Updated type to 'any' for flexibility
  const [username, setUsername] = useState("");
  const [result, setResult] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const fetchPlayerData = async () => {
    try {
      if (searchTerm.trim() === "") return;

      setLoading(true);

      const response = await axios.get(
        `https://fortniteapi.io/v1/lookup?username=${encodeURIComponent(
          searchTerm
        )}`,
        {
          headers: {
            Authorization: process.env.NEXT_PUBLIC_API_KEY,
          },
        }
      );

      if (response.data.result == true) {
        const accountId = response.data.account_id;
        setUserId(accountId);
        setResult(true);
        setUsername(searchTerm);
        console.log(accountId, "🟢🟢");
      } else {
        setUserId("No User Found or ID Private");
        setResult(false);
      }
    } catch (error) {
      console.error("Error fetching player data:", error);
      setUserId("Error fetching data");
      setResult(false);
    } finally {
      setLoading(false);
    }
  };

  const handleSearchIconClick = () => {
    fetchPlayerData();
  };

  return (
    <>
      <div
        className="flex flex-col min-h-[50vh] justify-center items-center w-full bg-cover bg-center bg-no-repeat bg-blend-overlay bg-[#243350]/90"
        style={{ backgroundImage: "url(/media/abstract_bg.jpg)" }}
      >
        <Wrapper>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-16">
            <div className="flex items-center flex-col mt-4 w-[300px] md:w-[900px]">
              <Image
                src={"/fortnite/fortnite-icon-large.png"}
                alt={""}
                width={1920}
                height={1080}
                className="w-[80px]"
              />
              <h1 className="text-4xl text-center font-bold mt-10">
                FORTNITE TRACKER
              </h1>
              <p className="text-xl mt-5 font-semibold text-center">
                Track your progress and sharpen your skills with our Fortnite
                tracker
              </p>
              <div className="relative w-[100%] mt-8">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-6 py-3 font-bold text-xl text-black rounded-lg border border-[#243350] bg-white focus:outline-none"
                  placeholder="Search..."
                />
                <svg
                  onClick={handleSearchIconClick}
                  className="absolute top-2 right-4 h-10 w-10 text-[#243350] opacity-70 cursor-pointer"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
                  ></path>
                </svg>
                {isLoading ? (
                  <div className="text-center">Loading...</div>
                ) : (
                  <div>
                    {result ? (
                      <div
                        onClick={() => {
                          router.push(`fortnite/${userId}`);
                        }}
                        className="absolute w-full mt-2 bg-white border border-gray-300 rounded-lg shadow-lg duration-150 z-10 p-4 flex items-center hover:bg-slate-300 cursor-pointer"
                      >
                        <FaUserAlt className="mr-2 text-xl text-yellow-500" />
                        <div>
                          <p className="text-xl font-bold text-gray-700">
                            {username}{" "}
                            <span className="bg-green-200 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded  ">
                              Active
                            </span>
                          </p>
                        </div>
                      </div>
                    ) : (
                      userId && (
                        <div className="absolute w-full mt-2 bg-white border border-gray-300 rounded-lg shadow-lg duration-150 z-10 p-4 flex items-center text-red-600">
                          <p>{userId}</p>
                        </div>
                      )
                    )}
                  </div>
                )}
              </div>
              <div className="mt-3">
                <div className="mt-3 px-4 hover:bg-[#fdda0d] border-2 rounded-lg border-[#fdda0d] duration-200 cursor-pointer">
                  <h1 className="px-4 text-[#fdda0d] hover:text-white">
                    Or DOWNLOAD OUR APP
                  </h1>
                </div>
                <p className="text-center mt-2 font-semibold text-xs italic">
                  471,351 players tracked
                </p>
              </div>
            </div>
            <div className="mt-10 w-[370px] md:w-[400px]">
              <div className="flex rounded-2xl m-5 items-center p-3 bg-[#243350]">
                <Image
                  src={"/fortnite/fortnite_profile_1.jpg"}
                  alt={""}
                  width={1920}
                  height={1080}
                  className="w-[70px] h-[70px]"
                />
                <div className="mx-5">
                  <h1 className="text-xl font-bold">#1 Rated Player</h1>
                  <p className="text-lg font-normal text-[#fdda0d]">
                    SkyStrider
                  </p>
                </div>
              </div>
              <div className="flex rounded-2xl m-5 items-center p-3 bg-[#243350]">
                <Image
                  src={"/fortnite/fortnite_profile_1.jpg"}
                  alt={""}
                  width={1920}
                  height={1080}
                  className="w-[70px] h-[70px]"
                />
                <div className="mx-5">
                  <h1 className="text-xl font-bold">#1 Rated Player</h1>
                  <p className="text-lg font-normal text-[#fdda0d]">
                    SkyStrider
                  </p>
                </div>
              </div>
              <div className="flex rounded-2xl m-5 items-center p-3 bg-[#243350]">
                <Image
                  src={"/fortnite/fortnite_profile_1.jpg"}
                  alt={""}
                  width={1920}
                  height={1080}
                  className="w-[70px] h-[70px]"
                />
                <div className="mx-5">
                  <h1 className="text-xl font-bold">#1 Rated Player</h1>
                  <p className="text-lg font-normal text-[#fdda0d]">
                    SkyStrider
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
      <InfoFortnite />
    </>
  );
};

export default FortniteTracker;
