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
          src="https://cdn.discordapp.com/attachments/1126661998063652924/1126662813125967903/ozone-icon.svg"
          alt="Ozone_logo"
        />
        <h1 className={style.titleSplashScreen}>Ozone</h1>
      </div>
    </>
  );
}

export default Splashscreen;
