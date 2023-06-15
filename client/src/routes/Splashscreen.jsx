import style from '../assets/css/Splashscreen.module.css'

function Splashscreen() {
    return (
    <>
    <div className={style['container-Splash']}>
        <img className={style['container-image']} src="/src/assets/images/ozone-logo.svg" alt="Ozone_logo" />
        <h1>Ozone</h1>
    </div>
    </>
    );
}

export default Splashscreen;