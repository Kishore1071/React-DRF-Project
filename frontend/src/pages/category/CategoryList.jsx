import React, { useState, useEffect } from 'react'
import axios from 'axios'

const CategoryList = () => {

    const [categories, setCategories] = useState([])

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
                                        <button>Delete</button>
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