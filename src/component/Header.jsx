import style from "../assets/css/Header.module.css";

const Header = () => {
    return(
        <div className={style['container-header']}>
            <div className={style['container-logo']}>
                <a href="" className={style['link-logo']}>
                    <img className={style.logo} src="/src/assets/images/ozone_logo.png" alt="ini logo" />
                </a>
            </div>
            <div className={style['container-searchbar']}>
                <form action="" className={style['search-form']}>
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