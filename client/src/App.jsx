import React from 'react'
import NavBar from './layout/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AddUser from './users/AddUser'

export default function App() {
  return (
    <BrowserRouter>
    <div className='bg-gray-500 h-screen w-screen'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/user' element={<AddUser />}/>
      </Routes>
    </div>
    </BrowserRouter>
  )
}
