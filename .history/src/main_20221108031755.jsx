import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
  <Route path='/' element={<App/>}/>
  <Route path='/saludo' element={<Saludo/>}/>
  </Routes>
  </BrowserRouter>
)
