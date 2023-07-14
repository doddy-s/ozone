import React from "react";
import { getPosts } from "../api/post";
import { HomeFeed } from "../components/HomeFeed";

export const Popular = () => {
  return (
    <>
      <div className="h-full w-full flex">
        <div className="w-3/5 h-full overflow-auto p-4">
          <HomeFeed queryKey={"pupularFeed"} getData={getPosts} isPosting={false}/>
        </div>
      </div>
    </>
  );
};
