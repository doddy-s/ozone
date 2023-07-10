import React from "react";

export const PostCard = () => {
  return (
    <>
      <div className="h-auto w-full bg-white flex flex-col rounded-xl">
        <div className="h-24 flex items-start">
          <div className="h-full aspect-square flex items-center justify-center">
            <img
              src="https://github.com/AUTOMATIC1111.png"
              alt="ProfilePhoto"
              className="rounded-full h-3/5 aspect-square"
            />
          </div>

          <div className="h-full flex flex-col items-start justify-center">
            <div className="flex items-center justify-start gap-2">
              <h2 className="font-bold text-lg">Nama</h2>
              <h3 className="text-md">posted on</h3>
            </div>
            <h4 className="text-md">Time</h4>
          </div>
        </div>

        <button className="h-auto p-6 flex flex-col items-start justify-start gap-4">
          <p className="text-left">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum,
            quam?
          </p>
          <img
            src="https://github.com/AUTOMATIC1111.png"
            alt="ProfilePhoto"
            className="rounded-xl aspect-square"
          />
        </button>

        <hr />

        <div className="h-16 flex items-center justify-start px-6 gap-2">
          <div className="flex items-center justify-center gap-1">
            <img
              src="https://cdn.discordapp.com/attachments/1126661998063652924/1127432254537355284/home.svg"
              alt="like"
            />
            <h4 className="text-sm">0 Likes</h4>
          </div>
          <div className="flex items-center justify-center gap-1">
            <img
              src="https://cdn.discordapp.com/attachments/1126661998063652924/1127604582411927582/comment.svg"
              alt="comment"
            />
            <h4 className="text-sm">0 Comments</h4>
          </div>
        </div>
      </div>
    </>
  );
};
