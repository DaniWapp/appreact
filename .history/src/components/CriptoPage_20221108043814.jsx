import { useParams } from "react-router-dom"

const CriptoPage = () =>{

    const params = useParams()

    return (
        <>
        <h1>Cripto PAge: {params.id} </h1>
        </>
    )
}

export default CriptoPage