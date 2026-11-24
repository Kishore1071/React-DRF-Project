import React, { useState } from 'react'
import api from '../../api/axiosInstance'
import { useNavigate } from 'react-router-dom'

const CategoryForm = (props) => {

    const navigate = useNavigate()

    const [category_name, setCategoryName] = useState(props.category_name)
    const [description, setDescription] = useState(props.description)

    const SubmitForm = () => {
        console.log(category_name, description)

        if (props.method === 'create') {
    
            api.post('/inv/category/', {
                category_name, description
            })
            .then(response => navigate('/category'))
            .catch(error => console.log(error))
        }
        else if (props.method === 'update') {
            api.put(`/inv/category/${props.id}/`, {
                category_name, description
            })
            .then(response => navigate('/category'))
            .catch(error => console.log(error))
        }
    }

    return (
        <div>
            
            <div>
                <label>Category Name</label>
                <input type="text" value={category_name} onChange={event => setCategoryName(event.target.value)} />
            </div>
            
            <div>
                <label>Description</label>
                <input type="text" value={description} onChange={event => setDescription(event.target.value)} />
            </div>

            <div>
                <input type="button" value={'Submit'} onClick={SubmitForm} />
            </div>
        </div>
    )
}

export default CategoryForm