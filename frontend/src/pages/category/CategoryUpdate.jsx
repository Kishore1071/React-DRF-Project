import React from 'react'
import { useNavigate, useLocation, useParams } from 'react-router-dom'
import CategoryForm from './CategoryForm'

const CategoryUpdate = () => {

    const navigate = useNavigate()
    const location = useLocation()
    const { id } = useParams()

    const data = location.state

    return (
        <div>
            <h1>Create Category</h1>

            <div>
                <button onClick={() => navigate('/category')}>Back</button>
            </div>

            <CategoryForm category_name={data.category_name} description={data.description} method='update' id={id} />
        </div>
    )
}

export default CategoryUpdate