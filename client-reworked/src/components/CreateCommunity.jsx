import React from "react";

export const CreateCommunity = () => {
  return (
    <>
      <div className="h-1/2 w-full flex flex-col items-center rounded-3xl overflow-hidden gap-4 bg-white pb-2">
        <img
          src="https://cdn.discordapp.com/attachments/1069940642521825320/1070109666299887636/kung-fu-panda-master-oogway.gif"
          alt="banncc"
          className="h-32 w-full aspect-video bg-cover bg-center"
        />
        <h1 className="text-center mx-8 text-neutral-700 font-medium text-base">Connect people with community</h1>
        <p className="text-sm text-center mx-8 text-neutral-500 flex-wrap">
          make your community wider invite everyone to join
        </p>
        <button className="px-11 py-3 mt-auto mb-3 mx-3 rounded-full text-sm border-2 border-blue-500 text-blue-500 hover:bg-blue-200 active:bg-blue-400 active:text-white duration-300 ease-in-out">
          Create Community
        </button>
      </div>
    </>
  );
};
