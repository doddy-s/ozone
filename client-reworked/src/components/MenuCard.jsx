import React from "react";
import { Link } from "react-router-dom";

export const MenuCard = (props) => {
  return (
    <>
      {/* menu card */}
      <Link
        to={props.to}
        className="h-14 md:h-20 w-full md:m-3 flex items-center md:justify-start justify-center md:px-9 md:py-3 gap-3 rounded-xl hover:shadow-xl hover:text-cyan-700 duration-300 ease-in-out active:bg-zinc-400 border-2 md:border-0"
      >
        {/* menu card icon */}
        <img
          src={props.icon}
          alt="Ini Icon"
          className="h-7 p-1 md:p-0 hover:fill-cyan-700"
        />
        {/* menu card text */}
        <p className="text-xl font-bold md:block hidden">{props.menu}</p>
      </Link>
    </>
  );
};
