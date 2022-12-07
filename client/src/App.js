import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Guide from "./pages/Guide";
import Gynaecology from "./pages/Gynaecology";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/facilities" element={<Guide />} />
        <Route path="/gynaecology" element={<Gynaecology />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
