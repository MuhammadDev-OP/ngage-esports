import Wrapper from "@/app/components/shared/Wrapper";
import Image from "next/image";
import { useRouter } from "next/router";

const data = [
  {
    slug: "elevating-user-experience-fivems-six-month-journey-under-rockstar-games",
    heading:
      "Elevating User Experience: FiveM’s Six-Month Journey Under Rockstar Games",
    content:
      "In the ever-evolving world of multiplayer gaming experiences, FiveM has been a standout platform, allowing players to create and enjoy customized gameplay within the Grand Theft Auto V universe. Recently, the team at cfx.re, which manages both FiveM and RedM, shared some exciting updates with the community in their latest Community Pulse, marking six months since their acquisition by Rockstar Games.",
    image: "/media/news1.jpg",
  },
  {
    slug: "The-Science",
    heading:
      "The Science of Fortnite Stats: Understanding Key Metrics and Their Impact",
    content:
      "Details about another significant acquisition in the tech industry.",
    image: "/news/2.jpg",
  },
  {
    slug: "Valorant-Gets",
    heading: "Valorant Gets a New Skin Called Deadeye",
    content:
      "Information on yet another acquisition that made headlines in 2021.",
    image: "/news/4.jpg",
  },
  {
    slug: "LoL-Patch",
    heading: "LoL Patch 11.19: The Best Bot Laners and Supporters",
    content: "A rundown of major tech mergers and their implications.",
    image: "/news/5.jpg",
  },
];

const Page = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const newsBlog = data.find((item) => item.slug === slug);
  console.log(slug, "⚙️");
  console.log(newsBlog, "👏👏");

  if (!newsBlog) {
    return (
      <Wrapper>
        <div className="text-center py-16">
          <h1 className="text-3xl font-bold">Article Not Found</h1>
          <p className="mt-4">
            The article you are looking for does not exist.
          </p>
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <div className="flex flex-col md:flex-row py-10 gap-x-12">
        <div className="w-[350px] md:w-[820px] text-center">
          <a
            href="/news"
            className="font-extrabold text-[#fdda0d] text-xs hover:text-orange-500 duration-150"
          >
            NEWS
          </a>
          <h1 className="text-3xl font-bold mb-6">{newsBlog.heading}</h1>
          <hr className="m-8 border-t-4 mx-auto w-10 border-gray-600" />{" "}
          <div className="mb-6">
            <Image
              src={newsBlog.image}
              alt={newsBlog.heading}
              width={1920}
              height={1080}
              className="w-full h-auto"
            />
          </div>
          <p className="text-lg text-left">{newsBlog.content}</p>
        </div>
        <div className="w-[200px]">
          <h1 className="text-xl mt-12 font-bold mb-6">LATEST NEWS</h1>
          <div className="mb-6 flex flex-col items-center">
            <div className="relative flex items-center justify-center w-full">
              <Image
                src={newsBlog.image}
                alt={newsBlog.heading}
                width={1920}
                height={1080}
                className="w-full h-auto opacity-30"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="text-white text-2xl font-bold bg-[#fdda0d]/90 bg-opacity-70 px-2 py-1 rounded-md">
                  07 Oct
                </h1>
              </div>
            </div>
            <h1 className="text-center mt-2 font-bold">{newsBlog.heading}</h1>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Page;
