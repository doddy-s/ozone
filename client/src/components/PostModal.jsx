import React, { useState } from "react";
import style from "../assets/css/PostModal.module.css";

const PostModal = () => {
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
      <button onClick={toggleModal} className={style.itemText}>Comment</button>
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
          </div>
        </div>
      )}
    </div>
  );
};
export default PostModal;
