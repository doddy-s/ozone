import React, { useState } from "react";
import style from "../assets/css/Profile.module.css";
import SocialMediaLink from "../components/SocialMediaLink";
// import UsernameDialog from "../components/UsernameDialog";

export default function Profile() {
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
    <div className={style.containerProfile}>
      <div className={style.profileBackground}>
        <img
          src="/src/assets/images/profile-icon.svg"
          alt="profile"
          className={style.profilePicture}
        />
      </div>

      <div className={style.containerMediaHistory}>
        <div className={style.containerContentMediaHistory}>
          <div className={style.contentMediaHistory}>
            <h5 className={style.titleMediaHistory}>Posted</h5>
            <p className={style.textMediaHistory}>20 Post</p>
          </div>

          <div className={style.contentMediaHistory}>
            <h5 className={style.titleMediaHistory}>Liked</h5>
            <p className={style.textMediaHistory}>200 like</p>
          </div>

          <div className={style.contentMediaHistory}>
            <h5 className={style.titleMediaHistory}>Photo</h5>
            <p className={style.textMediaHistory}>5 Photo</p>
          </div>

          <div className={style.contentMediaHistory}>
            <h5 className={style.titleMediaHistory}>Video</h5>
            <p className={style.textMediaHistory}>8 Video</p>
          </div>
        </div>

        <div className={style.containerEditProfileBtn}>
          <button onClick={toggleModal} className={style.editProfileBtn}>
            <img src="/src/assets/images/edit_profile.svg" alt="Edit Profile" />
            Edit Profile
          </button>
        </div>
      </div>

      <div className={style.contentBody}>
        <div className={style.socialMediaLink}>
          <p className={style.titleSocialMediaLink}>Social Link</p>
          <SocialMediaLink
            url="https://www.instagram.com/zalaxa"
            icon="/src/assets/images/instagram.svg"
            text="@zalaxa"
          />
          <SocialMediaLink
            url="https://www.twitter.com/zalaxa"
            icon="/src/assets/images/twitter.svg"
            text="@zalaxa"
          />
          <SocialMediaLink
            url="https://www.spotify.com/user/zalaxa"
            icon="/src/assets/images/spotify.svg"
            text="zalaxa"
          />

          <button className={style.addSocialLink}>
            <img
              src="/src/assets/images/plus.svg"
              alt="tombol"
              className={style.iconAddSocialLink}
            />
            <p className={style.textAddSocialLink}>Add Social Link</p>
          </button>
        </div>
        <div className={style.socialMediaContent}></div>
      </div>

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
