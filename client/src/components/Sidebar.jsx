import { Link } from "react-router-dom";
import style from "../assets/css/Sidebar.module.css";
import { UserCard } from "./UserCard";
import SocialMediaMenu from "./MenuButton"
import TopicsMenu from "./TopicsButton";

const Sidebar = () => {
  return (
    // Profile Button
    <div className={style.containerSidebar}>

      <UserCard />

      {/* Menu Button */}
      <div className={style.containerMenu}>
      <SocialMediaMenu url="/home" icon="/src/assets/images/home.svg" text="Home" />
      <SocialMediaMenu url="/popular" icon="/src/assets/images/popular.svg" text="Popular" />
      <SocialMediaMenu url="/community" icon="/src/assets/images/community.svg" text="Community" />
      <SocialMediaMenu url="/marketplace" icon="/src/assets/images/marketplace.svg" text="Marketplace" />
      </div>
      
      {/* Recommend Topics Button */}
      <div className={style.containerTopics}>
        <div className={style.topicsTitle}>
          <span>TOPICS YOU LIKE</span>
        </div>
        <TopicsMenu topics="# Gaming" />
        <TopicsMenu topics="# Sport"/>
        <TopicsMenu topics="# Animal"/>
        
      </div>
    </div>
  );
};

export default Sidebar;
