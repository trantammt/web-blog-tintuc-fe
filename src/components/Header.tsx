import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="border-b p-4 flex items-center justify-between">
      <Link to="/" className="font-bold text-xl">Tech Blog</Link>
      <div className="flex-1 mx-4 max-w-md">
        <input
          type="text"
          placeholder="Tìm kiếm..."
          className="w-full rounded border px-3 py-2"
        />
      </div>
      <nav className="flex items-center space-x-4">
        <Link to="/login" className="text-sm text-gray-600 hover:underline">
          Đăng nhập
        </Link>
        <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
          Viết bài
        </button>
      </nav>
    </header>
  )
}
