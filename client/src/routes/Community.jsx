import React, { useState } from "react";
import style from "../assets/css/Community.module.css";

function Community() {
  const [isJoined, setIsJoined] = useState(false);

  const handleClick = () => {
    setIsJoined(!isJoined);
  };

  return (
    <>
      <div className={style.containerCommunity}>
        {/* Title Community Page */}
        <p className={style.descCommunityPage}>looking for community?</p>

        {/* Search Bar Community Page */}
        <div className={style.containerSeacrhCommunity}>
          <form action="" className={style.communityForm}>
            <input type="text" placeholder="Search" />
            <button type="submit">
              <img src="/src/assets/images/search.svg" alt="Search Icon" />
            </button>
          </form>
        </div>

        {/* Community Home Page Button */}
        <div className={style.containerCommunityContent}>
          <button className={style.communtiyHomeBtn}>
            <div className={style.containerCommunityPictureBtn}>
              <img src="/src/assets/images/genshin.png" alt="community-icon" />
            </div>
            <div className={style.containerTextCommunityBtn}>
              <div className={style.mainTextCommunityBtn}>
                <p className={style.titleCommunityBtn}>
                  Genshin Impact (Global)
                </p>
                <p className={style.followCommunityBtn}>
                  <span className={style.dotFollowCommunity}>*</span>
                  2.0M Member
                </p>
              </div>
              <div className={style.subTextCommunityBtn}>
                <p className={style.descCommunityBtn}>
                  This is the official community for Genshin Impact global
                </p>
              </div>
            </div>
            <div className={style.containerJoinCommunityBtn}>
              <button
                className={`${style.joinCommunityBtn} ${
                  isJoined ? style.joined : ""
                }`}
                onClick={handleClick}
              >
                {isJoined ? "Joined" : "Join"}
              </button>
            </div>
          </button>
        </div>
      </div>
    </>
  );
}

export default Community;
