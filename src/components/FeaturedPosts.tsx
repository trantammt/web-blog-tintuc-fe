import { posts } from '../data/posts'
import PostCard from './PostCard'

export default function FeaturedPosts() {
  const featured = [...posts]
    .sort((a, b) => b.views + b.likes - (a.views + a.likes))
    .slice(0, 3)

  return (
    <section className="py-6">
      <h1 className="text-xl font-bold mb-4">Bài viết nổi bật</h1>
      <div className="space-y-4">
        {featured.map((p) => (
          <PostCard key={p.id} post={p} />
        ))}
      </div>
    </section>
  )
}
