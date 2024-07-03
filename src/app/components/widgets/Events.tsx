import Image from "next/image";
import Wrapper from "../shared/Wrapper";

const Events = () => {
  return (
    <Wrapper>
      <div className="flex flex-col md:flex-row mt-16 gap-x-6">
        <div className="mt-8  flex-shrink-0">
          <Image
            src={"/media/events.jpg"}
            alt={"events"}
            width={1920}
            height={1080}
            className="w-[510px] "
          />
        </div>
        <div className="flex-grow mt-5">
          <h1 className="text-3xl">Events</h1>
          <p className="font-medium mt-5 text-base">
            The gaming community’s standards don’t just demand the best out of
            esports events – they demand evolution. What was a world-class
            production last year is this year’s baseline expectations, spurring
            a constant churn of innovation and creativity. Thankfully, that is
            exactly what NGAGE is geared to do, bringing the most exciting
            esports experiences for gamers around the world.
          </p>
          <div className="mt-5 space-y-2">
            {[
              { href: "", text: "Tournaments" },
              { href: "", text: "Community Building" },
              { href: "", text: "Fan Experience" },
              { href: "", text: "Recreational" },
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

export default Events;
