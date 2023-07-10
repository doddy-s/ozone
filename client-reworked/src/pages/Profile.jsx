import React from "react";
import { HomeFeed } from "../components/HomeFeed";
import { SocialBox } from "../components/SocialBox";

export const Profile = () => {
  return (
    <>
      <div className="h-full w-full flex flex-col overflow-auto">
        <div className="h-64 w-full">
          <img
            src="https://cdn.discordapp.com/attachments/1069940642521825320/1070350480552771764/dmc5.jpg"
            alt="Banner"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="h-16 w-full flex items-center justify-between px-2 md:px-12 sticky top-0 bg-white">
          <img
            src="https://cdn.discordapp.com/attachments/1069940642521825320/1070350480552771764/dmc5.jpg"
            alt="Banner"
            className="h-full sm:h-[150%] md:h-[300%] aspect-square rounded-full object-cover z-10"
          />
          <button className="bg-gray-200 hover:bg-gray-400 duration-300 p-2 rounded-full flex items-center justify-center gap-2">
            <img
              src="https://cdn.discordapp.com/attachments/1126661998063652924/1127892598661586964/edit_profile.svg"
              alt="edit-icon"
            />
            Edit Profile
          </button>
        </div>
        <div>
          <div className="h-full w-full flex bg-gray-200 pt-16">
            <div className="w-2/5 h-full p-4 hidden xl:block">
              <SocialBox />
            </div>
            <div className="w-full h-full overflow-auto p-4">
              <HomeFeed />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
