import React from 'react'
import { navSettings } from '../../routers/nav-settings'
import { Link } from 'react-router-dom'
function PageNav() {
  return (
    <nav>
      <ul className='flex'>
        {navSettings.navItems.map((item, index) => (
          <li className='mx-2' key={index}>
            <Link to={item.fullPath}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default PageNav
