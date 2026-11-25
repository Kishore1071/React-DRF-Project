import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

    const LogoutUser = () => {
        localStorage.clear()
    }

    const user_role = localStorage.getItem('role')

    return (
        <nav>
            <ul>
                <li>
                    <NavLink to='/category'>Category</NavLink>
                </li>
                <li>
                    <NavLink to='/bill'>Bills</NavLink>
                </li>

                {
                    user_role === "admin" && <li>
                        <NavLink to='/signup'>Create User</NavLink>
                    </li>
                }


                <li>
                    <NavLink to='/' onClick={LogoutUser}>Logout</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar