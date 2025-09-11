import React from 'react'
import Button from './Button'
import { Link, NavLink } from 'react-router-dom'
// import '../../index.css'

const Header = () => {
  return (
    <header className='shadow-2xl py-3'>
        <div className='custom-container flex items-center justify-between '>
          <Link to={"/"}>
            <h4>YourLogo</h4>
          </Link>
            <ul className='flex items-center gap-3'>
                <li>
                  <NavLink to="/" className={({isActive})=> `block ${isActive ? 'text-red-400': 'text-black'}`} >
                     Home 
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact" className={({isActive})=> `block ${isActive ? 'text-red-400': 'text-black'}`} >
                     Contact 
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/github" className={({isActive})=> `block ${isActive ? 'text-red-400': 'text-black'}`} >
                     Github 
                  </NavLink>
                </li>
            </ul>
            <Button text="Cart" className="px-6"/>
        </div>
    </header>
  )
}

export default Header