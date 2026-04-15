import { NavLink, useLocation } from 'react-router-dom'
import { useState } from 'react'

const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/resume', label: 'Resume' },
  { to: '/contact', label: 'Contact' },
]

function Navbar() {
  const [collapsed, setCollapsed] = useState(true)
  const location = useLocation()

  const isActive = (to, end) => {
    if (end) return location.pathname === to
    return location.pathname === to
  }

  return (
    <>
      {/* Logo / Brand */}
      <div className="brand wow fadeIn" data-wow-delay="0.1s">
        Abhin.C
        <div className="title">- full stack developer -</div>
      </div>

      {/* Navigation */}
      <nav className="navbar navbar-default" role="navigation">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle"
            onClick={() => setCollapsed(!collapsed)}
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <div className="navbar-brand">
            <NavLink to="/">Abhin.C</NavLink>
          </div>
        </div>

        <div
          className={`collapse navbar-collapse${collapsed ? '' : ' in'}`}
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav">
            {navItems.map(({ to, label, end }) => (
              <li key={to} className={isActive(to, end) ? 'active' : ''}>
                <NavLink to={to} onClick={() => setCollapsed(true)}>
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
