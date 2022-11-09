import { Link } from "react-router-dom"

const Menu = ()=>{
    return (
        <>
        <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/saludo">Saludo</Link></li>
        </ul>
        </>
    )
}

export default Menu