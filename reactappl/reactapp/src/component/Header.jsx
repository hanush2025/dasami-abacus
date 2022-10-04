import {Link} from 'react-router-dom'

import './Header.css'

const Header = () => (
  <nav className="header-container">
    <div className="logo-and-title-container">
      <img
        alt="wave"
        className="logs"
        src="https://res.cloudinary.com/hanush/image/upload/v1664889229/Pngtree_children_education_logo_-_happy_5212460.png_wb1xsp.png"
      />
      <h1 className="title">Abacus Acadamy</h1>
    </div>
    <ul className="nav-items-list">
      <li className="link-item">
        <Link className="route-link" to="/">
          Home
        </Link>
      </li>
      <li className="link-item">
        <Link className="route-link" to="/signup">
          Register Form
        </Link>
      </li>
      <li className="link-item">
        <Link className="route-link" to="/login">
          LogIn Form
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
