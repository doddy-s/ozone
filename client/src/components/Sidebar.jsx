import { Link } from "react-router-dom";
import style from "../assets/css/Sidebar.module.css";
import { UserCard } from "./UserCard";

const Sidebar = () => {
  return (
    // Profile Button
    <div className={style.containerSidebar}>

      <UserCard />

      {/* Menu Button */}
      <div className={style.containerMenu}>
        <Link
          to={"/home"}
          className={style.linkStyle}
        >
          <button className={style.menuButton}>
            <img
              className={style.iconMenu}
              src="/src/assets/images/home.svg"
              alt="home"
            />
            <span className={style.textMenu}>Home</span>
          </button>
        </Link>

        <Link
          to={"/popular"}
          className={style.linkStyle}
        >
          <button className={style.menuButton}>
            <img
              className={style.iconMenu}
              src="/src/assets/images/popular.svg"
              alt="popular"
            />
            <span className={style.textMenu}>Popular</span>
          </button>
        </Link>

        <Link
          to={"/community"}
          className={style.linkStyle}
        >
          <button className={style.menuButton}>
            <img
              className={style.iconMenu}
              src="/src/assets/images/community.svg"
              alt="topics"
            />
            <span className={style.textMenu}>Community</span>
          </button>
        </Link>

        <Link
          to={"/marketplace"}
          className={style.linkStyle}
        >
          <button className={style.menuButton}>
            <img
              className={style.iconMenu}
              src="/src/assets/images/marketplace.svg"
              alt="marketplace"
            />
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
          <span className={style.text}># Gaming</span>
        </button>

        <button className={style.topicsButton}>
          <span className={style.text}># Sport</span>
        </button>

        <button className={style.topicsButton}>
          <span className={style.text}># Animal</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
