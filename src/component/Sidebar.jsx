import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="container-sidebar">
      <div className="container-profile">
        <button className="social-button">
          <img
            className="profile-image"
            src="/src/assets/profile-icon.svg"
            alt="profile"
          />
          <div className="profile-info">
            <span className="name">Username</span>
            <span className="username">@username</span>
          </div>
        </button>
      </div>

      <div className="container-menu">
        <button className="menu-button">
          <span className="icon-menu">
            <img src="/src/assets/home.svg" alt="home" />
          </span>
          <span className="text-menu">Home</span>
        </button>

        <button className="menu-button">
          <span className="icon-menu">
            <img src="/src/assets/popular.svg" alt="popular" />
          </span>
          <span className="text-menu">Popular</span>
        </button>

        <button className="menu-button">
          <span className="icon-menu">
            <img src="/src/assets/topics.svg" alt="topics" />
          </span>
          <span className="text-menu">Topics</span>
        </button>

        <button className="menu-button">
          <span className="icon-menu">
            <img src="/src/assets/marketplace.svg" alt="marketplace" />
          </span>
          <span className="text-menu">Marketplace</span>
        </button>
      </div>

      <div className="container-topics">
        <div className="topics-title">
          <span>TOPICS YOU LIKE</span>
        </div>

        <button className="topics-button">
          <span className="icon">
            <img src="/src/assets/gaming.svg" alt="gaming" />
          </span>
          <span className="text">Gaming</span>
        </button>

        <button className="topics-button">
          <span className="icon">
            <img src="/src/assets/Sport.svg" alt="gaming" />
          </span>
          <span className="text">Sport</span>
        </button>

        <button className="topics-button">
          <span className="icon">
            <img src="/src/assets/animal.svg" alt="gaming" />
          </span>
          <span className="text">Animal</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
