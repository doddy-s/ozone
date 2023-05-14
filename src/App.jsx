import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Icon from "./component/Icon";
import SearchBar from "./component/SearchBar";
import Home from "./routes/Home";
import Popular from "./routes/Popular";
import Topics from "./routes/Topics";
import Marketplace from "./routes/Marketplace";

function App() {
  return (
    <>
      <div className="container">
        {/* Header */}
        <div className="header">
          {/* title */}
          <Icon />
          {/* search-bar */}
          <SearchBar />
        </div>

        {/* sidebar */}
        <div className="sidebar">
          <button className="profile-btn">
            <img className="profile-pict" src="/src/assets/popular.svg" alt="Profile Image" />
            <div className="profile-info">
              <span className="username">Deekai</span>
              <span className="media-handle">@DeeKai</span>
            </div>
          </button>
        </div>
        {/* content */}
        <div className="content">
          <BrowserRouter>
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/popular" element={<Popular />} />
              <Route path="/topics" element={<Topics />} />
              <Route path="/marketplace" element={<Marketplace />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </>
  );
}

export default App;
