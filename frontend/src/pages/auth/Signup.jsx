import React, { useState } from 'react'
import axios from 'axios'

const Signup = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [phone_number, setPhoneNumber] = useState('')
    const [role, setRole] = useState('')

    const SubmitForm = (event) => {
        event.preventDefault()

        axios.post('http://127.0.0.1:8000/auth/signup/', {
            username, password, phone_number, role
        })
        .then(response => console.log(response.data))
        .catch(error => console.log(error))
    }

    return (
        <div>
            <form action="">

                <div>
                    <label>Username</label>
                    <input type="text" value={username} onChange={event => setUsername(event.target.value)} />
                </div>

                <div>
                    <label>Password</label>
                    <input type="password" value={password} onChange={event => setPassword(event.target.value)} />
                </div>

                <div>
                    <label>Phone Number</label>
                    <input type="number" value={phone_number} onChange={event => setPhoneNumber(event.target.value)} />
                </div>

                <div>
                    <label>Role</label>
                    <select value={role} onChange={event => setRole(event.target.value)}>
                        <option value="">Select Role</option>
                        <option value="admin">Admin</option>
                        <option value="manager">Manager</option>
                        <option value="seller">Seller</option>
                        <option value="public">Public</option>
                    </select>
                </div>

                <input type="submit" onClick={SubmitForm} />
            </form>
        </div>
    )
}

export default Signup