import React from "react";
import { CommunityList } from "../components/CommunityList";
import { CreateCommunity } from "../components/CreateCommunity";

export const Community = () => {
  return (
    <>
      <div className="h-full w-full flex flex-col items-center justify-center">
        <div className="h-full w-full bg-pink-300"></div>
        <div className="h-[90%] w-full flex">
          <div className="h-full w-full overflow-auto">
            <CommunityList />
          </div>
          <div className="h-full w-1/3 hidden md:block bg-red-200 p-4">
            <CreateCommunity />
          </div>
        </div>
      </div>
    </>
  );
};
