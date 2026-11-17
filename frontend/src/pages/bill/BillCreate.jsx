import React, { useState, useEffect } from 'react'
import axios from 'axios'

const BillCreate = () => {

    const [bill_number, setBillNumebr] = useState('')
    const [products, setProducts] = useState([])

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

    const UpdateField = (event, index, field) => {

        const bill_products_copy = [...bill_products]

        if (field === 'product') {
            bill_products_copy[index].product_id = event.target.value
        }

        else if (field === 'quantity') {
            bill_products_copy[index].quantity = event.target.value
        }

        setBillProducts(bill_products_copy)
    }

    const AddBill = () => {
        const bill_data = [
            {bill_number},
            bill_products
        ]

        console.log(bill_data)
    }

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/inv/product/')
        .then(response => {
            console.log(response.data)
            setProducts(response.data)
        })
        .catch(error => console.log(error))
    }, [])

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

                {
                    bill_products.map( (p, index) => {
                        return (
                            <div key={index}>
                                <label>Product</label>
                                
                                <select value={p.product_id} onChange={event => UpdateField(event, index, 'product')}>
                                    <option>Select Product</option>
                                    {
                                        products.map(product => <option value={product.id} key={product.id}>{product.product_name}</option>)
                                    }
                                </select>

                                <label>Quantity</label>
                                <input type="number" value={p.quantity} onChange={event => UpdateField(event, index, 'quantity')}/>
                            </div>
                        )
                    })
                }


                <input type="button" value={'Submit'} onClick={AddBill} />
            </form>
        </div>
    )
}

export default BillCreate