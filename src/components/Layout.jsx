import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

function Layout({ children, title }) {
  const location = useLocation()

  // Update document title per page
  useEffect(() => {
    if (title) document.title = title
  }, [title])

  // Re-initialize WOW.js on every route change
  useEffect(() => {
    if (window.WOW) {
      new window.WOW({ live: false }).init()
    }
  }, [location.pathname])

  return (
    <div className="wrapper">
      <div className="col-md-12">
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  )
}

export default Layout
