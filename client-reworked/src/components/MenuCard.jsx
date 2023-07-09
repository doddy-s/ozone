import React from "react";
import { Link } from "react-router-dom";

export const MenuCard = (props) => {
  return (
    <>
      <Link
        to={props.to}
        className="h-20 w-full m-2 flex items-center justify-start p-4 gap-4 rounded-xl
      hover:shadow-xl"
      >
        <img
          src={props.icon}
          alt="Ini Icon"
        />
        <h1 className="text-xl font-bold">{props.menu}</h1>
      </Link>
    </>
  );
};
