import React, { useState } from "react";
import style from "../assets/css/AddSocialDetailModal.module.css";

const AddSocialDetailModal = ({ src, name, username ,placeholder, alt }) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      {/* Social Media Link Button */}
      <button className={style.socialLinkBtn} onClick={toggleModal}>
        <img className={style.socialLinkIcon} src={src} alt={alt} />
        <p className={style.SocialLinkText}>{name}</p>
      </button>

      {modal && (
        <div className={style.containerAddDetail}>
          {/* Button Close Modal Edit Profile Picture */}
          <div className={style.headerModal}>
            {/* Judul dan close button model */}
            <p className={style.titleModal}>Add Social Link</p>
            <button className={style.closeModalBtn} onClick={toggleModal}>
              <img src="/src/assets/images/close.svg" alt="close" />
            </button>
          </div>
          {/* Add Social Media link information */}
          <div className={style.socialMedia}>
            <img className={style.socialLinkIcon} src={src} alt={alt} />
            <p className={style.SocialLinkText}>{name}</p>
          </div>

          {/* Form Display name */}
          <p className={style.displayName}>Display Name</p>
          <form className={style.displayNameForm} action="">
            <input
              id="displayname"
              type="text"
              placeholder={username}
              name="displayname"
            />
          </form>

          {/* Form Url Link */}
          <p className={style.displayName}>Url link</p>
          <form className={style.displayNameForm} action="">
            <input id="url" type="text" placeholder={placeholder} name="url" />
          </form>

          {/* Save Button */}
          <button className={style.saveBtn}>Save</button>
        </div>
      )}
    </>
  );
};

export default AddSocialDetailModal;
