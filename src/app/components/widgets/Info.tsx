import Wrapper from "../shared/Wrapper";

const Info = () => {
  return (
    <Wrapper>
      <div className="flex mt-36 gap-x-14">
        <div className="w-[540px]">
          <h1 className="text-2xl font-semibold">Find or Create A Team</h1>
          <p className="mt-5">
            There are numerous reasons why people might want to join or create a
            game clan. One reason is that it can be a way to socialize and
            communicate with other gamers. Guilds and esports teams can also
            provide opportunities for players to compete and win prizes. For
            some, game clans can be an opportunity to make new friends and help
            contribute to the gaming community.
          </p>
          <p className="mt-5">
            Whatever the reason,
            <a
              href="/clans"
              className="text-[#fdda0d] hover:text-orange-400 duration-150"
            >
              joining or creating a clan
            </a>{" "}
            is a great way to get involved in gaming and have fun!
          </p>
        </div>
        <div className="flex flex-col mt-5">
          <a
            href=""
            className=" text-[#fdda0d] font-bold text-sm hover:text-black duration-150"
          >
            COD WARZONE CLANS
          </a>
          <a
            href=""
            className="link-with-bar font-bold text-[#fdda0d] text-sm hover:text-black duration-150"
          >
            CSGO CLANS
          </a>
          <a
            href=""
            className="link-with-bar font-bold text-[#fdda0d] text-sm hover:text-black duration-150"
          >
            FAZE CSGO CLAN
          </a>
          <a
            href=""
            className="link-with-bar font-bold text-[#fdda0d] text-sm hover:text-black duration-150"
          >
            TEAM LIQUID CSGO CLAN
          </a>
          <a
            href=""
            className="link-with-bar font-bold text-[#fdda0d] text-sm hover:text-black duration-150"
          >
            CLOUD CSGO CLAN
          </a>
          <a
            href=""
            className="link-with-bar font-bold text-[#fdda0d] text-sm hover:text-black duration-150"
          >
            FNATIC CSGO CLAN
          </a>
          <a
            href=""
            className="link-with-bar font-bold text-[#fdda0d] text-sm hover:text-black duration-150"
          ></a>
        </div>
        <div></div>
      </div>
    </Wrapper>
  );
};

export default Info;
