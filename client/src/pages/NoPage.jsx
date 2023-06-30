import React from "react";
import Lottie from "lottie-react";
import boteror404 from "../assets/images/98488-bot-error-404.json";
import style from '../assets/css/Nopage.module.css'

function Nopage() {

    return (
      <>
        <div>
          <h1>Page not found</h1>
        </div>
        <div className={style['container-lottie']}>
          <Lottie animationData={boteror404} loop={true} />
        </div>
        <h2>The page you are looking for doesn’t exist or an other error occured</h2>
        <h3>go back</h3>
        
      </>
    );
  }
  
  export default Nopage;