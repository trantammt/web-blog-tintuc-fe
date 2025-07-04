// Utility helpers for authentication

export async function loginWithJWT(email: string, password: string) {
  // TODO: call login endpoint and return token
  return Promise.resolve({ token: 'mock-token' })
}

export async function signupWithJWT(email: string, password: string) {
  // TODO: call signup endpoint and return user info
  return Promise.resolve({ user: { email } })
}
