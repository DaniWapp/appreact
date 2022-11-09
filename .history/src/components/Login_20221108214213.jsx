import axios from "axios"
import { useState } from "react"

const Login = () => {

    const [user, setUser] = useState({
        email: 'eve.holt@reqres.in',
        password: 'cityslicka'
    })

    const loguear = (e) => {
        e.preventDefault()
        console.log(user);
        axios.post(`https://reqres.in/api/login`, user)
            .then(data => { 
                const token=data.data.token
                localStorage.setItem("tokenDrg",token)
            
            })
            .catch(e=>console.log("Error:",e))


    }
    return (
        <>
            <h1>Iniciar sesión</h1>
            <form action="" onSubmit={loguear}>
                <input type="email" placeholder="Email" onChange={(e) => {
                    setUser({
                        ...user,
                        email: e.target.value
                    })
                }} />
                <input type="password" placeholder="Contraseña" onChange={(e) => {
                    setUser({
                        ...user,
                        password: e.target.value
                    })
                }} />

                <input type="submit" value="Aceptar" />
            </form>
        </>
    )

}


export default Login