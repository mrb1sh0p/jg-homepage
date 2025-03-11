import "./css/sidebar.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Sidebar = () => {
  const { t } = useTranslation("sidebar");

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
            <Link to="/">{t("about")}</Link>
          </li>
          <li>
            <Link to="/contact">{t("contact")}</Link>
          </li>
          <li>
            <Link to="/jobs">{t("jobs")}</Link>
          </li>
          <li>
            <Link to="/links">{t("links")}</Link>
          </li>
          <li>
            <Link to="/posts">{t("posts")}</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
