import React from "react";

export const Share = () => {
  return (
    <>
      <div className="h-auto w-4/5 bg-white flex flex-col rounded-xl">
        <div>
          <h2 className="font-bold text-xl p-4">Post Something</h2>
          <hr />
        </div>
        <div className="h-32 p-6 flex items-center justify-between gap-4">
          <img
            src="https://github.com/AUTOMATIC1111.png"
            alt="ProfilePhoto"
            className="rounded-full h-3/4 aspect-square"
          />
          <input
            type="text"
            name="content"
            id="content"
            placeholder="Your text here...."
            className="h-10 w-4/5 rounded-xl outline-none"
          />
          <img
            src="https://cdn.discordapp.com/attachments/1126661998063652924/1127605071228702762/picture.svg"
            alt="media"
          />
          <img
            src="https://cdn.discordapp.com/attachments/1126661998063652924/1127605121661030430/send.svg "
            alt="submit"
          />
        </div>
      </div>
    </>
  );
};
