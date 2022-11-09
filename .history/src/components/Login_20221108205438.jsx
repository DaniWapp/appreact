import { useState } from "react"

const Login = () => {

    const [user, setUser] = useState({
        email: '',
        pass: ''
    })

    const loguear = (e) => {
        e.preventDefault()
        console.log(user);
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
                        pass: e.target.value
                    })
                }} />

                <input type="submit" value="Aceptar" />
            </form>
        </>
    )

}


export default Login