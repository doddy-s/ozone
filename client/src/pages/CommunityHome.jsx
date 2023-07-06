import style from "../assets/css/CommunityHome.module.css";

export default function CommunityHome() {
  return (
    <div className={style.containerCommunityHome}>
      {/* Banner Community home */}
      <div className={style.communityBackground}>
        {/* Community Home Picture*/}
        <img
          src="/src/assets/images/profile-icon.svg"
          alt="profile"
          className={style.communityPicture}
        />
      </div>
      <div className={style.headerCommunity}>
        <div className={style.titleCommunityHome}>Genshin Impact (global)</div>
        <button className={style.joinCommunityBtn}>join</button>
      </div>
      <div className={style.containBody}>
        <div className={style.aboutCommunity}>
          <div className={style.titleAboutCommunity}>About Community</div>
          <div className={style.describeCommunity}>
            This is the official community for Genshin Impact (原神), the latest
            open-world action RPG from HoYoverse. The game features a massive,
            gorgeous map, an elaborate elemental combat system, engaging
            storyline & characters, co-op game mode, soothing soundtrack, and
            much more for you to explore!
          </div>
          <div className={style.createdHistory}>
            <img src="/src/assets/images/cake.svg" alt="cake" />
            Created 7 june 2019
          </div>
          <div className={style.followedHistory}>
            <img src="/src/assets/images/community.svg" alt="cake" />
            2.0 M Members
          </div>
        </div>

        <div className={style.communityHomeContent}>
          
        </div>
      </div>
    </div>
  );
}
