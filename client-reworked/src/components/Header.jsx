import React from "react";
import { SearchBox } from "./SearchBox";
import { Setting } from "./Setting";

export const Header = () => {
  return (
    <>
    {/* Container Header */}
      <div className="h-28 w-full flex items-center justify-start p-9 bg-white drop-shadow-lg">
        <div className="h-full w-20 md:w-96 flex items-center">
          {/* Logo at desktop */}
          <img
            src="https://cdn.discordapp.com/attachments/1126661998063652924/1126670001848455220/ozone-logo.svg"
            alt="ozone_logo"
            className="p-0 hidden md:block"
          />
          {/* logo at handphone */}
          <img
            src="https://cdn.discordapp.com/attachments/1126661998063652924/1126666124772249630/ozone-icon.svg"
            alt="ozone_logo"
            className="p-0 h-8 aspect-square block md:hidden"
          />
        </div>
        <div className="w-full h-full flex items-center justify-between px-2 gap-4">
          {/* Searchin box */}
          <SearchBox />
          {/* Setting */}
          <Setting />
        </div>
      </div>
    </>
  );
};
