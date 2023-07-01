import React, { useState } from "react";
import style from "../assets/css/AddSocialModal.module.css";
import AddSocialDetailModal from "./AddSocialDetailModal"

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
      <button className={style.addSocialLink} onClick={toggleModal}>
        <img
          src="/src/assets/images/plus.svg"
          alt="tombol"
          className={style.iconAddSocialLink}
        />
        <p className={style.textAddSocialLink}>Add Social Link</p>
      </button>

      {modal && (
        <div className={style.modal}>
          <div onClick={toggleModal} className={style.overlay}></div>
          <div className={style.containerModal}>
            <div className={style.containerAddSocialLink}>
              <div className={style.headerModal}>
                <p className={style.titleModal}>Add Social Link</p>
                <button className={style.closeModalBtn} onClick={toggleModal}>
                  <img src="/src/assets/images/close.svg" alt="close" />
                </button>
              </div>
              
              <div className={style.contentModal}>
                <AddSocialDetailModal/>

              
                {/* <button className={style.socialLinkBtn}>
                  <img className={style.socialLinkIcon} src="/src/assets/images/instagram.svg" alt="" />
                  <p className={style.SocialLinkText}>Instagram</p>
                </button>
                <button className={style.socialLinkBtn}>
                  <img className={style.socialLinkIcon} src="/src/assets/images/twitter.svg" alt="" />
                  <p className={style.SocialLinkText}>Twitter</p>
                </button>
                <button className={style.socialLinkBtn}>
                  <img className={style.socialLinkIcon} src="/src/assets/images/spotify.svg" alt="" />
                  <p className={style.SocialLinkText}>Spotify</p>
                </button>
                <button className={style.socialLinkBtn}>
                  <img className={style.socialLinkIcon} src="/src/assets/images/instagram.svg" alt="" />
                  <p className={style.SocialLinkText}>Instagram</p>
                </button>
                <button className={style.socialLinkBtn}>
                  <img className={style.socialLinkIcon} src="/src/assets/images/twitch.svg" alt="" />
                  <p className={style.SocialLinkText}>Twitch</p>
                </button>
                <button className={style.socialLinkBtn}>
                  <img className={style.socialLinkIcon} src="/src/assets/images/discord.svg" alt="" />
                  <p className={style.SocialLinkText}>Discord</p>
                </button>
                <button className={style.socialLinkBtn}>
                  <img className={style.socialLinkIcon} src="/src/assets/images/linktree.svg" alt="" />
                  <p className={style.SocialLinkText}>Linktree</p>
                </button>
                <button className={style.socialLinkBtn}>
                  <img className={style.socialLinkIcon} src="/src/assets/images/tiktok.svg" alt="" />
                  <p className={style.SocialLinkText}>Tiktok</p>
                </button>
                <button className={style.socialLinkBtn}>
                  <img className={style.socialLinkIcon} src="/src/assets/images/facebook.svg" alt="" />
                  <p className={style.SocialLinkText}>Facebook</p>
                </button>
                <button className={style.socialLinkBtn}>
                  <img className={style.socialLinkIcon} src="/src/assets/images/youtube.svg" alt="" />
                  <p className={style.SocialLinkText}>Youtube</p>
                </button>
                <button className={style.socialLinkBtn}>
                  <img className={style.socialLinkIcon} src="/src/assets/images/add-url.svg" alt="" />
                  <p className={style.SocialLinkText}>Add Url</p>
                </button> */}
              </div>
             
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AddSocialModal;
