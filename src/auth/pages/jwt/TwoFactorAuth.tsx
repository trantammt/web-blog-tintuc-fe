import { useState } from 'react'
import type { FormEvent } from 'react'

export default function TwoFactorAuth() {
  const [code, setCode] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // TODO: verify two-factor authentication code
  }

  return (
    <div>
      <h2>Two-Factor Authentication</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter verification code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <button type="submit">Verify</button>
      </form>
    </div>
  )
}
