import React from "react";
import { Link } from "react-router-dom";

export const CommunityCard = () => {
  return (
    <>
      <Link
        to="/community"
        className="h-16 md:w-2/5 w-4/5 rounded-xl flex items-center justify-between p-2 bg-white gap-4"
      >
        <img
          src="https://cdn.discordapp.com/attachments/1069940642521825320/1069940739263443035/pepe01.png"
          alt="commlogo"
          className="h-full rounded-xl"
        />
        <div className="h-full w-auto flex flex-col items-start justify-evenly grow">
          <p className="text-sm">Nama</p>
          <p className="text-xs">Jumlah mem</p>
        </div>
        <button className="px-6 rounded-full bg-blue-500 text-sm">Join</button>
      </Link>
    </>
  );
};
