import React, { useState } from 'react';
import style from '../assets/css/EditUsernameModal.module.css';

function EditUsernameModal() {
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
        Username
        <img src="/src/assets/images/arrow.svg" alt="arrow" />
      </button>

      {isOpen && (
        <div className={style.modal}>
          <h3>Edit Username</h3>
          {/* Add the content and form fields for editing the username */}
          <button onClick={closeModal}>Close</button>
        </div>
      )}
    </>
  );
}

export default EditUsernameModal;