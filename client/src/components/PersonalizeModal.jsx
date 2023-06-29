
import React, { useState } from 'react';
import style from '../assets/css/PersonalizeModal.module.css';

function PersonalizeModal() {
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
        Personalize
        <img src="/src/assets/images/arrow.svg" alt="arrow" />
      </button>

      {isOpen && (
        <div className={style.modal}>
          <h3>Personalize</h3>
          {/* Add the content and form fields for personalization */}
          <button onClick={closeModal}>Close</button>
        </div>
      )}
    </>
  );
}

export default PersonalizeModal;