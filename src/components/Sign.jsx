import axios from 'axios'
import React from 'react'
import { useState } from 'react'

export const Sign = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const api = usuario => {
        return axios.post(`https://lionettas-backend.onrender.com/api/usuarios/`, usuario)
    }
    const OnSubmit = e => {
        e.preventDefault()
        const nuevoUsuario = {
            username,
            password
        }
        api(nuevoUsuario)
            .then(() => console.log('guardado'))
            .catch(error => console.log(error))
    }
    return (
        <div>
            <form onSubmit={OnSubmit}>
                <input type="text" onChange={e => setUsername(e.target.value)} value={username} />
                <input type="password" onChange={e => setPassword(e.target.value)} value={password} />
                <input type="submit" value="Crear Usuario" />
            </form>
        </div>
    )
}
