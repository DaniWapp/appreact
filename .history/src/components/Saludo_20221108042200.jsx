import { Link } from "react-router-dom"

const Saludo = () =>{
    return (
    <>
    <h1>Bienvenido a CriptoDRG</h1>
<Link to="/criptomonedas">Ver lista</Link>
    </>
    )
}

export default Saludo