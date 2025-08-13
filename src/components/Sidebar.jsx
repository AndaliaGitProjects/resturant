import DashIcon from "../assets/dashboard-svgrepo-com.svg"
import SettingIcon from "../assets/setting-setting-svgrepo-com.svg"
import CatigoresIcon from "../assets/shop-svgrepo-com.svg"
import ResturantMenuIcon from "../assets/restaurant-menu-svgrepo-com.svg"
import ButtonSide from "./ButtonSide"
import ResturantInfo from "./ResturantInfo"
import useTranslate from "../hooks/useTranslate"
export default function Sidebar({ innerWidth }) {
  const { t } = useTranslate()

  return (
    <aside
      className={`Sidebar background-secondary ${
        innerWidth < 600 && "sidebar-small"
      } flex row-gap-5 flex-d-column`}
    >
      {/* <ResturantInfo name={t("resturantWelcom")}></ResturantInfo> */}

      <ButtonSide to="./" title={t("sideNav.dashboard")}>
        <img src={DashIcon} height={26} alt="" /> {t("sideNav.dashboard")}
      </ButtonSide>

      <ButtonSide to="catigores" title={t("sideNav.catigores")}>
        <img src={CatigoresIcon} alt="" />
        {t("sideNav.catigores")}
      </ButtonSide>

      <ButtonSide to="menu" title={t("sideNav.menu")}>
        <img src={ResturantMenuIcon} alt="" />
        {t("sideNav.menu")}
      </ButtonSide>
      <ButtonSide to="setting" title={t("sideNav.setting")}>
        <img src={SettingIcon} alt="" />
        {t("sideNav.setting")}
      </ButtonSide>
    </aside>
  )
}
