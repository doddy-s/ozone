import { BrowserRouter, Routes, Route } from "react-router-dom";
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

            <BrowserRouter>
              <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/popular" element={<Popular />} />
                <Route path="/topics" element={<Topics />} />
                <Route path="/marketplace" element={<Marketplace />} />
              </Routes>
            </BrowserRouter>
        </div>
    </>
  );
}

export default App;
