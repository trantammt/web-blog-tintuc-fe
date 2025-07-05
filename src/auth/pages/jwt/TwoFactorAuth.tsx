import { useState } from 'react'
import type { FormEvent } from 'react'

export default function TwoFactorAuth() {
  // State để lưu mã xác thực hai bước mà người dùng nhập vào
  const [code, setCode] = useState('')

  // Hàm xử lý khi người dùng gửi form xác thực
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault() // Ngăn trang reload khi submit form
    // TODO: xác minh mã xác thực hai bước với backend
  }

  return (
    <div>
      {/* Tiêu đề của form xác thực */}
      <h2>Xác thực hai bước</h2>

      {/* Form nhập mã xác thực */}
      <form onSubmit={handleSubmit}>
        {/* Trường nhập mã xác thực */}
        <input
          type="text"
          placeholder="Nhập mã xác minh"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />

        {/* Nút xác minh */}
        <button type="submit">Xác minh</button>
      </form>
    </div>
  )
}
