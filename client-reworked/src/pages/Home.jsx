import React from "react";
import { HomeFeed } from "../components/HomeFeed";
import { TrendingBox } from "../components/TrendingBox";

export const Home = () => {
  return (
    <>
      <div className="h-full w-full flex bg-gray-200">
        <div className="w-full h-full overflow-auto p-4">
          <HomeFeed />
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
