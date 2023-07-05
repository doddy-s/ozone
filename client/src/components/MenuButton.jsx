import React from "react";
import { Link } from "react-router-dom";
import style from "../assets/css/MenuButton.module.css"

const SocialMediaMenu = ({ url, icon, text }) => {
  return (
    // Menu main Button at SideBar
    <Link to={url} className={style.linkStyle}>
      <button className={style.menuButton}>
        <img className={style.iconMenu} src={icon} alt={text} />
        <span className={style.textMenu}>{text}</span>
      </button>
    </Link>
  );
};
export default SocialMediaMenu;