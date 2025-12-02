import { useTranslation } from "react-i18next";
import { NavLink } from "react-router";

function ResponsiveNav() {
  const { t } = useTranslation();

  return (
    <div className="small_menu">
      <NavLink to="/" className="menu_item">
          <i className="fa-regular fa-home"></i>
                  <span>{t("header.home")}</span>

      </NavLink>

      <NavLink to="/profile/notifications" className="menu_item">
        <i className="fa-regular fa-bell"></i>
        <span>{t("header.notifications")}</span>
      </NavLink>

      <NavLink
        to="/daus"
        className="menu_item"
      >
<i className="fa-solid fa-book-quran"></i>
      <span> {t("header.duaa")}   </span>
      </NavLink>

        <NavLink to="/profile" className="menu_item">
        <i className="fa-regular fa-user"></i>
        <span>{t("header.myAccount")}</span>
      </NavLink>
    </div>
  );
}

export default ResponsiveNav;
