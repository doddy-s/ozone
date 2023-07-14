import { IKImage } from "imagekitio-react";
import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { getUserDetails } from "../api/user";

export const UserCard = () => {
  const { status, data, error, isFetching } = useQuery("user", getUserDetails);
  return data ? (
    <>
      <Link
        to="/profile"
        className="md:h-20 h-auto w-full m-2 flex items-center justify-center p-2 gap-2 bg-gray-200 rounded-xl border-2"
      >
        {data?.media ? (
          <IKImage
            urlEndpoint="https://ik.imagekit.io/miko"
            path={data?.media}
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
          <h1 className="text-md font-bold">{data?.name}</h1>
          <h2 className="text-gray-800 text-sm">{data?.Account.username}</h2>
        </div>
      </Link>
    </>
  ) : (
    <>
      <Link to="/signin">Sign In</Link>
    </>
  );
};
