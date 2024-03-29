import React from 'react'
import { navSettings } from '../../routers/nav-settings'
import { Link } from 'react-router-dom'
function PageNav() {
  return (
    <nav>
      <ul className='flex flex-col'>
        {navSettings.navItems.map((item, index) => (
          <li className='mx-2' key={index}>
            <Link className='inline-block py-1 text-base underline' to={item.fullPath}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default PageNav
