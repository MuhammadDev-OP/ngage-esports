import React from "react";
import Wrapper from "../shared/Wrapper";

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
        <div className="flex flex-row gap-x-10 justify-between">
          {[
            { name: "Jonathon Oudthone", designation: "Founder/President" },
            { name: "Adam Bayacal", designation: "Managing Producer" },
            { name: "Michael White", designation: "Tournament Director" },
            {
              name: "Jonathan Oh",
              designation: "Marketing & Operations Director",
            },
          ].map((link, index) => (
            <div>
              <h1>{link.name}</h1>
              <p>{link.designation}</p>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default Ngage;
