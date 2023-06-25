import style from "../assets/css/Profile.module.css";

function Profile() {
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
          <button className={style.editProfileBtn}>
            <img src="/src/assets/images/edit_profile.svg" alt="Edit Profile" />
            Edit Profile
          </button>
        </div>
      </div>

      <div className={style.contentBody}>
        <div className={style.socialMediaLink}>
          <p className={style.titleSocialMediaLink}>Social Link</p>
          <div className={style.containerSocialMediaLink}>
            <img
              src="/src/assets/images/instagram.svg"
              alt="instagram-icon"
              className={style.iconSocialMediaLink}
            />
            <p className={style.textSocialMediaLink}>@zalaxa</p>
          </div>

          <div className={style.containerSocialMediaLink}>
            <img
              src="/src/assets/images/twitter.svg"
              alt="twitter-icon"
              className={style.iconSocialMediaLink}
            />
            <p className={style.textSocialMediaLink}>@zalaxa</p>
          </div>

          <div className={style.containerSocialMediaLink}>
            <img
              src="/src/assets/images/spotify.svg"
              alt="spotify-icon"
              className={style.iconSocialMediaLink}
            />
            <p className={style.textSocialMediaLink}>zalaxa</p>
          </div>

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
    </div>
  );
}

export default Profile;
