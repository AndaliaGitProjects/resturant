import { useState } from "react"
import Icon from "../assets/shop-svgrepo-com.svg"
import { NavLink } from "react-router"
export default function ButtonAccordionSide() {
  const [accordionOpen, setAccordionOpen] = useState(false)

  return (
    <>
      <div className="accodrion">
        <div
          className="accodrionHeader main-button side-button"
          onClick={() => setAccordionOpen((val) => !val)}
        >
          <div className="flex flex-center column-gap-2">
            <img src={Icon} alt="" />
            <div>hello</div>
          </div>
          <button className={`arrow  ${accordionOpen && "open"}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
            >
              <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
            </svg>
          </button>
        </div>
        <div className={`accodrionBody ${accordionOpen && "open"}`}>
          <NavLink to="test">asd</NavLink>
          <NavLink to="test2">asd</NavLink>
        </div>
      </div>
    </>
  )
}
