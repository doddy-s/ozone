import { IKImage } from "imagekitio-react";
import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { getUserDetails } from "../api/user";

export const UserCard = () => {
  const { status, data, error, isFetching } = useQuery("user", getUserDetails);
  return data ? (
    <>
    {/* Profile card */}
      <Link
        to="/profile"
        className="md:h-28 h-auto w-full m-2 flex items-center px-4 py-5 gap-4 bg-gray-50 rounded-2xl border-2 hover:shadow-xl duration-300 ease-in-out active:bg-zinc-400"
      >
        {/* if user logged in */}
        {/* image profile card */}
        {data?.media ? (
          <IKImage
            urlEndpoint="https://ik.imagekit.io/miko"
            path={data?.media}
            className="rounded-full h-full aspect-square mx-4 my-5"
          />
        ) : (
          <IKImage
            urlEndpoint="https://ik.imagekit.io/miko"
            path="default.png"
            className="rounded-full h-full aspect-square"
          />
        )}
        {/* Username and account name profile card */}
        <div className="md:flex flex-col items-start justify-around hidden">
          <h1 className="text-xl font-bold">{data?.name}</h1>
          <h2 className="text-xl text-neutral-500 ">{data?.Account.username}</h2>
        </div>
      </Link>
    </>
  ) : (
    // if user not logged in
    <>
      <Link to="/signin">Sign In</Link>
    </>
  );
};
