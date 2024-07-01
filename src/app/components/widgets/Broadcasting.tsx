import Image from "next/image";
import Wrapper from "../shared/Wrapper";

const Broadcasting = () => {
  return (
    <Wrapper>
      <div className="flex flex-col md:flex-row mt-16 gap-x-6">
        <div className="flex-grow">
          <h1 className="text-3xl">Broadcasting</h1>
          <p className="font-medium mt-5 text-base">
            The lens catches everything. The stories and legends – the moments
            of electric tension and explosive hype. Our broadcast and content
            creation efforts capture the heart and soul of the esports
            community, chiseling its historic moments into permanent form and
            unlocking further story-building opportunities along the way.
          </p>
          <div className="mt-5 space-y-2">
            {[
              { href: "", text: "Web Series" },
              { href: "", text: "Invitationals" },
              { href: "", text: "Tournament Coverage" },
              { href: "", text: "NGAGE Studios" },
            ].map((link, index) => (
              <div
                key={index}
                className="flex flex-col font-bold text-base link-with-bar1"
              >
                <div className="flex items-center space-x-2">
                  <span>
                    <Image
                      src={"/media/check.svg"}
                      alt={""}
                      width={20}
                      height={20}
                    />
                  </span>
                  <span>{link.text}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 flex-shrink-0">
          <Image
            src={"/media/broadcasting.jpg"}
            alt={"events"}
            width={1920}
            height={1080}
            className="w-[550px] h-[250px] md:h-[335px]"
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default Broadcasting;
