import Wrapper from "../shared/Wrapper";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div
        className="relative flex flex-col min-h-[50vh] items-center justify-center w-full bg-cover bg-center bg-no-repeat bg-blend-overlay bg-[#333460]/40"
        style={{ backgroundImage: "url(/media/abstract_bg.jpg)" }}
      >
        <Wrapper>
          <div className="flex flex-col content-center pt-12 pb-10">
            <div>
              <h1 className="text-5xl text-center font-bold"> NGAGE Esports</h1>
            </div>
            <div className="mt-5">
              <p className="text-center text-lg font-semibold">
                No one knows how to define “esports” better than professional
                gamers themselves. Theirs is a rapidly growing and constantly
                evolving industry that is filled with both excitement and
                uncertainty. What we do know is that esports are becoming a more
                popular form of competition, with millions of people tuning in
                to watch the best compete. Ngage esports hopes to become the
                global standard for professional gaming.
              </p>
            </div>
            <div className="flex flex-col gap-4 items-center md:justify-center mt-10 md:flex-row">
              <div className="px-20 py-1 rounded-lg  bg-[#fdda0d] hover:bg-[#cbb13a] duration-300">
                <a href="" className="text-black font-bold text-lg">
                  CLANS
                </a>
              </div>
              <div className="px-20 py-1 rounded-lg  bg-[#fdda0d] hover:bg-[#cbb13a] duration-300">
                <a href="" className="text-black font-bold text-lg">
                  TOURNAMENTS
                </a>
              </div>
              <div className="px-20 py-1 rounded-lg  bg-[#fdda0d] hover:bg-[#cbb13a] duration-300">
                <a href="" className="text-black font-bold text-lg">
                  COACHING
                </a>
              </div>
              <div className="px-20 py-1 rounded-lg  bg-[#fdda0d] hover:bg-[#cbb13a] duration-300">
                <a href="" className="text-black font-bold text-lg">
                  RANKS
                </a>
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
      <div className="relative p-10 bg-[#fdda0d]">
        <h1 className="text-black text-center text-3xl font-bold">
          A foundation for growth in the competitive gaming ecosystem.
        </h1>
      </div>

      {/* <div className="absolute top-[-800px]">
        <Image src={"/media/waves1.svg"} alt={""} width={1920} height={300} />
        </div> */}
    </>
  );
};

export default Hero;
