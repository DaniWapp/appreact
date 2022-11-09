import { useState } from "react"

const Login = ()=>{

    const [user,setUser] = useState({
        email:'',
        pass:''
    })
    
    return(
        <>
        <h1>Iniciar sesión</h1>
        <form action="">
        <input type="email" placeholder="Email"/>
        <input type="password" placeholder="Contraseña"/>
        </form>
        </>
    )

}


export default Login