import StyledHeader from "../components/StyledHeader"
// import useTranslate from "../hooks/useTranslate"
import { LangContext } from "../components/HomeNavbar"
import { useContext } from "react"
import ThemeSelector from "../components/ThemeSelector"
export default function Setting() {
  // const { lang, cl } = useTranslate()
  const { lang, cl, themess } = useContext(LangContext)
  return (
    <div className="Main">
      <StyledHeader>Setting</StyledHeader>
      <select
        name=""
        id=""
        value={lang}
        onChange={(e) => {
          cl(e.target.value)
        }}
      >
        <option value="en">🚲 English</option>
        <option value="ar"> Arabic</option>
      </select>

      <ThemeSelector themess={themess}></ThemeSelector>
    </div>
  )
}
