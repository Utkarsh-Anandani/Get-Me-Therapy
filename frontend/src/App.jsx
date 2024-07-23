import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Register from './pages/Register'
import Onboarding from './pages/Onboarding'
import Tracking from './pages/Tracking'

function App() {
  const [popup, setpopup] = useState(false);

  return (
    <Routes> 
      <Route path={'/login'} element={
        <Login setpopup={setpopup}/>
      }/>

      <Route path='/' element={
        <Onboarding popup={popup}/>
      }/>

      <Route path={'/register'} element={
        <Register/>
      }/>

      <Route path='/tracking' element={
        <Tracking/>  
      }/>
    </Routes>
  )
}

export default App
