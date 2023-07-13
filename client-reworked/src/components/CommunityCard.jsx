import { IKImage } from "imagekitio-react";
import React from "react";
import { Link } from "react-router-dom";

export const CommunityCard = ({community}) => {
  return (
    <>
      <Link
        to="/community"
        className="h-16 md:w-2/5 w-4/5 rounded-xl flex items-center justify-between p-2 bg-white gap-4"
      >
        {community?.media ? (
          <IKImage
            urlEndpoint="https://ik.imagekit.io/miko"
            path={community?.media}
            className="rounded-xl h-full aspect-square"
          />
        ) : (
          <IKImage
            urlEndpoint="https://ik.imagekit.io/miko"
            path="default.png"
            className="rounded-xl h-full aspect-square"
          />
        )}
        <div className="h-full w-auto flex flex-col items-start justify-evenly grow">
          <p className="text-sm">{community?.name}</p>
          <p className="text-xs">{community?.memberCount} members</p>
        </div>
        <button className="px-6 rounded-full bg-blue-500 text-sm">Join</button>
      </Link>
    </>
  );
};
