import { useContext } from "react"
import { Link, NavLink } from "react-router-dom"
import { UserContext } from "../context/UserContext"

const Menu = ()=>{

    const usuario = useContext(UserContext)

    return (
        <>
        <ul>
        <li><NavLink to="/">Inicio</NavLink></li>
        <li><NavLink to="/criptomonedas">Criptomonedas</NavLink></li>
        <li><NavLink to="/perfil">Perfil de {usuario.name}</NavLink></li>
        <Link>Cerrar sesión</Link>
        </ul>
        </>
    )
}

export default Menu