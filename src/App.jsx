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
      <div className="layout">
        <div className="logo center">
          <img
            src={ozoneLogo}
            alt="ini logo"
          />
        </div>
        <div className="navigation">
        </div>
        <div className="side-nav"></div>
        <div className="blue">
          <BrowserRouter>
            <Routes>
              <Route
                path="/home"
                element={<Home />}
              />
              <Route
                path="/popular"
                element={<Popular />}
              />
              <Route
                path="/topics"
                element={<Topics />}
              />
              <Route
                path="/marketplace"
                element={<Marketplace />}
              />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </>
  );
}



export default App;
