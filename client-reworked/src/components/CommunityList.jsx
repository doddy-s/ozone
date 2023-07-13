import React from "react";
import { CommunityCard } from "./CommunityCard";

export const CommunityList = ({comminities}) => {
  return (
    <>
      <div className="h-auto w-full flex flex-col md:flex-row flex-wrap gap-4
      items-center justify-start">
        {comminities?.map((community) => (
          <CommunityCard key={community.communityId} community={community} />
        ))}
      </div>
    </>
  );
};
