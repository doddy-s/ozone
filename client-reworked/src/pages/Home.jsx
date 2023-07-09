import React from "react";
import { HomeFeed } from "../components/HomeFeed";

export const Home = () => {
  return (
    <>
      <div className="h-full w-full flex">
        <div className="w-3/4 h-full bg-cyan-200 overflow-auto">
          <HomeFeed />
        </div>
        <div className="w-1/4 h-full bg-blue-200"></div>
      </div>
    </>
  );
};
