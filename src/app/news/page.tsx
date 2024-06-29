"use client";

import Image from "next/image";
import Wrapper from "../components/shared/Wrapper";

const data = [
  {
    heading: "Noteworthy technology acquisitions 2021",
    content:
      "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    image: "/media/news1.jpg",
  },
  {
    heading: "Another significant acquisition",
    content:
      "Details about another significant acquisition in the tech industry.",
    image: "/media/news1.jpg",
  },
  {
    heading: "Yet another acquisition",
    content:
      "Information on yet another acquisition that made headlines in 2021.",
    image: "/media/news1.jpg",
  },
  {
    heading: "Major tech mergers",
    content: "A rundown of major tech mergers and their implications.",
    image: "/media/news1.jpg",
  },
];

const News = () => {
  return (
    <>
      <div className="ux-shape-divider ux-shape-divider--bottom ux-shape-divider--style-waves-opacity-3">
        <svg
          viewBox="0 0 1200 60"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            className="ux-shape-fill"
            opacity="0.2"
            d="M0,0 V20 Q300,50 600,20 T1200,20 V0 Z"
          ></path>
          <path
            className="ux-shape-fill"
            opacity="0.15"
            d="M0,0 V25 Q300,45 600,25 T1200,25 V0 Z"
          ></path>
          <path
            className="ux-shape-fill"
            opacity="0.1"
            d="M0,0 V30 Q300,40 600,30 T1200,30 V0 Z"
          ></path>
        </svg>
      </div>
      <Wrapper>
        <div className="grid grid-cols-3 gap-4">
          {data.map((item, index) => (
            <div
              key={index}
              className="max-w-sm bg-[#1f2435] border mt-16 rounded-lg shadow border-gray-700"
            >
              <a href="#">
                <Image
                  className="rounded-t-lg"
                  src={item.image}
                  alt=""
                  width={1920}
                  height={1080}
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold text-center tracking-tight text-white">
                    {item.heading}
                  </h5>
                </a>
                <hr className="my-2 mx-auto w-[50px] text-center" />
                <p
                  onClick={() => {}}
                  className="mb-3 font-normal text-center text-white hover:text-orange-400 duration-200 cursor-pointer"
                >
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Wrapper>
    </>
  );
};

export default News;
