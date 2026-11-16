import React, { useState } from 'react'

const BillCreate = () => {

    const [bill_number, setBillNumebr] = useState('')

    const [bill_products, setBillProducts] = useState([])

    const AddNewProduct = () => {
        const product_data = {
            'product_id': '',
            'quantity': ''
        }

        const bill_products_copy = [...bill_products]

        bill_products_copy.push(product_data)

        setBillProducts(bill_products_copy)
    }

    const AddBill = () => {
        console.log(bill_number)
        console.log(bill_products)
    }

    return (
        <div>
            <h1>Create Bill</h1>

            <button>Back</button>

            <form>
                <div>
                    <label>Bill Number</label>
                    <input type="text" value={bill_number} onChange={event => setBillNumebr(event.target.value)}/>
                </div>

                <button type='button' onClick={AddNewProduct}>+ Add Product</button>

                <div>
                    
                </div>


                <input type="button" value={'Submit'} onClick={AddBill} />
            </form>
        </div>
    )
}

export default BillCreate