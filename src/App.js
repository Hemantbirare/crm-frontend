import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Auth from "./Pages/Auth";
import { Route, Routes } from "react-router-dom";
import Engineer from "./Pages/Engineer";
import Customer from "./Pages/Customer";
import Admin from "./Pages/Admin";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@coreui/coreui/dist/css/coreui.min.css";
import "@coreui/coreui/dist/js/coreui.min.js";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/Admin" element={<Admin />} />
        <Route path="/Engineer" element={<Engineer />} />
        <Route path="/Customer" element={<Customer />} />
        <Route path="/" element={<Auth />} />
      </Routes>
    </div>
  );
}

export default App;
