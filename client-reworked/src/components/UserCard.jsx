import React from "react";

export const UserCard = () => {
  return (
    <>
      <div className="md:h-20 h-auto w-full m-2 flex items-center justify-center p-2 gap-2 bg-gray-200 rounded-xl border-2">
        <img
          src="https://github.com/AUTOMATIC1111.png"
          alt="ProfilePhoto"
          className="rounded-full h-full aspect-square"
        />
        <div className="md:flex flex-col items-start justify-around hidden">
          <h1 className="text-md font-bold">Doddy</h1>
          <h2 className="text-gray-800 text-sm">@username</h2>
        </div>
      </div>
    </>
  );
};
