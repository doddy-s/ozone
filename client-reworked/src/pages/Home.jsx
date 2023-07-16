import React from "react";
import { HomeFeed } from "../components/HomeFeed";
import { TrendingBox } from "../components/TrendingBox";
import { getPostsByJoinedCommunities } from "../api/post";

export const Home = () => {
  return (
    <>
      {/* Home container */}
      <div className="h-full w-full flex">
        {/* content container*/}
        <div className="w-full h-full overflow-auto p-4">
          <HomeFeed
            queryKey={"homeFeed"}
            getData={getPostsByJoinedCommunities}
            isPosting={true}
          />
        </div>
        {/* trending  container*/}
        <div
          className="w-1/3 h-full p-4
          hidden xl:block"
        >
          <TrendingBox />
        </div>
      </div>
    </>
  );
};
