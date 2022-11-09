import { useParams } from "react-router-dom"
import { useEffect } from "react"
const CriptoPage = () =>{

    const params = useParams()
    const API_URL = import.meta.env.VITE_API_URL
    const [criptos,setCriptos] = useState()
  
    useEffect(() => {
  
  axios.get(`${API_URL}assets/${params.id}`)
  .then((data)=>{
    setCriptos(data.data.data);
  })
  .catch(()=>{
  console.error("Error:",`API_URL: ${import.meta.env.VITE_API_UR}`)
  })
    },[])
  
  if(!criptos)return <span>Cargando...</span>
  
    return (
        <>
        <h1>Cripto PAge: {params.id} </h1>
        </>
    )
}

export default CriptoPage