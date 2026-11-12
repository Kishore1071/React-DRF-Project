import React from 'react'
import { useNavigate } from 'react-router-dom'

const CategoryCreate = () => {

    const navigate = useNavigate()

    return (
        <div>
            <h1>Create Category</h1>

            <div>
                <button onClick={() => navigate('/category')}>Back</button>
            </div>
        </div>
    )
}

export default CategoryCreate