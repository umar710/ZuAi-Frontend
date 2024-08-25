import Cookies from "js-cookie";
import { Navigate, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import "./index.css";

const Header = () => {
  const jwtToken = Cookies.get("jwtToken");
  const navigate = useNavigate();

  if (!jwtToken) {
    return <Navigate to="/login" />;
  }

  const onClickLogoutBtn = () => {
    Cookies.remove("jwtToken");
    navigate("/login");
  };

  return (
    <nav className="nav-header">
      <div className="nav-content">
        <img
          className="website-logo"
          src="http://cdn.onlinewebfonts.com/svg/img_433019.png"
          alt="website logo"
        />
        <ul className="nav-menu">
          <li>
            <Link to="/blogs-timeline" className="nav-link">
              Blogs Timeline
            </Link>
          </li>
          <li>
            <Link to="/create-blog" className="nav-link">
              Create Blog
            </Link>
          </li>
          <li>
            <Link to="/update-blog" className="nav-link">
              Update Blog
            </Link>
          </li>
          <li>
            <Link to="/delete-blog" className="nav-link">
              Delete Blog
            </Link>
          </li>
        </ul>
        <button
          type="button"
          className="logout-desktop-btn"
          onClick={onClickLogoutBtn}
        >
          Logout
        </button>
        <button type="button" className="logout-mobile-btn">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
            alt="logout icon"
            className="logout-icon"
          />
        </button>
      </div>
    </nav>
  );
};
export default Header;
