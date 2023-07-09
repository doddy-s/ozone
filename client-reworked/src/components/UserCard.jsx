import React from "react";

export const UserCard = () => {
  return (
    <>
      <div className="h-20 w-full m-2 flex items-center justify-center p-2 gap-4 bg-gray-100 rounded-xl border-2">
        <img
          src="https://github.com/AUTOMATIC1111.png"
          alt="ProfilePhoto"
          className="rounded-full h-full aspect-square"
        />
        <div className="flex flex-col items-start justify-around">
          <h1 className="text-xl font-bold">Doddy</h1>
          <h2 className="text-gray-800 text-lg">@username</h2>
        </div>
      </div>
    </>
  );
};
