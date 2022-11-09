import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import Pag404 from './components/404'
import Index from './components/Index'
import Home from "./components/Home"
import CriptoPage from './components/CriptoPage'
import Perfil from './components/Perfil'
import { UserContextProvider } from './context/UserContext'
import Login from './components/Login'
ReactDOM.createRoot(document.getElementById('root')).render(
  <UserContextProvider>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<App />} >
        <Route index element={<Home />} />
        <Route path='/perfil' element={<Perfil></Perfil>} />
      </Route>
      <Route path='/criptomonedas' element={<App />} >
        <Route index element={<Index />} />
        <Route path=':id' element={<CriptoPage />} />
      </Route>
      <Route path='/login' element={<Login/>} />
      <Route path='*' element={<Pag404 />} />
    </Routes>
  </BrowserRouter >
  </UserContextProvider>
)
