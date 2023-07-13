import React from "react";
import { CommunityCard } from "./CommunityCard";

export const CommunityList = () => {
  return (
    <>
      <div className="h-auto md:h-full w-full bg-yellow-200 flex flex-col md:flex-row flex-wrap gap-4
      items-center justify-evenly p-4">
        <CommunityCard />
        <CommunityCard />
        <CommunityCard />
        <CommunityCard />
        <CommunityCard />
        <CommunityCard />
        <CommunityCard />
        <CommunityCard />
        <CommunityCard />
        <CommunityCard />
        <CommunityCard />
        <CommunityCard />
      </div>
    </>
  );
};
