import React from "react";

export const TrendingBox = () => {
  return (
    <>
      <div className="h-auto w-full flex flex-col items-start justify-start bg-white rounded-xl">
        <h1 className="text-lg font-bold p-4">Trendings</h1>
        <hr />
        <TrendingBoxChild />
        <TrendingBoxChild />
        <TrendingBoxChild />
        <TrendingBoxChild />
        <TrendingBoxChild />
        <TrendingBoxChild />
      </div>
    </>
  );
};

export const TrendingBoxChild = () => {
  return (
    <div className="h-16 flex items-start">
      <div className="h-full aspect-square flex items-center justify-center">
        <h2 className="text-2xl">#</h2>
      </div>

      <div className="h-full flex flex-col items-start justify-center">
        <h2 className="text-md">Tag</h2>
        <h4 className="text-sm">postcount</h4>
      </div>
    </div>
  );
};
