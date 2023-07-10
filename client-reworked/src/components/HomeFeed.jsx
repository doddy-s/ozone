import React from "react";
import { Share } from "./Share";
import { PostCard } from "./PostCard";
import {
  useQuery,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";
import { getPosts } from "../api/post";
export const HomeFeed = () => {
  const queryClient = useQueryClient();
  const { status, data, error, isFetching } = useQuery("posts", getPosts, {
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
          <Share />
          {status === "loading" ? (
            <div>Loading...</div>
          ) : status === "error" ? (
            <div>Error: {error.message}</div>
          ) : (
            <>
              {data.map((post) => (
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