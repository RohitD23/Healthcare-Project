import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Guide from "./pages/Guide";
import Doctors from "./pages/Doctors";

import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import ResetPassword from "./pages/Auth/ResetPassword";

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

        <Route path="/doctorlist" element={<Doctors />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/reset" element={<ResetPassword />} />

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
