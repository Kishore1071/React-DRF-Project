import React from 'react'
import { useNavigate } from 'react-router-dom'
import CategoryForm from './CategoryForm'

const CategoryCreate = () => {

    const navigate = useNavigate()

    return (
        <div>
            <h1>Create Category</h1>

            <div>
                <button onClick={() => navigate('/category')}>Back</button>
            </div>

            <CategoryForm />
        </div>
    )
}

export default CategoryCreate