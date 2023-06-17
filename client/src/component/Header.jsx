import style from "../assets/css/Header.module.css";

const Header = () => {
  return (
    <div className={style.containerHeader}>
      <div className={style.containerLogo}>
        <a href="" className={style.linkLogo}>
          <img
            className={style["logo"]}
            src="/src/assets/images/ozone-logo.svg"
            alt="ini logo"
          />
        </a>
      </div>
      <div className={style.containerSearchBar}>
        <form action="" className={style.searchForm}>
          <input type="text" placeholder="Search" />
          <button type="submit">
            <img src="/src/assets/images/search.svg" alt="Search Icon" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Header;
