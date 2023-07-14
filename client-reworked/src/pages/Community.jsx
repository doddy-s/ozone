import React from "react";
import { CommunityList } from "../components/CommunityList";
import { CreateCommunity } from "../components/CreateCommunity";
import { CommunitySearchBox } from "../components/CommunitySearchBox";
import { useQuery, useQueryClient, QueryClientProvider } from "react-query";
import { getCommunities } from "../api/community";

export const Community = () => {
  const { status, data, error, isFetching } = useQuery(
    "communities",
    getCommunities
  );

  return (
    <>
      <div className="h-full w-full flex flex-col items-center justify-center">
        <div className="h-1/6 w-full flex flex-col items-start justify-evenly gap-4 p-6">
          <h1>Looking for community?</h1>
          <CommunitySearchBox />
        </div>
        <div className="h-5/6 w-full flex">
          <div className="h-full w-full overflow-auto p-6">
            <CommunityList comminities={data} />
          </div>
          <div className="h-full w-1/3 hidden md:block p-4">
            <CreateCommunity />
          </div>
        </div>
      </div>
    </>
  );
};
