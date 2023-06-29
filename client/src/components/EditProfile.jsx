import React, { useState } from "react";
import style from "../assets/css/EditProfile.module.css";
import EditUsernameModal from "./EditUsernameModal";
import EditProfilePictureModal from "./EditProfilePictureModal";
import PersonalizeModal from "./PersonalizeModal";

const EditProfile = () => {
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
    <div className={style.containerEditProfileBtn}>
      <button onClick={toggleModal} className={style.editProfileBtn}>
        <img src="/src/assets/images/edit_profile.svg" alt="Edit Profile" />
        Edit Profile
      </button>
      {/* Dialog Edit Profile */}
      {modal && (
        <div className={style.modal}>
          <div onClick={toggleModal} className={style.overlay}></div>
          <div className={style.containerModal}>
            {/* Button Close Modal Edit Profile */}
            <div className={style.closeModal}>
              <button className={style.closeModalBtn} onClick={toggleModal}>
                <img src="/src/assets/images/close.svg" alt="close" />
              </button>
            </div>
            {/* Profile Picture User Profile */}
            <img
              className={style.profilePictDialog}
              src="/src/assets/images/profile-icon.svg"
              alt="profile-pict"
            />
            {/* Username User Profile */}
            <p className={style.usernameProfile}>Username</p>
            <div className={style.editProfile}>
              {/* Call EditUsernameModal Component */}
              <EditUsernameModal />
              {/* Call EditProfilePictureModal Component*/}
              <EditProfilePictureModal />
              {/* Call PersonalizeModal Component*/}
              <PersonalizeModal />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default EditProfile;
