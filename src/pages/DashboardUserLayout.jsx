import { useEffect, useState } from "react"
import { Main, Navbar, Sidebar } from "../components/MainComponents"
import { Outlet } from "react-router"

export default function DashboardUserLayout() {
  const [toggleSideBar, setToggleSideBar] = useState(true)
  const [innerWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    if (innerWidth >= 600) {
      setToggleSideBar(true)
    } else setToggleSideBar(false)
    const ac = new AbortController()
    window.addEventListener(
      "resize",
      () => {
        setWindowWidth(window.innerWidth)
      },
      { signal: ac.signal }
    )
    return () => {
      ac.abort()
    }
  }, [innerWidth])
  return (
    <div className="main-container flex flex-d-column h-100-vh">
      <Navbar
        setToggleSideBar={setToggleSideBar}
        toggleSideBar={toggleSideBar}
      ></Navbar>
      <div className="wrapper flex flex-grow-1 ">
        {toggleSideBar && <Sidebar innerWidth={innerWidth}></Sidebar>}
        <Outlet />
      </div>
    </div>
  )
}
