import { useContext } from "react"
import { UserContext } from "../context/UserContext"

const Perfil = ()=>{

    const usuario = useContext(UserContext)
    return (
        <>
        <h1>Perfil</h1>
        </>
    )
}

export default Perfil