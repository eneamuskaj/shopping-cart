import { Link } from 'react-router-dom'
const Nav = () => {
  const navStyle = {
    color: 'white',
  }
  return (
    <nav>
      <h3>Logo</h3>
      <ul className="nav-links">
        <Link style={navStyle} to="/">
          <li>Homepage</li>
        </Link>
        <Link style={navStyle} to="/Cart">
          <li>Cart</li>
        </Link>
      </ul>
    </nav>
  )
}

export default Nav
