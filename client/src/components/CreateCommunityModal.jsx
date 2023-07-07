import React, { useRef, useState } from "react";
import style from "../assets/css/CreateCommunityModal.module.css";
import { createCommunity, getCommunities } from "../api/community";
import { IKContext, IKImage, IKUpload } from "imagekitio-react";
import { useNavigate } from "react-router-dom";

const CreateCommunityModal = () => {
  //JS for Dialog to edit profile
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  const uploadButton = useRef(null);
  const [uploadPath, setUploadPath] = useState("");
  let name = "";
  let desc = "";

  const onSuccess = (result) => {
    console.log(result);
    setUploadPath(result.filePath);
  };

  const navigate = useNavigate();

  const handleCreateCommunity = async (e) => {
    e.preventDefault();
    console.log(name, desc, uploadPath);
    const data = await createCommunity({ name, desc, media: uploadPath });
    console.log("community created", data);
    setModal(false);
    navigate("/community/"+data.communityId);
  };

  return (
    <>
      <button
        onClick={toggleModal}
        className={style.createCommunityBtn}
      >
        Create Community
      </button>

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
                <textarea
                  id="description"
                  type="text"
                  name="desc"
                  placeholder="Describe your community"
                  onChange={(e) => (desc = e.target.value)}
                ></textarea>
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
    </>
  );
};
export default CreateCommunityModal;
