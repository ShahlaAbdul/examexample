import React from 'react'
import './navbar.scss'

function Navbar() {
  return (
    <nav>
        <header>
            <div>available</div>
        </header>
        <div className="navbar">
            {/* <div className="navbar_logo">
                logo
            </div> */}
            <div className="navbar_contect">
                <ul>
                    <li>home</li>
                    <li>Shop</li>
                    <li>product</li>
                </ul>
            </div>

        </div>
    </nav>
  )
}

export default Navbar