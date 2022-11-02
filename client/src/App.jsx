import React from 'react'
import { Route, Routes } from "react-router-dom";
import LoginPage from './components/LoginPage/LoginPage'
import RegistrationPage from './components/RegistrationPage/RegistrationPage'
export default function App() {
  return (
    <div>
      
      <Routes>
        <Route path='/' element={<RegistrationPage />} />
        <Route path='/login' element={<LoginPage />} />
   </Routes>
    </div>
  )
}
