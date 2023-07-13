import React from "react";
import { Share } from "./Share";
import { PostCard } from "./PostCard";
import {
  useQuery,
  useQueryClient,
  QueryClientProvider,
} from "react-query";

export const HomeFeed = ({ getData, isPosting }) => {
  const queryClient = useQueryClient();
  const { status, data, error, isFetching } = useQuery("posts", getData, {
    refetchInterval: 10000,
  });
  // console.table(data);
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div
          id="HomeFeed"
          className="h-auto w-full flex flex-col items-start gap-4"
        >
          {isPosting && <Share />}
          {status === "loading" ? (
            <div>Loading...</div>
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
      </QueryClientProvider>
    </>
  );
};
