import { IKImage, IKUpload } from "imagekitio-react";
import React, { useRef, useState } from "react";
import { getJoinedCommunities } from "../api/community";
import { getUserDetails } from "../api/user";
import { useQuery } from "react-query";
import { Autocomplete, TextField, CircularProgress } from "@mui/material";

export const Share = () => {
  const { data: joinedComm } = useQuery("joinedComm", getJoinedCommunities);
  const { data: user } = useQuery("user", getUserDetails);
  const uploadButton = useRef(null);

  const [media, setMedia] = useState("");
  const onSuccess = ({ filePath }) => {
    setMedia(filePath);
  };

  const [upProgress, setUpProgress] = useState(0);

  return (
    <>
      <div className="h-auto w-full bg-white flex flex-col rounded-xl overflow-hidden">
        <div>
          <div className="h-auto w-full flex items-center justify-between p-4">
            <h2 className="font-bold text-lg p-2">Post Something</h2>
            <Autocomplete
              disablePortal
              id="CommJoined"
              options={joinedComm}
              getOptionLabel={(option) => option.name}
              sx={{ width: 300 }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Choose your community"
                />
              )}
            />
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
          <IKUpload
            publicKey="public_s1BPJ7fCWUf0bwtzZwxuIdHHR/8="
            urlEndpoint="https://ik.imagekit.io/miko"
            authenticationEndpoint="http://localhost:3000/imagekit"
            fileName="ozone_post"
            style={{ display: "none" }}
            inputRef={uploadButton}
            onUploadProgress={(e) => {
              setUpProgress((e.loaded / e.total) * 100);
            }}
            onSuccess={onSuccess}
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              uploadButton.current.click();
            }}
          >
            <img
              src="https://cdn.discordapp.com/attachments/1126661998063652924/1127605071228702762/picture.svg"
              alt="media"
              className="h-7 w-7 hover:animate-spin animate-none"
            />
          </button>

          <button>
            <img
              src="https://www.svgrepo.com/show/448841/send.svg"
              alt="submit"
              className="h-7 w-7 hover:animate-spin animate-none"
            />
          </button>
        </form>
        <div className="h-auto w-full flex items-center justify-center">
          {upProgress === 0 ? (
            <></>
          ) : upProgress === 100 ? (
            <IKImage
              urlEndpoint="https://ik.imagekit.io/miko"
              path={media}
              className="w-full aspect-auto"
              lqip={{ active: true, quality: 10 }}
            />
          ) : (
            <CircularProgress
              variant="determinate"
              value={upProgress}
            />
          )}
        </div>
      </div>
    </>
  );
};
