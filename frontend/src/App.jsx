import React from 'react'
import { Routes, Route } from 'react-router-dom'
import CategoryList from './pages/category/CategoryList'
import CategoryCreate from './pages/category/CategoryCreate'
import CategoryUpdate from './pages/category/CategoryUpdate'

const App = () => {
    return (
        <div>
            <Routes>
                <Route path='/category' element={<CategoryList />} />
                <Route path='/category/create' element={<CategoryCreate />} />
                <Route path='/category/update/:id' element={<CategoryUpdate />} />
            </Routes>
        </div>
    )
}

export default App