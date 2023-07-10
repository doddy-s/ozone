import React from "react";
import { Link } from "react-router-dom";

export const MenuCard = (props) => {
  return (
    <>
      <Link
        to={props.to}
        className="h-20 w-full m-2 flex items-center md:justify-start justify-center p-2 gap-2 rounded-xl
      hover:shadow-xl"
      >
        <img
          src={props.icon}
          alt="Ini Icon"
        />
        <h1 className="text-md font-bold md:block hidden">{props.menu}</h1>
      </Link>
    </>
  );
};
