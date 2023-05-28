import "./Header.css";

const Header = () => {
    return(
        <div className="container-header">
            <div className="container-logo">
                <a href="" className="link-logo">
                    <img className="logo" src="/src/assets/ozone_logo.png" alt="ini logo" />
                </a>
            </div>
            <div className="container-searchbar">
                <form action="" className="search-form">
                    <input type="text" placeholder="Search" />
                        <button type="submit">
                            <img src="/src/assets/search.svg" alt="Search Icon" />
                        </button>
                </form>
            </div>
        </div>

    );
};

export default Header;