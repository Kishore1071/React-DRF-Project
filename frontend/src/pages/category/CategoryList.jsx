import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const CategoryList = () => {

    const navigate = useNavigate()

    const [categories, setCategories] = useState([])

    const DeleteCategory = id => {
        axios.delete(`http://127.0.0.1:8000/inv/category/${id}/`)
        .then(response => {
            console.log(response.data)
            setCategories(response.data)
        })
        .catch(error => console.log(error))
    }

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/inv/category/')
        .then(response => {
            console.log(response.data)
            setCategories(response.data)
        })
        .catch(error => console.log(error))
    }, [])

    return (
        <div>
            <h1>Category List</h1>

            <div>
                <button onClick={() => navigate('/category/create')}>+ Add Category</button>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>S.no</th>
                        <th>Category</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        categories.map( (c, index) => {
                            return (
                                <tr key={c.id}>
                                    <td>{index + 1}</td>
                                    <td>{c.category_name}</td>
                                    <td>{c.description}</td>
                                    <td>
                                        <button>Update</button>
                                        <button onClick={() => DeleteCategory(c.id)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        } )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default CategoryList