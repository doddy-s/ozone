import { BrowserRouter, Routes, Route } from "react-router-dom";
import ozoneLogo from "../src/assets/ozone_logo.png";
import "./App.css";
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
          <div className="title">
            <img className="logo" src={ozoneLogo} alt="ini logo" />
          </div>
          {/* search-bar */}
          <div className="search-bar">
            <form action="" className="search-form">
              <input type="text" placeholder="Seacrh" />
              <button type="submit">
                <img src="/src/assets/search.svg"/>
              </button>
            </form>
          </div>
        </div>

        {/* sidebar */}
        <div className="sidebar"></div>
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
