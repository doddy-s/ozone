import React from "react";

export const CreateCommunity = () => {
  return (
    <>
      <div className="h-auto w-full flex flex-col items-center justify-between rounded-xl overflow-hidden gap-2 bg-white pb-2">
        <img
          src="https://cdn.discordapp.com/attachments/1069940642521825320/1070109666299887636/kung-fu-panda-master-oogway.gif"
          alt="banncc"
          className="w-full aspect-video"
        />
        <h1 className="text-sm text-center m-2">Connect people with community</h1>
        <p className="text-xs text-center m-2">
          make your community wider invite everyone to join
        </p>
        <button className="px-2 rounded-full text-xl border-2 border-blue-400 text-blue-400 mx-2">
          Create Community
        </button>
      </div>
    </>
  );
};
