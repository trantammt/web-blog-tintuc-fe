import { createContext, useState } from 'react'
import type { ReactNode } from 'react'
import type { User } from '../_models'

export interface AuthContextValue {
  user: User | null
  token: string | null
  // TODO: add login, logout and other auth methods
}

export const AuthContext = createContext<AuthContextValue | undefined>(undefined)

export function JWTProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [token, setToken] = useState<string | null>(null)

  const value: AuthContextValue = {
    user,
    token,
    // TODO: expose auth actions
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
