import React from 'react'
import Home from './components/Home'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Signup from './components/Signup'
import Login from './components/Login'
import Account from './components/Account'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route element={<Home/>} path='/'/>
        <Route element={<Signup/>} path='/signup'/>
        <Route element={<Login/>} path='/login'/>
        <Route element={<Account/>} path='/account'/>
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App