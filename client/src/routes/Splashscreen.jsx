import style from '../assets/css/Splashscreen.module.css'

function Splashscreen() {
    return (
    <>
    <div className={style.containerSplash}>
        <img className={style.containerImage} src="/src/assets/images/ozone-icon.svg" alt="Ozone_logo" />
        <h1 className={style.titleSplashScreen}>Ozone</h1>
    </div>
    </>
    );
}

export default Splashscreen;