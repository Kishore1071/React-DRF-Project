import React, { useState } from 'react'

const CategoryForm = () => {

    const [category_name, setCategoryName] = useState('')
    const [description, setDescription] = useState('')

    const SubmitForm = () => {
        console.log(category_name, description)
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