import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from '../features/auth/pages/Login';
import Register from '../features/auth/pages/Register';
import Landing from '../features/landing/Landing';
import Home from "../features/home/pages/Home.jsx"
import ProtectedRoutes from './ProtectedRoutes.jsx';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />}/>
      <Route path="/register" element={<Register />}/>
      <Route path="/home" element={<ProtectedRoutes><Home /></ProtectedRoutes>} />
    </Routes>
  )
}

export default AppRoutes;
