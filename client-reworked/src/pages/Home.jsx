import React from "react";
import { HomeFeed } from "../components/HomeFeed";
import { TrendingBox } from "../components/TrendingBox";
import { getPostsByJoinedCommunities } from "../api/post";

export const Home = () => {
  return (
    <>
      <div className="h-full w-full flex">
        <div className="w-full h-full overflow-auto p-4">
          <HomeFeed queryKey={"homeFeed"} getData={getPostsByJoinedCommunities} isPosting={true} />
        </div>
        <div
          className="w-2/5 h-full p-4
          hidden xl:block"
        >
          <TrendingBox />
        </div>
      </div>
    </>
  );
};
