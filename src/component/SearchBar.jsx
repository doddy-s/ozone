import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <form action="" className="search-form">
        <input type="text" placeholder="Seacrh" />
        <button type="submit">
          <img src="/src/assets/search.svg" />
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
