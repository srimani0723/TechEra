import {Link} from 'react-router-dom'

import './index.css'

const Navbar = () => (
  <div className="nav-navbar">
    <Link to="/">
      <img
        className="nav-image"
        src="https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png"
        alt="website logo"
      />
    </Link>
  </div>
)

export default Navbar
