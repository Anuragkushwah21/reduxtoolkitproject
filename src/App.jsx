import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './component/Home'
import Header from './component/Header'
import CardDetails from './component/CardDetails'
import { Toaster } from 'react-hot-toast'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/cartdetails' element={<CardDetails/>}></Route>
      </Routes>
      <Toaster/>
    </>
  )
}

export default App
