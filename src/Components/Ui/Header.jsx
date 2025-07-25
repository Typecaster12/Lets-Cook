import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <div className="nav-container">
        <h2 className="logo">
          <NavLink className="nav-link-logo" to="/">Lets Cook..</NavLink>
        </h2>
      </div>
    </div>
  )
}

export default Header;