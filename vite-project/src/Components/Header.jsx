import { logoURL } from "../utils/constants";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="header-logo" src={logoURL} alt="Restaurant Logo" />{" "}
      </div>

      <div className="search-bar">
        <input placeholder="Search Restauarnts..." />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Contact us</li>
          <li>Cart</li>
          <li>About us</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
