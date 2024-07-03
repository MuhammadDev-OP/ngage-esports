import Wrapper from "@/app/components/shared/Wrapper";
import Image from "next/image";

const InfoFortnite = () => {
  return (
    <Wrapper>
      <>
        <div className="flex flex-col items-center justify-center h-full mt-16">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">
              Dominate Fortnite with NGAGE.GG
            </h1>
            <p className="text-lg mt-4">
              NGAGE.gg offers the ultimate Fortnite tracking experience,
              meticulously crafted to enhance your gameplay. Whether you’re a
              seasoned warrior or just stepping onto the island for the first
              time, our platform delivers comprehensive insights and analysis to
              aid you in honing your skills and emerging victorious in every
              battle.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-20 gap-5">
          <div className="flex flex-col justify-center items-center bg-[#1f2435] p-8 rounded-lg">
            <Image
              src={"/fortnite/info/stats_icon.svg"}
              alt={"stats"}
              width={1920}
              height={1080}
              className="w-[40px]"
            />
            <h1 className="font-bold text-xl mt-5">Player Stats</h1>
            <p className="mt-5 text-center">
              Dive deep into your Fortnite performance with detailed player
              statistics. From victory royales to elimination counts, track your
              progress over time and pinpoint areas for improvement.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center bg-[#1f2435] p-8 rounded-lg">
            <Image
              src={"/fortnite/info/match_icon.svg"}
              alt={"stats"}
              width={1920}
              height={1080}
              className="w-[40px]"
            />
            <h1 className="font-bold text-xl mt-5">Match History</h1>
            <p className="mt-5 text-center">
              Relive the adrenaline-pumping moments of your Fortnite battles
              with NGAGE.gg’s Match History feature. Dive deep into each
              encounter, from intense skirmishes to triumphant victories.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center bg-[#1f2435] p-8 rounded-lg">
            <Image
              src={"/fortnite/info/leaderboard_icon.svg"}
              alt={"stats"}
              width={1920}
              height={1080}
              className="w-[40px]"
            />
            <h1 className="font-bold text-xl mt-5">Leaderboards</h1>
            <p className="mt-5 text-center">
              Rise through the ranks and claim your spot among Fortnite’s elite
              with NGAGE’s Leaderboard. Track your progress against the best,
              measure your skills, and strive to ascend the leaderboard ladder.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center bg-[#1f2435] p-8 rounded-lg">
            <Image
              src={"/fortnite/info/weapon_icon.svg"}
              alt={"stats"}
              width={1920}
              height={1080}
              className="w-[40px]"
            />
            <h1 className="font-bold text-xl mt-5">Agent Mastery</h1>
            <p className="mt-5 text-center">
              Unleash your full potential with our Weapon Mastery feature. From
              mastering the precision of the sniper rifle to perfecting the
              spray of an assault rifle, our platform provides detailed insights
              into your performance with each weapon.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center bg-[#1f2435] p-8 rounded-lg">
            <Image
              src={"/fortnite/info/tracking_icon.svg"}
              alt={"stats"}
              width={1920}
              height={1080}
              className="w-[40px]"
            />
            <h1 className="font-bold text-xl mt-5">Live Tracking</h1>
            <p className="mt-5 text-center">
              Stay one step ahead of the competition with our Live Tracking
              feature. Whether you’re in the midst of a heated battle or
              coordinating strategies with your squad, our real-time tracking
              keeps you informed and empowered.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center bg-[#1f2435] p-8 rounded-lg">
            <Image
              src={"/fortnite/info/community_icon.svg"}
              alt={"stats"}
              width={1920}
              height={1080}
              className="w-[40px]"
            />
            <h1 className="font-bold text-xl mt-5">Community Integration</h1>
            <p className="mt-5 text-center">
              Forge bonds, share insights, and join a thriving community of
              Fortnite enthusiasts with the Community Integration feature.{" "}
              <a
                href="/clans"
                className="text-[#fdda0d] font-normal hover:text-orange-500 duration-150"
              >
                Team up
              </a>{" "}
              with fellow players, discuss strategies, and celebrate your
              victories together.
            </p>
          </div>
        </div>
      </>
    </Wrapper>
  );
};

export default InfoFortnite;
