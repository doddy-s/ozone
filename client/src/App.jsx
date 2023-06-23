import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Popular from "./pages/Popular";
import Community from "./pages/Community";
import Marketplace from "./pages/Marketplace";
import Nopage from "./pages/NoPage";
import style from "./assets/css/App.module.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Splashscreen from "./pages/Splashscreen";
import Profile from "./pages/Profile";

function App() {
  return (
    <>
      <div className={style.container}>
        {/* Header */}
        <Header />
        <div className={style["main-container"]}>
          <BrowserRouter>
            <Sidebar />
            <Routes>
              <Route path="/Home" element={<Home />} />
              <Route path="/Profile" element={<Profile />} />
              <Route path="/popular" element={<Popular />} />
              <Route path="/community" element={<Community />} />
              <Route path="/marketplace" element={<Marketplace />} />
              <Route path="/nopage" element={<Nopage />} />
              <Route path="/splashscreen" element={<Splashscreen />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </>
  );
}

export default App;
