import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '../auth/pages/jwt/Login'
import Signup from '../auth/pages/jwt/Signup'

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  )
}