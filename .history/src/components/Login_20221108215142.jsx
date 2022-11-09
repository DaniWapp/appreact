import axios from "axios"
import { useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"

const Login = () => {

const navigation = useNavigate()

    const [user, setUser] = useState({
        email: 'eve.holt@reqres.in',
        password: 'cityslickass'
    })

    const loguear = (e) => {
        e.preventDefault()
        console.log(user);
        axios.post(`https://reqres.in/api/login`, user)
            .then(data => { 
                const token=data.data.token
                localStorage.setItem("tokenDrg",token)
                console.log(data.data);
                navigation("/")
            
            })
            .catch(e=>console.log("Error:",e))


    }

    if(localStorage.getItem("tokenDrg")) return <Navigate to="/"/>
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