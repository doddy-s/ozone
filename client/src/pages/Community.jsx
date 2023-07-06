import React, { useRef, useState } from "react";
import style from "../assets/css/Community.module.css";
import { createCommunity, getCommunities } from "../api/community";
import { useLoaderData, Link } from "react-router-dom";
import { IKContext, IKImage, IKUpload } from "imagekitio-react";

export const communityLoader = async () => {
  const data = await getCommunities();
  return data;
};

function Community() {
  //JS for Dialog to Create Community
  const [modal, setModal] = useState(false);
  const communities = useLoaderData();

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  console.log("Community:", communities);

  const handleJoinCommunity = (id) => {
    setCommunityData((prevData) =>
      prevData.map((community) =>
        community.id === id
          ? { ...community, joined: !community.joined }
          : community
      )
    );
  };

  const uploadButton = useRef(null);
  const [uploadPath, setUploadPath] = useState("");
  let name = "";
  let desc = "";

  const onSuccess = (result) => {
    console.log(result);
    setUploadPath(result.filePath);
  };

  const handleCreateCommunity = (e) => {
    console.log(name, desc, uploadPath);
    const { status } = createCommunity({ name, desc, media: uploadPath });
    console.log(status);
    setModal(false);
  };

  return (
    <>
      <div className={style.containerCommunity}>
        {/* Title Community Page */}
        <p className={style.descCommunityPage}>looking for community?</p>

        {/* Search Bar Community Page */}
        <div className={style.containerSeacrhCommunity}>
          <form
            action=""
            className={style.communityForm}
          >
            <input
              type="text"
              placeholder="Search"
            />
            <button type="submit">
              <img
                src="/src/assets/images/search.svg"
                alt="Search Icon"
              />
            </button>
          </form>
        </div>

        {/* Community Home Page Button */}
        <div className={style.containerCommunityContent}>
          <div className={style.containerCommunityBtn}>
            {communities?.map((community) => (
              <Link
                key={community.communityId}
                className={style.communtiyHomeBtn}
                to={"/community/" + community.communityId}
              >
                <div className={style.containerCommunityPictureBtn}>
                  <IKImage
                    urlEndpoint="https://ik.imagekit.io/miko"
                    path={community.media || "/default.png"}
                  />
                </div>
                <div className={style.containerTextCommunityBtn}>
                  <div className={style.mainTextCommunityBtn}>
                    <p className={style.titleCommunityBtn}>{community.name}</p>
                    <p className={style.followCommunityBtn}>
                      <span className={style.dotFollowCommunity}>•</span>
                      {community.memberCount} Members
                    </p>
                  </div>
                  <div className={style.subTextCommunityBtn}>
                    <p className={style.descCommunityBtn}>
                      {community.desc || "No Description"}
                    </p>
                  </div>
                </div>
                <div className={style.containerJoinCommunityBtn}>
                  <button
                    className={`${style.joinCommunityBtn} ${
                      community.joined ? style.joined : ""
                    }`}
                    onClick={() => handleJoinCommunity(community.id)}
                  >
                    {community.joined ? "Joined" : "Join"}
                  </button>
                </div>
              </Link>
            ))}
          </div>

          {/* Create Community Button */}
          <div className={style.containerCreateCommunity}>
            <div className={style.createCommunityContent}>
              <img
                src="/src/assets/images/image-create-community.png"
                alt=""
              />
              <p className={style.titleCreateCommunity}>
                connect people with community
              </p>
              <p className={style.descCreateCommunity}>
                make your community wider invite everyone to join
              </p>
              <button
                onClick={toggleModal}
                className={style.createCommunityBtn}
              >
                Create Community
              </button>
            </div>
          </div>

          {/* Modal Create Community */}
          {modal && (
            <div className={style.modal}>
              <div
                onClick={toggleModal}
                className={style.overlay}
              ></div>
              <div className={style.containerModal}>
                <div className={style.contentModal}>
                  <div className={style.headerModel}>
                    <p className={style.titleCreateCommunityModal}>
                      Create Community
                    </p>
                    <button
                      className={style.closeModal}
                      onClick={toggleModal}
                    >
                      <img
                        src="/src/assets/images/close.svg"
                        alt="close"
                      />
                    </button>
                  </div>
                  <div className={style.addBannerCommunity}>
                    {/* <img
                      className={style.bannerCommunity}
                      src="/src/assets/images/add-image-community.svg"
                      alt=""
                    /> */}
                  </div>{" "}
                  <form className={style.addDescCommunity}>
                    <div className={style.addProfilePictCommunity}>
                      <IKContext
                        publicKey="public_s1BPJ7fCWUf0bwtzZwxuIdHHR/8="
                        urlEndpoint="https://ik.imagekit.io/miko"
                        authenticationEndpoint="http://localhost:3000/imagekit"
                      >
                        <IKUpload
                          fileName="commu"
                          style={{ display: "none" }}
                          inputRef={uploadButton}
                          onSuccess={onSuccess}
                        />
                      </IKContext>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          uploadButton.current.click();
                        }}
                      >
                        <IKImage
                          urlEndpoint="https://ik.imagekit.io/miko"
                          path={uploadPath || "/default.png"}
                          className={style.bannerCommunity}
                        />
                      </button>
                    </div>

                    <input
                      id="name"
                      type="text"
                      name="name"
                      placeholder="Give your community a name"
                      onChange={(e) => (name = e.target.value)}
                    />
                    <input
                      id="description"
                      type="text"
                      name="desc"
                      placeholder="Describe your community"
                      onChange={(e) => (desc = e.target.value)}
                    />
                    <button
                      type="submit"
                      className={style.createButton}
                      onClick={handleCreateCommunity}
                    >
                      Create Community
                    </button>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Community;
