import { FormEvent, useState } from 'react'

export default function ResetPasswordChange() {
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // TODO: send new password along with reset token
  }

  return (
    <div>
      <h2>Choose New Password</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="New password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm password"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
        />
        <button type="submit">Update password</button>
      </form>
    </div>
  )
}
