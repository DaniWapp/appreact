import { Navigate, Outlet } from "react-router-dom"
import Menu from "./components/Menu"

const App = ()=>{

  if(!localStorage.getItem("tokenDrg")) return <Navigate to="/login"/>
  return(
    <>
    <Menu/>
    <Outlet/>
    </>
  )
}

export default App