import { createContext, useEffect, useState } from "react"
import { Navbar, Sidebar } from "../components/MainComponents"
import { Outlet } from "react-router"
export const TOGGLE_SIDE = createContext()
export default function DashboardUserLayout() {
  const [innerWidth, setWindowWidth] = useState(window.innerWidth)
  const [toggleSideBar, setToggleSideBar] = useState(() => {
    if (innerWidth >= 600) return true
    else return false
  })

  useEffect(() => {
    if (innerWidth <= 600) {
      setToggleSideBar(false)
    }

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
    <TOGGLE_SIDE.Provider value={{ toggleSideBar, setToggleSideBar }}>
      <div className="main-container flex flex-d-column h-100-vh">
        <div className="wrapper flex flex-grow-1 ">
          {toggleSideBar && <Sidebar innerWidth={innerWidth}></Sidebar>}
          <div className="flex flex-d-column flex-grow-1">
            <Navbar></Navbar>
            <Outlet />
          </div>
        </div>
      </div>
    </TOGGLE_SIDE.Provider>
  )
}
