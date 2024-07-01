import Wrapper from "@/app/components/shared/Wrapper";

const Blog = () => {
  return (
    <>
      {/* <div className="absolute opac">
        <svg
          viewBox="0 0 1200 60"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            className="ux-shape-fill"
            opacity="0.2"
            d="M0,0 V20 Q300,50 600,20 T1200,20 V0 Z"
          ></path>
          <path
            className="ux-shape-fill"
            opacity="0.15"
            d="M0,0 V25 Q300,45 600,25 T1200,25 V0 Z"
          ></path>
          <path
            className="ux-shape-fill"
            opacity="0.1"
            d="M0,0 V30 Q300,40 600,30 T1200,30 V0 Z"
          ></path>
        </svg>
      </div> */}

      <Wrapper>
        <div>
          <h1 className="text-3xl font-bold">What Ngage can do for you</h1>
          <p className="text-lg font-medium mt-2">
            You can create your own Call of Duty Warzone clan/team to achieve
            your goals on our platform. Players and clans are given the same
            opportunity to freely discover or recruit players by creating
            profiles that best suit them. Here at NGAGE, our professional staff
            team makes sure every clan undergoes strict evaluation to check if
            they meet the game’s necessary standards or our standards. Only
            legit clans are listed for your convenience.
          </p>
          <br />
          <h1 className="text-3xl font-bold">What Ngage can do for you</h1>
          <p className="text-lg font-medium mt-2">
            You can create your own Call of Duty Warzone clan/team to achieve
            your goals on our platform. Players and clans are given the same
            opportunity to freely discover or recruit players by creating
            profiles that best suit them. Here at NGAGE, our professional staff
            team makes sure every clan undergoes strict evaluation to check if
            they meet the game’s necessary standards or our standards. Only
            legit clans are listed for your convenience.
          </p>
        </div>
      </Wrapper>
    </>
  );
};

export default Blog;
