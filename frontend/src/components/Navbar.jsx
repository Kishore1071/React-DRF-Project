import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to='/category'>Category</NavLink>
                </li>
                <li>
                    <NavLink to='/bill'>Bills</NavLink>
                </li>
                <li>
                    <NavLink to='/'>Logout</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar