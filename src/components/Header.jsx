import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <p className="fs-1">My Blog</p>
      <div className="header">
        <ul>
          <li>
            <NavLink to="">Home</NavLink>
          </li>
          <li>
            <NavLink to="add">Add New</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
