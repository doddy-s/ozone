import { IKImage } from "imagekitio-react";
import React, { useEffect, useState } from "react";
import { getJoinedCommunities } from "../api/community";

export const Share = ({ user }) => {
  const [comm, setComm] = useState([]);
  useEffect(() => {
    const getCommunity = async () => {
      try {
        const data = await getJoinedCommunities();
        setComm(data);
      } catch (error) {
        console.log(error);
      }
    };
    getCommunity();
  }, []);

  return (
    <>
      <div className="h-auto w-full bg-white flex flex-col rounded-xl">
        <div>
          <div className="h-auto w-full flex items-center justify-between p-4">
            <h2 className="font-bold text-lg p-2">Post Something</h2>
            <select
              name="comm"
              id="comm"
              className="min-w-[12rem] p-1 rounded-xl"
            >
              <option value="">Select your community</option>
              {comm?.map((c) => (
                <option value={c.communityId}>{c.name}</option>
              ))}
            </select>
          </div>

          <hr />
        </div>
        <form className="h-32 p-6 flex items-center justify-between gap-4">
          {user?.media ? (
            <IKImage
              urlEndpoint="https://ik.imagekit.io/miko"
              path={user?.media}
              className="rounded-full h-3/4 aspect-square"
            />
          ) : (
            <IKImage
              urlEndpoint="https://ik.imagekit.io/miko"
              path="default.png"
              className="rounded-full h-3/4 aspect-square"
            />
          )}
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
        </form>
      </div>
    </>
  );
};
