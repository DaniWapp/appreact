import "./Cripto.css"

const  Cripto = ({id,name,priceUsd}) =>{

    return (
        <li className="cripto" key={id}>Nombre: {name} Precio: {priceUsd}</li>
    )
}

export default Cripto