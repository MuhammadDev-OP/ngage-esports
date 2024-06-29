import React from "react";
import Wrapper from "../shared/Wrapper";
import News from "@/app/news/page";

const Ngage = () => {
  return (
    <Wrapper>
      <div className="flex flex-col justify-center mt-20">
        <div>
          <h1 className="text-2xl text-center">NGAGE With Us</h1>
        </div>
        <div className="mt-5">
          <p className="text-center">
            NGAGE Esports is a creative broadcast and events management company,
            developing the basis for growth in all aspects of the competitive
            gaming ecosystem. NGAGE works directly with OpTic Gaming and the
            Houston Outlaws to produce exclusive events and livestreams. We are
            part of the Infinite Esports & Entertainment family, alongside GG
            Esports Academy and No Scope Media.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-x-10 justify-between">
          {[
            { name: "Jonathon Oudthone", designation: "Founder/President" },
            { name: "Adam Bayacal", designation: "Managing Producer" },
            { name: "Michael White", designation: "Tournament Director" },
            {
              name: "Jonathan Oh",
              designation: "Marketing & Operations Director",
            },
          ].map((link, index) => (
            <div key={index} className="mt-10">
              <h1 className="text-xl text-center">{link.name}</h1>
              <p className="text-center mt-2">{link.designation}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 mx-3 md:pl-[350px]">
          <div className="text-left ">
            {" "}
            <p>
              NGAGE Studios is located at LaunchPad City in Frisco, Texas – one
              of the fastest growing cities in the country, and forefront in the
              support of entrepreneurial and creative communities. The City of
              Frisco has tasked LaunchPad City with the creation of a
              collaborative work space that fosters innovation and technological
              development.
            </p>
          </div>
          <div className="mt-4">
            {" "}
            <p>
              NGAGE Esports
              <br />
              6170 Research Road
              <br />
              Frisco, Texas 75033
              <br />
              <a href="" className="text-[#fdda0d]">
                info@ngage.gg
              </a>
            </p>
          </div>
        </div>
        <hr className="mt-10 border-t-2 border-gray-700" />{" "}
        {/* Added horizontal line */}
      </div>
      <h1 className="text-center font-bold text-4xl mt-10">
        Latest eSports News
      </h1>
      <News />
    </Wrapper>
  );
};

export default Ngage;
