import React from "react";
import { Link } from "react-router-dom";
import style from "../assets/css/Sidebar.module.css";
import { getUserDetails } from "../api/user";
import { useEffect, useState } from "react";

const linkStyle = {
  textDecoration: "none",
};

export const UserCard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    try {
      async function fetchData() {
        const { data } = await getUserDetails();
        setUser(data);
      }
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  //console.log(user);

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
          <img
            className={style.profileImage}
            src="/src/assets/images/profile-icon.svg"
            alt="profile"
          />
          <div className={style.profileInfo}>
            <span className={style.name}>{user?.name}</span>
            <span className={style.username}>{user?.bio}</span>
          </div>
        </button>
      </Link>
    </>
  );
};
