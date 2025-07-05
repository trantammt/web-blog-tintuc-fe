import { useState } from 'react'
import type { Post } from '../data/posts'
import { posts as allPosts } from '../data/posts'
import PostCard from './PostCard'

const categories = ['Tất cả', 'AI', 'Lập trình', 'Công nghệ']

export default function PostsList() {
  const [category, setCategory] = useState('Tất cả')
  const [tag, setTag] = useState('')
  const [author, setAuthor] = useState('')
  const [date, setDate] = useState('')

  let filtered: Post[] = allPosts

  if (category !== 'Tất cả') {
    filtered = filtered.filter((p) => p.category === category)
  }
  if (tag) {
    filtered = filtered.filter((p) => p.tags.includes(tag))
  }
  if (author) {
    filtered = filtered.filter((p) => p.author.toLowerCase().includes(author.toLowerCase()))
  }
  if (date) {
    filtered = filtered.filter((p) => p.date === date)
  }

  return (
    <section className="py-6">
      <div className="mb-4 flex space-x-2 overflow-x-auto">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            className={`px-3 py-1 rounded whitespace-nowrap ${
              category === c ? 'bg-blue-600 text-white' : 'bg-gray-100'
            }`}
          >
            {c}
          </button>
        ))}
      </div>
      <div className="mb-4 flex flex-wrap gap-2">
        <input
          type="text"
          placeholder="Tag"
          value={tag}
          onChange={(e) => setTag(e.target.value)}
          className="border rounded px-2 py-1"
        />
        <input
          type="text"
          placeholder="Tác giả"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="border rounded px-2 py-1"
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border rounded px-2 py-1"
        />
      </div>
      <div className="space-y-4">
        {filtered.map((p) => (
          <PostCard key={p.id} post={p} />
        ))}
      </div>
    </section>
  )
}
