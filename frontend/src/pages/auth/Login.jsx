import React, { lazy } from 'react'
import { useState } from 'react'
import api from '../../api/axiosInstance.js'

const Login = () => {

    const[username,setUsername] = useState('')
    const[password,setPassword] = useState('')

    const SubmitForm = (event) =>{
        console.log(username,password)

        api.post('/auth/api/token/', {
            username, password
        })
        .then(response => {
            console.log(response.data)

            localStorage.setItem('accessToken', response.data.access)
            localStorage.setItem('refreshToken', response.data.refresh)
            localStorage.setItem('role', response.data.user_role)
            localStorage.setItem('username', response.data.username)
        })
        .catch(error => console.log(error))
    }
    return (
        <div>
            <form action="">
                <label htmlFor="">Username</label>
                <input type="text" value={username} onChange={event => setUsername(event.target.value)}/>

                <label htmlFor="">Password</label>
                <input type="password" value={password} onChange={event => setPassword(event.target.value)}/>

                <input type="button" value={'Submit'} onClick={SubmitForm} />
            </form>
        </div>
    )
}

export default Login