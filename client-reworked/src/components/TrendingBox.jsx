import React from "react";

export const TrendingBox = () => {
  return (
    <>
    {/* trending card container */}
      <div className="h-auto w-full pb-6 flex flex-col items-start justify-start bg-white rounded-xl gap-y-1">
        {/* trending card title */}
        <div className="h-auto w-full text-lg font-bold p-4 border-b-2 text-neutral-700" >Trendings</div>
        {/* trending card content */}
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

/* trending card content component*/
export const TrendingBoxChild = () => {
  return (
    <div className="h-16 flex items-start">
      <div className="h-full aspect-square flex items-center justify-center">
        <h2 className="text-2xl text-neutral-700">#</h2>
      </div>

      <div className="h-full flex flex-col items-start justify-center">
        <h2 className="text-md text-neutral-700">Tag</h2>
        <h4 className="text-sm text-neutral-700">postcount</h4>
      </div>
    </div>
  );
};
