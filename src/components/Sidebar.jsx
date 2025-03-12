import "./css/sidebar.css";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Sidebar = () => {
  const { t } = useTranslation("sidebar");
  const location = useLocation();

  return (
    <div className="sidebar">
      <div className="profile">
        <img src="/joao.jpg" alt="Profile" className="profile-photo" />
        <div className="profile-info">
          <h2>João Gustavo Bispo</h2>
          <p>{t("profession")}</p>
        </div>
      </div>

      <nav className="nav-links">
        <ul>
          <li>
            <Link to="/" className={location.pathname === "/" ? "active" : ""}>
              {t("about")}
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={location.pathname === "/contact" ? "active" : ""}
            >
              {t("contact")}
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className={location.pathname === "/projects" ? "active" : ""}
            >
              {t("projects")}
            </Link>
          </li>
          <li>
            <Link
              to="/posts"
              className={location.pathname === "/posts" ? "active" : ""}
            >
              {t("posts")}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
