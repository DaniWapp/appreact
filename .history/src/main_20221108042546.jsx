import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import Pag404 from './components/404'
import Menu from './components/Menu'
import Index from './components/Index'
import Saludo from "./components/Home"
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
    <Route path='/' element={<App />} >
        <Route index element={<Saludo />} />
        <Route path='/saludo' element={<Saludo />} />
      </Route>
      <Route path='/criptomonedas' element={<App />} >
        <Route index element={<Index />} />
        <Route path='/saludo' element={<Saludo />} />
      </Route>
      <Route path='*' element={<Pag404 />} />
    </Routes>
  </BrowserRouter >
)
