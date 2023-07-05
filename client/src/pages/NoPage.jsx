import React from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import boteror404 from "../assets/images/98488-bot-error-404.json";
import style from "../assets/css/Nopage.module.css";

function Nopage() {
  return (
    <>
      <div className={style.containerNoPage}>
        <h1>Page not found</h1>
        {/* Error 404 animation with lottie */}
        <div className={style.containerLottie}>
          <Lottie className={style.lottieAnimation} animationData={boteror404} loop={true} />
        </div>
        <h2>
          The page you are looking for doesn’t exist or an other error occured
        </h2>
        <Link to="/home" className={style.backLink}>
          Go Back
        </Link>
      </div>
    </>
  );
}

export default Nopage;
