import { Link } from "react-router-dom";
import style from "../assets/css/Sidebar.module.css";

const Sidebar = () => {
  return (
    // Profile Button
    <div className={style['container-sidebar']}>
      <div className={style['container-profile']}>
        <button className={style['social-button']}>
          <img
            className={style['profile-image']}
            src="/src/assets/images/profile-icon.svg"
            alt="profile"
          />
          <div className={style['profile-info']}>
            <span className={style['name']}>Username</span>
            <span className={style['username']}>@username</span>
          </div>
        </button>
      </div>

      {/* Menu Button */}
      <div className={style['container-menu']}>
        <Link to={'/home'}>
        <button className={style['menu-button']}>
          <span className={style['icon-menu']}>
            <img src="/src/assets/images/home.svg" alt="home" />
          </span>
          <span className={style['text-menu']}>Home</span>
        </button>
        </Link>

        <Link to={'/popular'}>
        <button className={style['menu-button']}>
          <span className={style['icon-menu']}>
            <img src="/src/assets/images/popular.svg" alt="popular" />
          </span>
          <span className={style['text-menu']}>Popular</span>
        </button>
        </Link>

        <Link to={'/topics'}>
        <button className={style['menu-button']}>
          <span className={style['icon-menu']}>
            <img src="/src/assets/images/topics.svg" alt="topics" />
          </span>
          <span className={style['text-menu']}>Topics</span>
        </button>
        </Link>

        <Link to={'/marketplace'}>
        <button className={style['menu-button']}>
          <span className={style['icon-menu']}>
            <img src="/src/assets/images/marketplace.svg" alt="marketplace" />
          </span>
          <span className={style['text-menu']}>Marketplace</span>
        </button>
        </Link>
      </div>
      

      {/* Topics Button */}
      <div className={style['container-topics']}>
        <div className="topics-title">
          <span>TOPICS YOU LIKE</span>
        </div>

        <button className={style['topics-button']}>
          <span className="icon">
            <img src="/src/assets/images/gaming.svg" alt="gaming" />
          </span>
          <span className="text">Gaming</span>
        </button>

        <button className={style['topics-button']}>
          <span className="icon">
            <img src="/src/assets/images/Sport.svg" alt="gaming" />
          </span>
          <span className="text">Sport</span>
        </button>

        <button className={style['topics-button']}>
          <span className="icon">
            <img src="/src/assets/images/animal.svg" alt="gaming" />
          </span>
          <span className="text">Animal</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
