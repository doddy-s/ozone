import React from "react";
import { SearchBox } from "./SearchBox";
import { Setting } from "./Setting";

export const Header = () => {
  return (
    <>
      <div className="h-full w-full flex items-center justify-start p-2 bg-white dark:bg-black">
        <div className="h-full w-60 flex items-center justify-center">
          <img
            src="https://cdn.discordapp.com/attachments/1126661998063652924/1126670001848455220/ozone-logo.svg"
            alt="ozone_logo"
            className="p-0"
          />
        </div>
        <div className="w-full flex items-center justify-between px-2">
          <SearchBox />
          <Setting />
        </div>
      </div>
    </>
  );
};
