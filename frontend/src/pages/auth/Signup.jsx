import React, { useState } from 'react'

const Signup = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [phone_number, setPhoneNumber] = useState('')
    const [role, setRole] = useState('')

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
                    <input type="number" value={phone_number} onChange={event => setPassword(event.target.value)} />
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


            </form>
        </div>
    )
}

export default Signup