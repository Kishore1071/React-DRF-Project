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

    const AddBill = () => {
        console.log(bill_number)
        console.log(bill_products)
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
                            <div>
                                <label>Product</label>
                                
                                <select>
                                    <option>Select Product</option>
                                    {
                                        products.map(product => <option value={product.id} key={product.id}>{product.product_name}</option>)
                                    }
                                </select>

                                <label>Quantity</label>
                                <input type="number"/>
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