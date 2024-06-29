import Image from "next/image";
import Wrapper from "../shared/Wrapper";

const Community = () => {
  return (
    <Wrapper>
      <div className="flex flex-row mt-16 gap-x-6">
        <div className="mt-8 w-[510px] flex-shrink-0">
          <Image
            src={"/media/community.jpg"}
            alt={"events"}
            width={1920}
            height={1080}
            className="w-[510px]  h-[315px] "
          />
        </div>
        <div className="flex-grow">
          <h1 className="text-3xl">Community</h1>
          <p className="font-medium mt-5 text-base">
            There is no esports without its people, and there would be no brand
            if the esports community has no reason to trust it. As our community
            is everything to us, we aim to build new gaming experiences in
            support of them, keeping true to the spirit of the people and
            cultures that make it all worthwhile.
          </p>
          <div className="mt-5 space-y-2">
            {[
              { href: "", text: "Meetups" },
              { href: "", text: "Brand Development" },
              { href: "", text: "Fundraiser" },
              { href: "", text: "Competitive Events" },
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
      </div>
    </Wrapper>
  );
};

export default Community;
