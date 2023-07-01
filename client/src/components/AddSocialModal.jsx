import React, { useState } from "react";
import style from "../assets/css/AddSocialModal.module.css";
import AddSocialDetailModal from "./AddSocialDetailModal";

function AddSocialModal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      {/* Button add social link */}
      <button className={style.addSocialLink} onClick={toggleModal}>
        <img
          src="/src/assets/images/plus.svg"
          alt="tombol"
          className={style.iconAddSocialLink}
        />
        <p className={style.textAddSocialLink}>Add Social Link</p>
      </button>

      {modal && (
        // Container modal add social link
        <div className={style.modal}>
          <div onClick={toggleModal} className={style.overlay}></div>
          <div className={style.containerModal}>
            {/* container content add socila link */}
            <div className={style.containerAddSocialLink}>
              {/* Judul dan close button */}
              <div className={style.headerModal}>
                <p className={style.titleModal}>Add Social Link</p>
                <button className={style.closeModalBtn} onClick={toggleModal}>
                  <img src="/src/assets/images/close.svg" alt="close" />
                </button>
              </div>

              {/* Button social media link */}
              <div className={style.contentModal}>
                <AddSocialDetailModal
                  src="/src/assets/images/instagram.svg"
                  name="Instagram"
                  username="@username"
                  placeholder="www.instagram.com/username"
                  alt="Instagram icon"
                />
                <AddSocialDetailModal
                  src="/src/assets/images/twitter.svg"
                  name="twitter"
                  username="@username"
                  placeholder="www.twitter.com/username"
                  alt="Instagram icon"
                />
                <AddSocialDetailModal
                  src="/src/assets/images/spotify.svg"
                  name="Spotify"
                  username="username"
                  placeholder="www.instagram.com/username"
                  alt="Instagram icon"
                />
                <AddSocialDetailModal
                  src="/src/assets/images/instagram.svg"
                  name="Instagram"
                  username="@username"
                  placeholder="www.instagram.com/username"
                  alt="Instagram icon"
                />
                <AddSocialDetailModal
                  src="/src/assets/images/twitch.svg"
                  name="Twitch"
                  username="username"
                  placeholder="www.twitch.com/username"
                  alt="Instagram icon"
                />
                <AddSocialDetailModal
                  src="/src/assets/images/discord.svg"
                  name="Discord"
                  username="username"
                  placeholder="www.discord.com/users/USER_ID"
                  alt="Instagram icon"
                />
                <AddSocialDetailModal
                  src="/src/assets/images/linktree.svg"
                  name="Linktree"
                  username="@username"
                  placeholder="www.linktr.ee/username"
                  alt="Instagram icon"
                />
                <AddSocialDetailModal
                  src="/src/assets/images/tiktok.svg"
                  name="Tiktok"
                  username="@username"
                  placeholder="www.tiktok.com/@username"
                  alt="Instagram icon"
                />
                <AddSocialDetailModal
                  src="/src/assets/images/facebook.svg"
                  name="Facebook"
                  username="username"
                  placeholder="www.facebook.com/username"
                  alt="Instagram icon"
                />
                <AddSocialDetailModal
                  src="/src/assets/images/youtube.svg"
                  name="Youtube"
                  username="username"
                  placeholder="https://www.youtube.com/@username"
                  alt="Instagram icon"
                />
                <AddSocialDetailModal
                  src="/src/assets/images/add-url.svg"
                  name="Add Url"
                  username="username"
                  placeholder="link"
                  alt="Instagram icon"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AddSocialModal;
