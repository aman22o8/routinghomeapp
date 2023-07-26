// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="header_container">
    <div className="leftside">
      <img
        className="logo"
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
      />
      <p className="heading">Wave</p>
    </div>

    <ul className="list_container">
      <li>
        <Link className="link_heading" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="link_heading" to="/about">
          About
        </Link>
      </li>
      <li>
        <Link className="link_heading" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </div>
)

export default Header
