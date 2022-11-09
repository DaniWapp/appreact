import { NavLink } from "react-router-dom"

const Menu = ()=>{
    return (
        <>
        <ul>
        <li><NavLink to="/">Inicio</NavLink></li>
        <li><NavLink to="/saludo">Criptomonedas</NavLink></li>
        </ul>
        </>
    )
}

export default Menu