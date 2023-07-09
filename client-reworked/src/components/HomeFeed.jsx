import React from "react";
import { Share } from "./Share";
import { PostCard } from "./PostCard";

export const HomeFeed = () => {
  return (
    <>
      <div
        id="HomeFeed"
        className="h-auto w-full flex flex-col items-start gap-4 p-4"
      >
        <Share />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </>
  );
};
