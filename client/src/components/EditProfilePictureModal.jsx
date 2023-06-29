import React, { useState } from 'react';
import style from '../assets/css/EditProfilePictureModal.module.css';

function EditProfilePictureModal() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button className={style.editBtn} onClick={openModal}>
        Profile Picture
        <img src="/src/assets/images/arrow.svg" alt="arrow" />
      </button>

      {isOpen && (
        <div className={style.modal}>
          <h3>Edit Profile Picture</h3>
          {/* Add the content and form fields for editing the profile picture */}
          <button onClick={closeModal}>Close</button>
        </div>
      )}
    </>
  );
}

export default EditProfilePictureModal;