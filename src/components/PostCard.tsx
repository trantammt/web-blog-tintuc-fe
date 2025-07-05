import type { Post } from '../data/posts'

interface Props {
  post: Post
}

export default function PostCard({ post }: Props) {
  return (
    <article className="flex space-x-4 border-b py-4">
      <img
        src={post.thumbnail}
        alt="thumbnail"
        className="w-32 h-20 object-cover flex-shrink-0 rounded"
      />
      <div className="flex-1">
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <img
            src={post.authorAvatar}
            alt={post.author}
            className="w-6 h-6 rounded-full"
          />
          <span>{post.author}</span>
          <span>· {new Date(post.date).toLocaleDateString()}</span>
        </div>
        <h2 className="font-semibold text-lg mt-1">{post.title}</h2>
        <p className="text-sm text-gray-700 mt-1">{post.excerpt}</p>
        <div className="mt-2 space-x-2">
          {post.tags.map((t) => (
            <span key={t} className="text-xs text-blue-600">#{t}</span>
          ))}
        </div>
      </div>
    </article>
  )
}
