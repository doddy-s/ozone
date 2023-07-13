import React from "react";
import { SearchBox } from "./SearchBox";

export const Header = () => {
  return (
    <>
      <div className="h-full w-full flex items-center justify-start p-2">
        <div className="h-full md:w-60 w-20 flex items-center justify-center">
          <img
            src="https://cdn.discordapp.com/attachments/1126661998063652924/1126670001848455220/ozone-logo.svg"
            alt="ozone_logo"
            className="p-0 hidden md:block"
          />
          <img
            src="https://cdn.discordapp.com/attachments/1126661998063652924/1126666124772249630/ozone-icon.svg"
            alt="ozone_logo"
            className="p-0 h-8 aspect-square block md:hidden"
          />
        </div>
        <div className="w-full flex items-center justify-start pl-2">
          <SearchBox />
        </div>
      </div>
    </>
  );
};
