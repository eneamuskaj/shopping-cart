import { Link } from "react-router-dom";
import pokemon from "../pokemon.png";
const Nav = () => {
  const navStyle = {
    color: "white",
  };
  return (
    <nav>
      <img src={pokemon} alt="pokemon logo" />
      <ul className="nav-links">
        <Link style={navStyle} to="/">
          <li>Homepage</li>
        </Link>
        <Link style={navStyle} to="/Cart">
          <li>Cart</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
