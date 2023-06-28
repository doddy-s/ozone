import React, { useState } from "react";
import style from "../assets/css/UsenameDialog.module.css";


export default function UsernameDialog() {
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

  return (
    <div className={style.containerUsernameDialog}>
      {/* Dialog Edit Profile */}
      {modal && (
        <div className={style.modal}>
          <div onClick={toggleModal} className={style.overlay}></div>
          <div className={style.containerModal}>
            <div className={style.closeModal}>
              <button className={style.closeModalBtn} onClick={toggleModal}>
                <img src="/src/assets/images/close.svg" alt="close" />
              </button>
            </div>
            <img
              className={style.profilePictDialog}
              src="/src/assets/images/profile-icon.svg"
              alt="profile-pict"
            />
            <p className={style.usernameProfile}>Username</p>
            <div className={style.editProfile}>
              <button className={style.editBtn}>
                Username
                <img src="/src/assets/images/arrow.svg" alt="arrow" />
              </button>
              <button className={style.editBtn}>
                Profile Picture
                <img src="/src/assets/images/arrow.svg" alt="arrow" />
              </button>
              <button className={style.editBtn}>
                Personalize
                <img src="/src/assets/images/arrow.svg" alt="arrow" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
