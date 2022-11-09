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
        <input type="email" placeholder="Email" onChange={(e)=>{
       setUser({
        ...user,
        email:e.target.value
       })
        }} />
        <input type="password" placeholder="Contraseña"onChange={(e)=>{
       setUser({
        ...user,
        pass:e.target.value
       })
        }} />
        </form>
        </>
    )

}


export default Login