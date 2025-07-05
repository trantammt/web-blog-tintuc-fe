import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '../auth/pages/jwt/Login'
import Signup from '../auth/pages/jwt/Signup'
import Home from '../pages/Home'

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  )
}
