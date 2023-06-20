import { Link } from "react-router-dom";
import style from "../assets/css/Sidebar.module.css";

const linkStyle = {
  textDecoration: "none",
};

const Sidebar = () => {
  return (
    // Profile Button
    <div className={style.containerSidebar}>
      {/* Profile Social Media Button  */}
      <Link to={"/profile"} style={linkStyle} className={style.containerSocial}>
        <button className={style.socialButton}>
          <img
            className={style.profileImage}
            src="/src/assets/images/profile-icon.svg"
            alt="profile"
          />
          <div className={style.profileInfo}>
            <span className={style.name}>Username</span>
            <span className={style.username}>@username</span>
          </div>
        </button>
      </Link>

      {/* Menu Button */}
      <div className={style.containerMenu}>
        <Link to={"/home"} style={linkStyle}>
          <button className={style.menuButton}>
              <img className={style.iconMenu} src="/src/assets/images/home.svg" alt="home" />
            <span className={style.textMenu}>Home</span>
          </button>
        </Link>

        <Link to={"/popular"} style={linkStyle}>
          <button className={style.menuButton}>
              <img className={style.iconMenu} src="/src/assets/images/popular.svg" alt="popular" />
            <span className={style.textMenu}>Popular</span>
          </button>
        </Link>

        <Link to={"/community"} style={linkStyle}>
          <button className={style.menuButton}>
              <img className={style.iconMenu} src="/src/assets/images/community.svg" alt="topics" />
            <span className={style.textMenu}>Community</span>
          </button>
        </Link>

        <Link to={"/marketplace"} style={linkStyle}>
          <button className={style.menuButton}>
              <img className={style.iconMenu} src="/src/assets/images/marketplace.svg" alt="marketplace" />
            <span className={style.textMenu}>Marketplace</span>
          </button>
        </Link>
      </div>

      {/* Topics Button */}
      <div className={style.containerTopics}>
        <div className={style.topicsTitle}>
          <span>TOPICS YOU LIKE</span>
        </div>

        <button className={style.topicsButton}>
          <span className={style.icon}>
            <img src="/src/assets/images/gaming.svg" alt="gaming" />
          </span>
          <span className={style.text}>Gaming</span>
        </button>

        <button className={style.topicsButton}>
          <span className={style.icon}>
            <img src="/src/assets/images/Sport.svg" alt="gaming" />
          </span>
          <span className={style.text}>Sport</span>
        </button>

        <button className={style.topicsButton}>
          <span className={style.icon}>
            <img src="/src/assets/images/animal.svg" alt="gaming" />
          </span>
          <span className={style.text}>Animal</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
