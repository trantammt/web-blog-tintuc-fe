import { useContext } from 'react'
import { AuthContext } from './JWTProvider'

export default function useAuthContext() {
  const ctx = useContext(AuthContext)
  if (!ctx) {
    throw new Error('useAuthContext must be used within JWTProvider')
  }
  return ctx
}
