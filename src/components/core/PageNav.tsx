import React from 'react'
import { navSettings } from '../../routers/nav-settings'
function PageNav() {
  return (
    <nav>
      <ul className='flex'>
        {navSettings.navItems.map((item, index) => (
          <li className='mx-2' key={index}>
            <a href={item.fullPath}>{item.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default PageNav
