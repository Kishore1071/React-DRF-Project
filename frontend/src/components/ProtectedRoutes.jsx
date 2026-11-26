import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = ({ allowedRoles, children }) => {
    const token = localStorage.getItem('accessToken')

    if (!token) {
        return <Navigate to="/" replace />
    }

    const user_role = localStorage.getItem('role')

    if (allowedRoles && !allowedRoles.includes(user_role)) {
        return <Navigate to="/category" replace />
    }

    return children ? children : <Outlet />
}

export default ProtectedRoute
