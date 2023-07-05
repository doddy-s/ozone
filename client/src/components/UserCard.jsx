import React from "react";
import { Link } from "react-router-dom";
import style from "../assets/css/Sidebar.module.css";
import { getUserDetails } from "../api/user";
import { useEffect, useState } from "react";
import { IKImage } from "imagekitio-react";

const linkStyle = {
  textDecoration: "none",
};

export const UserCard = ({user}) => {
  return user == null ? (
    <>
      <Link
        to={"/signin"}
        style={linkStyle}
        className={style.loginButton}
      >
        SIGN IN
      </Link>
    </>
  ) : (
    <>
      {/* Profile Social Media Button  */}
      <Link
        to={"/profile"}
        style={linkStyle}
        className={style.containerSocial}
      >
        <button className={style.socialButton}>
          <IKImage
              urlEndpoint="https://ik.imagekit.io/miko"
              path={user.media || "/default.png"}
              className={style.profileImage}
            />
          <div className={style.profileInfo}>
            <span className={style.name}>{user?.name}</span>
            <span className={style.username}>@{user?.Account.username}</span>
          </div>
        </button>
      </Link>
    </>
  );
};
