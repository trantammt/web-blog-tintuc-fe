import { useState } from 'react'
import type { FormEvent } from 'react'

interface Errors {
  email?: string
  password?: string
}

export default function Login() {
  const [email, setEmail] = useState('admin@example.com')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)
  const [errors, setErrors] = useState<Errors>({})

  const validate = () => {
    const newErrors: Errors = {}
    const emailRegex = /^\S+@\S+\.\S+$/
    if (!emailRegex.test(email)) {
      newErrors.email = 'Please enter a valid email.'
    }
    if (!password) {
      newErrors.password = 'Password is required.'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    // TODO: integrate login logic with JWT backend
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md space-y-6">
        <div className="bg-blue-50 text-blue-800 p-3 rounded text-center text-sm">
          Use admin@example.com username and secret password.
        </div>
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 shadow rounded space-y-6"
        >
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full rounded border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              placeholder="Email"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email}</p>
            )}
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full rounded border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              placeholder="Password"
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-600">{errors.password}</p>
            )}
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center text-sm text-gray-700">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
              />
              <span className="ml-2">Remember me</span>
            </label>
            <a href="#" className="text-sm text-blue-600 hover:underline">
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full rounded bg-blue-600 py-2 px-4 text-white hover:bg-blue-700 focus:bg-blue-700"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  )
}
