import { useContext } from "react"
import { Link, NavLink, useNavigate } from "react-router-dom"
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
        <Link onClick={()=>{
            localStorage.removeItem(tokenDrg)
            navigation("/login")
            }}>Cerrar sesión</Link>
        </ul>
        </>
    )
}

export default Menu