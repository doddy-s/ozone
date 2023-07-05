import React, { useState } from "react";
import style from "../assets/css/EditUsernameModal.module.css";

function EditUsernameModal() {
  const [modal, setModal] = useState(false);

  // Function to Control Modal
  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <button className={style.editBtn} onClick={toggleModal}>
        Username
        <img src="/src/assets/images/arrow.svg" alt="arrow" />
      </button>

      {modal && (
        <div className={style.containerEditUsername}>
          <div className={style.closeModal}>
            <button className={style.closeModalBtn} onClick={toggleModal}>
              <img src="/src/assets/images/close.svg" alt="close" />
            </button>
          </div>
          <div className={style.editUsernameContent}>
            <p className={style.titleChangeDisplayName}>Change Display Name</p>
            <form className={style.formDisplayName} action="">
              <input
                id="displayname"
                type="text"
                placeholder="username"
                name="displayname"
              />
            </form>
            <p className={style.titleChangeUsernameName}>
              Change Username Name
            </p>
            <form className={style.formUsernameName} action="">
              <input
                id="username"
                type="text"
                placeholder="@username22"
                name="username"
              />
            </form>
          </div>
          <button className={style.saveBtn}>
            Save
          </button>
        </div>
      )}
    </>
  );
}

export default EditUsernameModal;
