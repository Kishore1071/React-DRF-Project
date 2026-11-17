import axios from 'axios'
import React, { useEffect } from 'react'

const BillList = () => {

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/order/bill/')
        .then(response => console.log(response.data))
        .catch(error => console.log(error))
    }, [])

    return (
        <div>
            <h1>Bill List</h1>

            <button>+ Add Bill</button>

            <table>

            </table>
        </div>
    )
}

export default BillList