import { useContext } from "react"
import { TOGGLE_SIDE } from "../pages/DashboardUserLayout"
export default function NavbarItemIconSide() {
  const { toggleSideBar, setToggleSideBar } = useContext(TOGGLE_SIDE)
  // const buttonRef = useRef(null)

  // useEffect(() => {
  //   function handleClickOutside(event) {
  //     if (buttonRef.current && !buttonRef.current.contains(event.target)) {
  //       setToggleSideBar(false)
  //     }
  //   }
  //   document.addEventListener("click", handleClickOutside, true)
  //   return () => {
  //     document.removeEventListener("click", handleClickOutside, true)
  //   }
  // }, [setToggleSideBar])
  return (
    <button
      // ref={buttonRef}
      className={`main-button nav-button  ${
        toggleSideBar && "nav-sid-bottom-clicked"
      }`}
      onClick={() => setToggleSideBar((val) => !val)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        fill="#e3e3e3"
      >
        <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
      </svg>
    </button>
  )
}
