import React from "react";
import { Link } from "react-router-dom";

export const MenuCard = (props) => {
  return (
    <>
      <Link
        to={props.to}
        className=" h-20 w-full m-3 flex items-center md:justify-start justify-center px-9 py-3 gap-3 rounded-xl hover:shadow-xl hover:text-cyan-700 duration-300 ease-in-out active:bg-zinc-400"
      >
        <img src={props.icon} alt="Ini Icon" className="h-7 hover:fill-cyan-700"/>
        <p className="text-xl font-bold md:block hidden">{props.menu}</p>
      </Link>
    </>
  );
};
