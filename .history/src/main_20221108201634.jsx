import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import Pag404 from './components/404'
import Index from './components/Index'
import Home from "./components/Home"
import CriptoPage from './components/CriptoPage'
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
    <Route path='/' element={<App />} >
        <Route index element={<Home />} />
        <Route path='/perfil' element={<Perfil />} />
      </Route>
      <Route path='/criptomonedas' element={<App />} >
        <Route index element={<Index />} />
        <Route path=':id' element={<CriptoPage />} />
      </Route>
      <Route path='*' element={<Pag404 />} />
    </Routes>
  </BrowserRouter >
)
