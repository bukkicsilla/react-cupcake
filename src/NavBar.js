import { NavLink } from "react-router-dom";
import "./NavBar.css";
const NavBar = () => {
  return (
    <div className="NavBar">
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink exact to="/cupcakes">
        Cupcakes
      </NavLink>
      <NavLink exact to="/addcupcake">
        Add Cupcake
      </NavLink>
    </div>
  );
};
export default NavBar;
