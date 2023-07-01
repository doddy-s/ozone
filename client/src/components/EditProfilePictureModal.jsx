import React, { useState } from 'react';
import style from '../assets/css/EditProfilePictureModal.module.css';

function EditProfilePictureModal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <button className={style.editBtn} onClick={toggleModal}>
        Profile Picture
        <img src="/src/assets/images/arrow.svg" alt="arrow" />
      </button>

      {modal && (
        <div className={style.containerEditProfilePict}>
          {/* Button Close Modal Edit Profile Picture */}
          <div className={style.closeModal}>
            <button className={style.closeModalBtn} onClick={toggleModal}>
              <img src="/src/assets/images/close.svg" alt="close" />
            </button>
          </div>
          {/* Edit Profile Picture */}
          <div className={style.bodyProfilePict}>
            <p className={style.titleEditProfilePict}>Profile Picture</p>
            <buttonc className={style.editPictureBtn}>Edit</buttonc>
          </div>
          <img className={style.profilePictUser} src="/src/assets/images/profile-icon.svg" alt="Profile Picture" />
          {/* Edit Banner */}
          <div className={style.bodyBanner}>
            <p className={style.titleEditProfilePict}>Cover Photo</p>
            <buttonc className={style.editPictureBtn}>Edit</buttonc>
          </div>
          <div className={style.bannerUser}></div>
          {/* Save Button */}
          <button className={style.saveBtn}>
            Save
          </button>

        </div>
      )}
    </>
  );
}

export default EditProfilePictureModal;