import DashIcon from "../assets/dashboard-svgrepo-com.svg"
import SettingIcon from "../assets/setting-setting-svgrepo-com.svg"
import CatigoresIcon from "../assets/shop-svgrepo-com.svg"
import Icon from "../assets/shop-svgrepo-com.svg"

import ResturantInfo from "./ResturantInfo"
import ButtonSide from "./ButtonSide"
import ButtonAccordionSide from "./ButtonAccordionSide"
import NavbarItemIconSide from "./NavbarItemIconSide"
import { useContext } from "react"
import { LangContext } from "../layout/HomeNavbarLayout"

export default function Sidebar({ innerWidth }) {
  const { translate } = useContext(LangContext)

  return (
    <aside
      className={`Sidebar background-secondary ${
        innerWidth < 600 && "sidebar-small"
      } flex row-gap-5 flex-d-column`}
    >
      {innerWidth < 600 && (
        <NavbarItemIconSide className="side"></NavbarItemIconSide>
      )}
      <ResturantInfo name={translate("resturantWelcom")}></ResturantInfo>
      <ButtonSide to="./" title={translate("sideNav.dashboard")}>
        <img src={DashIcon} height={26} alt="" />{" "}
        {translate("sideNav.dashboard")}
      </ButtonSide>

      <ButtonSide to="catigores" title={translate("sideNav.catigores")}>
        <img src={CatigoresIcon} alt="" />
        {translate("sideNav.catigores")}
      </ButtonSide>

      {/* <ButtonSide to="menu" title={translate("sideNav.menu")}>
        <img src={ResturantMenuIcon} alt="" />
        {translate("sideNav.menu")}
      </ButtonSide> */}
      <ButtonSide to="setting" title={translate("sideNav.setting")}>
        <img src={SettingIcon} alt="" />
        {translate("sideNav.setting")}
      </ButtonSide>

      <ButtonAccordionSide>
        <img src={Icon} alt="" />
        <div>hello</div>
      </ButtonAccordionSide>
    </aside>
  )
}
