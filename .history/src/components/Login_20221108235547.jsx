import axios from "axios"
import { useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"

const Login = () => {

    const navigation = useNavigate()

    const [user, setUser] = useState({
        email: 'eve.holt@reqres.in',
        password: 'cityslickass'
    })

    const [cargando, setCargando] = useState(false)
    const [error, setError] = useState()

    const loguear = (e) => {

        e.preventDefault()//no submit


        if (cargando) {
            console.log("Cargando...");
            return

        }

        console.log(user);
        setCargando(true)
        axios.post(`https://reqres.in/api/login`, user)
            .then(data => {
                setCargando(false)
                const token = data.data.token
                localStorage.setItem("tokenDrg", token)
                console.log(data.data);
                navigation("/")

            })
            .catch(e => {
                console.log("Error:", e)
                setCargando(false)
            }
            )


    }

    if (localStorage.getItem("tokenDrg")) return <Navigate to="/" />
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

                <input type="submit" value={cargando ? "..." : "Ingresar"} />
            </form>
        </>
    )

}


export default Login