import React from "react";
import style from "../assets/css/TopicsButton.module.css"

export default function TopicsMenu ({ topics }) {
  return (
    // Topics your Like at Sidebar
    <button className={style.topicsButton} >
        <span className={style.text}>{topics}</span>
    </button>
  );
};