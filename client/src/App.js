import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Guide from "./pages/Guide";

import Gynaecology from "./pages/Departments/Gynaecology";
import Urology from "./pages/Departments/Urology";
import Orthopedics from "./pages/Departments/Orthopedics";
import Infertility from "./pages/Departments/Infertility";
import Radiology from "./pages/Departments/Radiology";
import Pathlogy from "./pages/Departments/Pathology";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/facilities" element={<Guide />} />
        <Route path="/gynaecology" element={<Gynaecology />} />
        <Route path="/urology" element={<Urology />} />
        <Route path="/orthopedics" element={<Orthopedics />} />
        <Route path="/infertility" element={<Infertility />} />
        <Route path="/radiology" element={<Radiology />} />
        <Route path="/pathology" element={<Pathlogy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
