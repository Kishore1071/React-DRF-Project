import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

import Navbar from './components/Navbar'
import Login from './pages/auth/Login'
import Signup from './pages/auth/Signup'
import ProtectedRoute from './components/ProtectedRoutes'
import NotFound from './components/NotFound'


import CategoryList from './pages/category/CategoryList'
import CategoryCreate from './pages/category/CategoryCreate'
import CategoryUpdate from './pages/category/CategoryUpdate'

import BillList from './pages/bill/BillList'
import BillCreate from './pages/bill/BillCreate'
import BillView from './pages/bill/BillView'

const App = () => {

    const location = useLocation()

    console.log(location)

    const menu = location.pathname !== '/' ? true : false

    return (
        <div>

            {
                menu && <Navbar />
            }

            <Routes>

                <Route path='*' element={<NotFound />} />

                <Route path='/' element={<Login />} />
                <Route path='/signup' element={<Signup />} />

                <Route path='/category' element={<CategoryList />} />
                <Route path='/category/create' element={<CategoryCreate />} />
                <Route path='/category/update/:id' element={<CategoryUpdate />} />


                <Route path='/bill' element={
                    <ProtectedRoute allowedRoles={['admin', 'manager']}>
                        <BillList />
                    </ProtectedRoute>
                    } />
                <Route path='/bill/create' element={
                    <ProtectedRoute allowedRoles={['admin', 'manager']}>
                        <BillCreate />
                    </ProtectedRoute>
                    } />
                <Route path='/bill/:id' element={
                    <ProtectedRoute allowedRoles={['admin', 'manager']}>
                        <BillView />
                    </ProtectedRoute>
                    } />
            </Routes>
        </div>
    )
}

export default App