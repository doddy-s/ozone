import style from "../assets/css/Profile.module.css";
import SocialMediaLink from "../components/SocialMediaLink";
import MediaHistory from "../components/MediaHistory";
import EditProfile from "../components/EditProfile";
import AddSocialModal from "../components/AddSocialModal";

export const CommunityHomeLoader = () => {
    return { };
}

export default function CommunityHome() {
  return (
    <div className={style.containerProfile}>
      {/* Banner Profile User */}
      <div className={style.profileBackground}>
        {/* Profile Picture User */}
        <img
          src="/src/assets/images/profile-icon.svg"
          alt="profile"
          className={style.profilePicture}
        />
      </div>

      <div className={style.containerMediaHistory}>
        {/* Edit Profile Button and Dialog */}
        <EditProfile />
        <div className={style.containerEditProfileBtn}>
        </div>
      </div>

      <div className={style.contentBody}>
        {/* Social Media link */}
        <div className={style.socialMediaLink}>
          Ini Deskripsi

        </div>
        {/* Content Upload user Profile  */}
        <div className={style.socialMediaContent}></div>
      </div>

      
    </div>
  );
}
