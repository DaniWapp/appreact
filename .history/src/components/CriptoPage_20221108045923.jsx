import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
const CriptoPage = () =>{

    const params = useParams()
    const API_URL = import.meta.env.VITE_API_URL
    const [cripto,setCripto] = useState()
  
    useEffect(() => {
  
  axios.get(`${API_URL}assets/${params.id}`)
  .then((data)=>{
    console.log(data.data.data);
    setCripto(data.data.data);
  })
  .catch(()=>{
  console.error("Error:",`API_URL: ${import.meta.env.VITE_API_UR}`)
  })
    },[])
  
  if(!cripto)return <span>Cargando...</span>
  
    return (
        <>
        <h1>Cripto PAge: {params.id} </h1>
        { 

   <Cripto key={cripto.id} id={cripto.id} name={cripto.name} priceUsd={cripto.priceUsd} />

}
        </>
    )
}

export default CriptoPage