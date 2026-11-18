import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const BillList = () => {

    const navigate = useNavigate()

    const [bills, setBills] = useState([])

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/order/bill/')
        .then(response => {
            console.log(response.data)
            setBills(response.data)
        })
        .catch(error => console.log(error))
    }, [])

    return (
        <div>
            <h1>Bill List</h1>

            <button onClick={() => navigate('/bill/create')}>+ Add Bill</button>

            <table>
                <thead>
                    <tr>
                        <th>S.no</th>
                        <th>Bill Number</th>
                        <th>Bill Date</th>
                        <th>Grand Total</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        bills.map( (b, index) => {
                            return (
                                <tr key={b.id}>
                                    <td>{index + 1}</td>
                                    <td>{b.bill_number}</td>
                                    <td>{b.bill_date}</td>
                                    <td>{b.grand_total}</td>
                                    <td>
                                        <button onClick={() => navigate(`/bill/${b.id}`, { state: b })}>View</button>
                                        <button>Update</button>
                                        <button>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default BillList