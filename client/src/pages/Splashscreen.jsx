import style from "../assets/css/Splashscreen.module.css";
import { useState } from "react";
import { Navigate } from "react-router-dom";

function Splashscreen() {
  const [redirectNow, setRedirectNow] = useState(false);
  setTimeout(() => setRedirectNow(true), 2000);
  return redirectNow ? (
    <Navigate to="/home" />
  ) : (
    <>
      <div className={style.containerSplash}>
        <img
          className={style.containerImage}
          src="/src/assets/images/ozone-icon.svg"
          alt="Ozone_logo"
        />
        <h1 className={style.titleSplashScreen}>Ozone</h1>
      </div>
    </>
  );
}

export default Splashscreen;
