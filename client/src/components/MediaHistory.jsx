import React from "react";
import style from "../assets/css/MediaHistory.module.css"

const MediaHistory = ({ title, text }) => {
  return (
    // Media Counter 
    <div className={style.contentMediaHistory}>
      <h5 className={style.titleMediaHistory}>{title}</h5>
      <p className={style.textMediaHistory}>{text}</p>
    </div>
  );
};
export default MediaHistory;