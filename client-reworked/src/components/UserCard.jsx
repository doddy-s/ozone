import { IKImage } from "imagekitio-react";
import React from "react";
import { Link } from "react-router-dom";

export const UserCard = ({ user }) => {
  return (
    <>
      <Link
        to="/profile"
        className="md:h-20 h-auto w-full m-2 flex items-center justify-center p-2 gap-2 bg-gray-200 rounded-xl border-2"
      >
        {user?.media ? (
          <IKImage
            urlEndpoint="https://ik.imagekit.io/miko"
            path={user?.media}
            className="rounded-full h-full aspect-square"
          />
        ) : (
          <IKImage
            urlEndpoint="https://ik.imagekit.io/miko"
            path="default.png"
            className="rounded-full h-full aspect-square"
          />
        )}
        <div className="md:flex flex-col items-start justify-around hidden">
          <h1 className="text-md font-bold">Doddy</h1>
          <h2 className="text-gray-800 text-sm">@username</h2>
        </div>
      </Link>
    </>
  );
};
