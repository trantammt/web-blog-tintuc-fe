import { useState } from "react";
import type { FormEvent } from "react";

// Khai báo kiểu dữ liệu lỗi (errors) có thể có cho email và password
interface Errors {
  email?: string;
  password?: string;
}

export default function Login() {
  // Khởi tạo state cho các trường: email, mật khẩu, ghi nhớ đăng nhập, và lỗi
  const [email, setEmail] = useState("admin@example.com"); // email mặc định
  const [password, setPassword] = useState(""); // mật khẩu trống ban đầu
  const [remember, setRemember] = useState(false); // không ghi nhớ đăng nhập ban đầu
  const [errors, setErrors] = useState<Errors>({}); // không có lỗi ban đầu

  // Hàm kiểm tra tính hợp lệ của form
  const validate = () => {
    const newErrors: Errors = {};
    const emailRegex = /^\S+@\S+\.\S+$/; // biểu thức kiểm tra định dạng email

    // Kiểm tra email
    if (!emailRegex.test(email)) {
      newErrors.email = "Vui lòng nhập email hợp lệ.";
    }

    // Kiểm tra mật khẩu
    if (!password) {
      newErrors.password = "Vui lòng nhập mật khẩu.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // trả về true nếu không có lỗi
  };

  // Hàm xử lý khi người dùng bấm nút đăng nhập
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault(); // ngăn reload trang
    if (!validate()) return; // nếu không hợp lệ thì không làm gì thêm
    // TODO: tích hợp logic đăng nhập với backend sử dụng JWT
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md space-y-6">
        {/* Thông báo hướng dẫn đăng nhập */}
        <div className="bg-blue-50 text-blue-800 p-3 rounded text-center text-sm">
          Sử dụng tài khoản admin@example.com và mật khẩu bí mật.
        </div>

        {/* Form đăng nhập */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 shadow rounded space-y-6"
        >
          {/* Trường nhập email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
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
            {/* Hiển thị lỗi nếu có */}
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email}</p>
            )}
          </div>

          {/* Trường nhập mật khẩu */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Mật khẩu
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full rounded border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              placeholder="Mật khẩu"
            />
            {/* Hiển thị lỗi nếu có */}
            {errors.password && (
              <p className="mt-1 text-sm text-red-600">{errors.password}</p>
            )}
          </div>

          {/* Checkbox ghi nhớ và liên kết quên mật khẩu */}
          <div className="flex items-center justify-between">
            <label className="flex items-center text-sm text-gray-700">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
              />
              <span className="ml-2">Ghi nhớ đăng nhập</span>
            </label>
            <a href="#" className="text-sm text-blue-600 hover:underline">
              Quên mật khẩu?
            </a>
          </div>

          {/* Nút đăng nhập */}
          <button
            type="submit"
            className="w-full rounded bg-blue-600 py-2 px-4 text-white hover:bg-blue-700 focus:bg-blue-700"
          >
            Đăng nhập
          </button>
        </form>
      </div>
    </div>
  );
}
