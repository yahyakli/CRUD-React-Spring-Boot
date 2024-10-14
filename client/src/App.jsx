import React from 'react'
import NavBar from './layout/NavBar'
import { BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'

export default function App() {
  return (
    <BrowserRouter>
    <div className='bg-gray-500 h-screen w-screen'>
      <NavBar />
      <Home />
    </div>
    </BrowserRouter>
  )
}
