import React, { useState } from "react";
import style from "../assets/css/AddSocialDetailModal.module.css";

function AddSocialDetailModal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <button className={style.socialLinkBtn} onClick={toggleModal}>
        <img
          className={style.socialLinkIcon}
          src="/src/assets/images/instagram.svg"
          alt=""
        />
        <p className={style.SocialLinkText}>Instagram</p>
      </button>

      {modal && (
        <div className={style.containerAddDetail}>
          {/* Button Close Modal Edit Profile Picture */}
          <div className={style.headerModal}>
            <p className={style.titleModal}>Add Social Link</p>
            <button className={style.closeModalBtn} onClick={toggleModal}>
              <img src="/src/assets/images/close.svg" alt="close" />
            </button>
          </div>

          <div className={style.socialMedia}>
            <img
              className={style.socialLinkIcon}
              src="/src/assets/images/instagram.svg"
              alt=""
            />
            <p className={style.SocialLinkText}>Instagram</p>
          </div>

          <p className={style.displayName}>Display Name</p>
          <form className={style.displayNameForm} action="">
            <input  
                id="displayname"
                type="text"
                placeholder="@username"
                name="displayname"
              />
          </form>

          <p className={style.displayName}>Url link</p>
          <form className={style.displayNameForm} action="">
            <input  
                id="url"
                type="text"
                placeholder="www.instagram.com/username"
                name="url"
              />
          </form>   

          {/* Save Button */}
          <button className={style.saveBtn}>Save</button>
        </div>
      )}
    </>
  );
}

export default AddSocialDetailModal;
