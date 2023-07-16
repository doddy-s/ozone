import React from "react";
import { Share } from "./Share";
import { PostCard } from "./PostCard";
import { useQuery } from "react-query";

export const HomeFeed = ({ getData, queryKey, isPosting }) => {
  const { status, data, error, isFetching } = useQuery(queryKey, getData, {
    refetchInterval: 10000,
  });

  return (
    <>
      <div
        id="HomeFeed"
        className="h-auto w-full flex flex-col items-start gap-4"
      >
        {isPosting && <Share />}
        {status === "loading" ? (
          <div className="h-auto w-full flex items-center justify-center p-10">
            <img
              src="https://www.svgrepo.com/show/387964/loading.svg"
              alt="loading"
              className="h-7 aspect-square animate-spin"
            />
          </div>
        ) : status === "error" ? (
          <div>Error: {error.message}</div>
        ) : (
          <>
            {data?.map((post) => (
              <PostCard
                key={post.postId}
                post={post}
              />
            ))}
          </>
        )}
      </div>
    </>
  );
};
