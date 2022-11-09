import "./Cripto.css"

const  Cripto = ({key,name,priceUsd}) =>{

    return (
        <li className="cripto" key={"w"+key}>KKK: {key} Nombre: {name} Precio: {priceUsd}</li>
    )
}

export default Cripto