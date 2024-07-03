import RegisterModal from "../modals/RegisterModal";
import Wrapper from "../shared/Wrapper";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div
        className="relative flex flex-col min-h-[50vh] items-center justify-center w-full bg-cover bg-center bg-no-repeat bg-blend-overlay bg-[#333460]/80 "
        style={{ backgroundImage: "url(/media/abstract_bg.jpg)" }}
      >
        <RegisterModal />
        <Wrapper>
          <div className="flex flex-col content-center pt-12 pb-10 mb-32">
            <div>
              <h1 className="text-xl sm:text-4xl md:text-5xl text-center font-bold">
                NGAGE Esports
              </h1>
            </div>
            <div className="mt-5">
              <p className="text-center text-base font-medium">
                No one knows how to define “esports” better than professional
                gamers themselves. Theirs is a rapidly growing and constantly
                evolving industry that is filled with both excitement and
                uncertainty. What we do know is that esports are becoming a more
                popular form of competition, with millions of people tuning in
                to watch the best compete. Ngage esports hopes to become the
                global standard for professional gaming.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 items-center mt-10 md:flex md:flex-row md:gap-4 z-20">
              <div className="py-1 w-full rounded-lg bg-[#fdda0d] hover:bg-[#cbb13a] duration-300">
                <a
                  href="/clans"
                  className="block text-black text-center font-bold text-lg"
                >
                  CLANS
                </a>
              </div>
              <div className="py-1 w-full rounded-lg bg-[#fdda0d] hover:bg-[#cbb13a] duration-300">
                <a
                  href="/tournaments"
                  className="block text-black text-center font-bold text-lg"
                >
                  TOURNAMENTS
                </a>
              </div>
              <div className="py-1 w-full rounded-lg bg-[#fdda0d] hover:bg-[#cbb13a] duration-300">
                <a
                  href=""
                  className="block text-black text-center font-bold text-lg"
                >
                  COACHING
                </a>
              </div>
              <div className="py-1 w-full rounded-lg bg-[#fdda0d] hover:bg-[#cbb13a] duration-300">
                <a
                  href=""
                  className="block text-black text-center font-bold text-lg"
                >
                  RANKS
                </a>
              </div>
            </div>
          </div>
        </Wrapper>
        <div className="absolute bottom-[-80px] left-0 w-full overflow-hidden">
          <Image
            src={"/media/wave.svg"}
            alt={""}
            width={1920}
            height={1080}
            className="w-full opacity-90"
          />
          <h1 className="md:bottom-[-0.5%] md:absolute bg-[#fdda0d] p-5 md:p-7 left-0 right-0 text-black text-center text-xl sm:text-2xl md:text-3xl font-bold">
            A foundation for growth in the competitive gaming ecosystem.
          </h1>
        </div>
      </div>
    </>
  );
};

export default Hero;
