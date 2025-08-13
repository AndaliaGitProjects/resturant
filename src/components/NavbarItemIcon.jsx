export default function NavbarItemIcon({ children, type = "defualt" }) {
  return (
    <button
      className={`main-button  nav-button ${
        type === "logout" && "danger-button"
      } `}
    >
      {typeof children == "object" ? children : <span>{children}</span>}
    </button>
  )
}
