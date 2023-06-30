import React, { useState } from "react";
import style from "../assets/css/PersonalizeModal.module.css";

function PersonalizeModal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <button className={style.editBtn} onClick={toggleModal}>
        Personalize
        <img src="/src/assets/images/arrow.svg" alt="arrow" />
      </button>

      {modal && (
        <div className={style.containerEditPersonalize}>
          <div className={style.closeModal}>
            <button className={style.closeModalBtn} onClick={toggleModal}>
              <img src="/src/assets/images/close.svg" alt="close" />
            </button>
          </div>
          <div className={style.contentEditPersonal}>
            <p className={style.titleBioUser}>Bio</p>
            <form className={style.descriptionForm} action="">
              <input
                id="description"
                type="text"
                placeholder="Describe how you are"
                name="description"
              />
            </form>
            <div className={style.containerAlertMaxChar}>
              <p className={style.alertMaxChar}>*100 characters</p>
            </div>
            <p className={style.titleGender}>Gender</p>
            <form action="" className={style.genderForm}>
              <label htmlFor="public">
                <input type="radio" name="type" id="Male" value="Male" />
                <img
                  className={style.typeRadioIcon}
                  src="/src/assets/images/male.svg"
                  alt="icon"
                />
                Male
              </label>

              <label htmlFor="private">
                <input type="radio" name="type" id="Female" value="Female" />
                <img
                  className={style.typeRadioIcon}
                  src="/src/assets/images/female.svg"
                  alt="icon"
                />
                Female
              </label>
            </form>
          </div>
          <button className={style.saveBtn}>Save</button>
        </div>
      )}
    </>
  );
}
export default PersonalizeModal;
