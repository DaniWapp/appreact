import { useEffect, useState } from "react"
import axios from "axios"

const App = () => {

  const API_URL = import.meta.env.VITE_API_URL
  const [criptos,setCriptos] = useState()

  useEffect(() => {

axios.get(`${API_URL}assets`)
.then((data)=>{
  setCriptos(data);
})
.catch(()=>{
console.error("Error:",`API_URL: ${import.meta.env.VITE_API_UR}`)
})

return
fetch(`${API_URL}assets`)
.then((resp)=>resp.json())
.then((data)=>{
  setCriptos(data.data);
})
.catch(()=>{
console.error("Error:",`API_URL: ${import.meta.env.VITE_API_UR}`)
})
  },[])

if(!criptos)return <span>Cargando...</span>

  return (
    <>
    <h1>Criptos</h1>
   
<ol>
{
  criptos.map(({id,name,priceUsd}) => (
    <li key={id}>Nombre: {name} Precio: {priceUsd}</li>
  ))
}
</ol>
    </>
    
  )
}

export default App
