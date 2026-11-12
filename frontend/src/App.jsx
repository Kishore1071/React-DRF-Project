import React from 'react'
import { Routes, Route } from 'react-router-dom'
import CategoryList from './pages/category/CategoryList'

const App = () => {
    return (
        <div>
            <Routes>
                <Route path='/category' element={<CategoryList />} />
            </Routes>
        </div>
    )
}

export default App