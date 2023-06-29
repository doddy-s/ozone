import style from "../assets/css/SocialMediaLink.module.css"
import React from "react";

export default function SocialMediaLink({ url, icon, text }) {
  return (
    <div className={style.containerSocialMediaLink}>
      <img src={icon} alt={icon} className={style.iconSocialMediaLink} />
      <p className={style.textSocialMediaLink}>{text}</p>
    </div>
  );
}