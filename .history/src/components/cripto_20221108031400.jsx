import "./Cripto.css"

const  Cripto = ({key,name,priceUsd}) =>{

    return (
        <li className="cripto" key={"w"+key}>{key} Nombre: {name} Precio: {priceUsd}</li>
    )
}

export default Cripto