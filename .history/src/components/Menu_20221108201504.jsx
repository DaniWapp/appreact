import { NavLink } from "react-router-dom"

const Menu = ()=>{
    return (
        <>
        <ul>
        <li><NavLink to="/">Inicio</NavLink></li>
        <li><NavLink to="/criptomonedas">Criptomonedas</NavLink></li>
        <li><NavLink to="/perfil">Perfil</NavLink></li>
        </ul>
        </>
    )
}

export default Menu