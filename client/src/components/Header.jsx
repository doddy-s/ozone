import { redirect } from "react-router-dom";
import { signout } from "../api/auth";
import style from "../assets/css/Header.module.css";

const Header = () => {

  const signoutButton = async () => {
    const response = await signout();
    console.log("header signout response", response);
    return redirect("/");
  }

  return (
    <div className={style.containerHeader}>
      <div className={style.containerLogo}>
        <a href="/" className={style.linkLogo}>
          <img
            className={style.logo}
            src="/src/assets/images/ozone-logo.svg"
            alt="logo"
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
      <div className={style.containerLogOut}>
        <button className={style.logOutBtn} onClick={signoutButton}>
          <img src="/src/assets/images/sign-out.svg" alt="sign-out" />
        </button>   
      </div>
    </div>
  );
};

export default Header;
