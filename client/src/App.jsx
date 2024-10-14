import React from 'react'
import NavBar from './layout/NavBar'
import { BrowserRouter } from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>
  )
}
