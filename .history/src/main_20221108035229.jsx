import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import Index from './components'
import Pag404 from './components/404'
import Menu from './components/Menu'
import Saludo from "./components/Saludo"
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Menu/>
  <Routes>
  <Route path='/' element={<App/>}/>
  <Route index element={<Index/>}/>
  <Route path='/saludo' element={<Saludo/>}/>
  <Route path='*' element={<Pag404/>}/>
  </Route>
  </Routes>
  </BrowserRouter>
)
