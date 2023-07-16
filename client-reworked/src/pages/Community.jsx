import React from "react";
import { CommunityList } from "../components/CommunityList";
import { CreateCommunity } from "../components/CreateCommunity";
import { CommunitySearchBox } from "../components/CommunitySearchBox";
import { useQuery, useQueryClient, QueryClientProvider } from "react-query";
import { getCommunities } from "../api/community";

export const Community = () => {
  const { status, data : popComm, error, isFetching } = useQuery(
    "communities",
    getCommunities
  );

  return (
    <>
      <div className="h-full w-full flex flex-col items-center justify-center">
        <div className="h-1/6 w-full flex flex-col pt-7 px-6 xl:px-12 items-start gap-4 bg-neutral-100">
          <p className="w-full text-neutral-600 text-base font-normal">Looking for community?</p>
          <CommunitySearchBox />
        </div>
        <div className="h-5/6 w-full flex bg-neutral-100 px-6 xl:px-12">
          <div className="h-full w-full overflow-auto">
            <CommunityList comminities={popComm} />
          </div>
          <div className="h-full w-1/5 xl:w-1/4 flex-row-reverse flex-wrap hidden xl:block">
            <CreateCommunity />
          </div>
        </div>
      </div>
    </>
  );
};
