import { useContext } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { UserContext } from "../context/UserContext"

const Menu = ()=>{
const navigation = useNavigate()
    const usuario = useContext(UserContext)

    return (
        <>
        <ul>
        <li><NavLink to="/">Inicio</NavLink></li>
        <li><NavLink to="/criptomonedas">Criptomonedas</NavLink></li>
        <li><NavLink to="/perfil">Perfil de {usuario.name}</NavLink></li>
        <a href='' onClick={()=>{
            localStorage.removeItem("tokenDrg")
            navigation("/login")
            }}>Cerrar sesión</a>
        </ul>
        </>
    )
}

export default Menu