"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Wrapper from "@/app/components/shared/Wrapper";
import Image from "next/image";

const FortniteSkins = () => {
  const [skins, setSkins] = useState([]);
  const [displayCount, setDisplayCount] = useState(10); // Number of skins to display initially
  const [allSkins, setAllSkins] = useState([]); // State to store all fetched skins

  useEffect(() => {
    const fetchSkins = async () => {
      try {
        const response = await axios.get(
          "https://fortniteapi.io/v2/items/list?lang=en",
          {
            headers: {
              Authorization: process.env.NEXT_PUBLIC_API_KEY,
            },
          }
        );
        setAllSkins(response.data.items); // Store all fetched skins
        setSkins(response.data.items.slice(0, displayCount)); // Display initial skins
      } catch (error) {
        console.error("Error fetching skins:", error);
      }
    };

    fetchSkins();
  }, [displayCount]);

  const handleShowMore = () => {
    setDisplayCount(displayCount + 10); // Increase the display count by 10
    setSkins(allSkins.slice(0, displayCount + 10)); // Update the displayed skins
  };

  return (
    <Wrapper>
      <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {skins.map((skin) => (
          <div
            key={skin.id}
            className="bg-white rounded-lg shadow-md overflow-hidden w-[350px] md:w-full"
          >
            <div className="relative">
              {skin.images?.icon ? (
                <Image
                  width={1920}
                  height={1080}
                  src={skin.images.icon}
                  alt={skin.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <span>No Image Available</span>
                </div>
              )}
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                <h2 className="text-lg font-bold">{skin.name}</h2>
              </div>
            </div>
            <div className="p-4 text-black">
              <p className="text-base font-bold mt-2">
                <strong>Price:</strong> {skin.price}
              </p>
              <p className="text-sm mt-1">{skin.description}</p>
            </div>
          </div>
        ))}
      </div>
      {displayCount < allSkins.length && ( // Show "Show More" button only if there are more skins to load
        <div className="flex justify-center mt-4">
          <button
            onClick={handleShowMore}
            className="bg-[#fdda0d] text-black py-2 px-4 rounded-lg font-bold"
          >
            Show More
          </button>
        </div>
      )}
    </Wrapper>
  );
};

export default FortniteSkins;
