import "./css/footer.css";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation("common");
  const year = new Date().getFullYear();

  return (
    <footer className="app-footer">
      <div className="footer-content">
        <p>{t("footer.copyright", { year })}</p>
      </div>
    </footer>
  );
};

export default Footer;
