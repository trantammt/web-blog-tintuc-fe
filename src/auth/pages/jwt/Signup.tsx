import { useState } from 'react'
import type { FormEvent } from 'react'

export default function Signup() {
  // Khởi tạo state cho email và mật khẩu
  const [email, setEmail] = useState('')      // email mặc định là rỗng
  const [password, setPassword] = useState('') // mật khẩu mặc định là rỗng

  // Hàm xử lý khi người dùng gửi form đăng ký
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault() // Ngăn chặn hành vi reload trang mặc định của form
    // TODO: tích hợp logic đăng ký với backend sử dụng JWT
  }

  return (
    <div>
      {/* Tiêu đề form */}
      <h2>Đăng ký tài khoản</h2>

      {/* Form đăng ký */}
      <form onSubmit={handleSubmit}>
        {/* Trường nhập email */}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Trường nhập mật khẩu */}
        <input
          type="password"
          placeholder="Mật khẩu"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Nút gửi form */}
        <button type="submit">Tạo tài khoản</button>
      </form>
    </div>
  )
}
