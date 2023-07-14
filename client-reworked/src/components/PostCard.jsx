import React from "react";
import { IKImage } from "imagekitio-react";
import moment from "moment";

export const PostCard = ({ post }) => {
  return (
    <>
      <div className="h-auto w-full bg-white flex flex-col rounded-xl">
        <div className="h-24 flex items-start">
          <div className="h-full aspect-square flex items-center justify-center">
            {post.User.media ? (
              <IKImage
                urlEndpoint="https://ik.imagekit.io/miko"
                path={post.User.media}
                className="rounded-full h-3/5 aspect-square"
              />
            ) : (
              <IKImage
                urlEndpoint="https://ik.imagekit.io/miko"
                path="default.png"
                className="rounded-full h-3/5 aspect-square"
              />
            )}
          </div>

          <div className="h-full flex flex-col items-start justify-center">
            <div className="flex items-center justify-start gap-2">
              <h2 className="font-bold text-lg">{post.User.name}</h2>
              <h3 className="text-md">posted on {post.Community.name}</h3>
            </div>
            <h4 className="text-md">{moment(post.createdAt).fromNow()}</h4>
          </div>
        </div>

        <button className="h-auto p-6 flex flex-col items-start justify-start gap-4">
          <p className="text-left">{post?.content}</p>
          {post?.media && (
            <IKImage
              urlEndpoint="https://ik.imagekit.io/miko"
              path={post.media}
              className="w-1/2 rounded-xl aspect-auto"
            />
          )}
        </button>

        <hr />

        <div className="h-16 flex items-center justify-start px-6 gap-4">
          <div className="flex items-center justify-center gap-1">
            <img
              src="https://www.svgrepo.com/show/448796/like.svg"
              alt="like"
              className="h-5 w-5"
            />
            <h4 className="text-sm">0 Likes</h4>
          </div>
          <div className="flex items-center justify-center gap-1">
            <img
              src="https://cdn.discordapp.com/attachments/1126661998063652924/1127604582411927582/comment.svg"
              alt="comment"
              className="h-5 w-5"
            />
            <h4 className="text-sm">0 Comments</h4>
          </div>
        </div>
      </div>
    </>
  );
};
