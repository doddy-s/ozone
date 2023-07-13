import React from "react";
import { CommunityCard } from "./CommunityCard";

export const CommunityList = () => {
  return (
    <>
      <div className="h-auto w-full flex flex-col md:flex-row flex-wrap gap-4
      items-center justify-start">
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
