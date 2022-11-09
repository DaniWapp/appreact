import { Link } from "react-router-dom"
import "./Cripto.css"

const  Cripto = ({id,name,priceUsd}) =>{

    return (
        <li className="cripto" key={id}>Nombre: {name} Precio: {priceUsd}
        <Link to="/CriptoPage">Ver detalles</Link>
        </li>
    )
}

export default Cripto