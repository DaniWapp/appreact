import "./Cripto.css"

const  Cripto = ({key,name,priceUsd}) =>{

    return (
        <li className="cripto" id={"w"+key}>Nombre: {name} Precio: {priceUsd}</li>
    )
}

export default Cripto