import { CNavItem, CNavTitle, CSidebar, CSidebarNav } from "@coreui/react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <CSidebar style={{ height: "100vh" }}>
      <CSidebarNav>
        <CNavItem href="#" className="bg-dark">
          <i className="bi bi-bar-chart-fill text-white m-2"></i>
          <h5 className="text-white mx-3 my-1 fw-bolder">TETHERX</h5>
        </CNavItem>
        <CNavTitle className="text-light fw-normal">
          A CRM app for all your needs
        </CNavTitle>

        <CNavItem href="#" onClick={logout}>
          <i className="bi bi-box-arrow-left text-white m-2"></i>
          <div className="text-decoration-none text-white mx-3">Logout</div>
        </CNavItem>
      </CSidebarNav>
    </CSidebar>
  );
};

export default Sidebar;
