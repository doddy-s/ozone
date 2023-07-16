import React from "react";

export const SearchBox = () => {
  return (
    <>
    {/* searching box */}
      <form className="w-full md:w-1/2 flex items-center justify-between border-2 p-4 rounded-3xl bg-white">
        {/* searching text */}
        <input
          type="text"
          placeholder="Search"
          className="outline-none w-full"
        />
        {/* searching icon */}
        <button type="submit">
          <img
            src="https://cdn.discordapp.com/attachments/1126661998063652924/1127434995414347886/search.svg"
            alt="Search Icon"
          />
        </button>
      </form>
    </>
  );
};
