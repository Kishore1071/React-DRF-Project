import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const BillView = () => {

    const navigate = useNavigate()

    const location = useLocation()

    const bill_data = location.state

    return (
        <div>
            <h1>Bill View</h1>

            <button onClick={() => navigate('/bill')}>Back</button>

            <table>
                <thead>
                    <tr>
                        <th>S.no</th>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Price/Item</th>
                        <th>Amount</th>
                        <th>Gst %</th>
                        <th>Gst Amount</th>
                        <th>Sub Total</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        bill_data.bill_products.map((p, index) => {
                            return (
                                <tr key={p.id}>
                                    <td>{index + 1}</td>
                                    <td>{p.product.product_name}</td>
                                    <td>{p.quantity}</td>
                                    <td>{p.product.price}</td>
                                    <td>{p.amount}</td>
                                    <td>{p.product.gst}</td>
                                    <td>{p.gst_amount}</td>
                                    <td>{p.subtotal}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default BillView