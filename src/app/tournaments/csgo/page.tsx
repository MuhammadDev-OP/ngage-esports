import Blog from "@/app/clans/warzone/components/Blog";
import Wrapper from "@/app/components/shared/Wrapper";
import { FaSearch, FaPlus } from "react-icons/fa";

const Csgo = () => {
  return (
    <>
      <div
        className="relative flex flex-col min-h-[50vh] items-center justify-center w-full bg-cover bg-center bg-no-repeat bg-blend-overlay bg-[#243350]/100"
        style={{ backgroundImage: "url(/media/csgo2.jpg)" }}
      >
        <Wrapper>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-4xl font-bold text-center m-4">
              JOIN OR CREATE COD WARZONE CLANS
            </h1>
            <p className="font-semibold text-lg text-center m-4">
              Suppose you’re tired of playing solo games on warzone and looking
              for teams that offer unmatched three-player man gameplays. Or
              practice communication and perfect team strats with a clan/team
              that puts tournaments first. Or play casually for fun with no
              desire to go competitive? You’re at the right platform. Our
              listings of warzone clans may fit you perfectly with any criteria.
            </p>
            <div className="flex flex-col items-center mt-4 w-full">
              <div className="relative w-[100%]">
                <input
                  type="text"
                  className="w-full px-6 py-4 font-bold text-xl text-white rounded-full border border-[#243350] bg-slate-500 opacity-80 focus:outline-none"
                  placeholder="Search..."
                />
                <svg
                  className="absolute top-2 right-4 h-10 w-10 text-[#243350] opacity-70 cursor-not-allowed"
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
              </div>
              <div className="flex mt-4 space-x-4 w-[100%]">
                <button className="px-4 py-2 border-2 border-[#fdda0d] text-xl outline-2 w-[100%] text-white font-black rounded-md opacity-70 hover:opacity-100 hover:bg-[#fdda0d] duration-200 flex items-center justify-center hover:text-black">
                  <FaSearch className="mr-2 text-black " />
                  FIND A CLAN
                </button>
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
      <div className="mt-3">
        <Blog />
      </div>
    </>
  );
};

export default Csgo;
