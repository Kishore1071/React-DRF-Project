import React from 'react'

const CategoryForm = () => {
    return (
        <div>
            
            <div>
                <label>Category Name</label>
                <input type="text" />
            </div>
            
            <div>
                <label>Description</label>
                <input type="text" />
            </div>

            <div>
                <input type="button" value={'Submit'} />
            </div>
        </div>
    )
}

export default CategoryForm