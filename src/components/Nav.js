import { Link } from 'react-router-dom'
const Nav = () => {
  const navStyle = {
    color: 'white',
  }
  return (
    <nav>
      <h3>Logo</h3>
      <ul className="nav-links">
        <Link style={navStyle} to="/Homepage">
          <li>Homepage</li>
        </Link>
        <Link style={navStyle} to="/Cart">
          <li>Shop</li>
        </Link>
      </ul>
    </nav>
  )
}

export default Nav
