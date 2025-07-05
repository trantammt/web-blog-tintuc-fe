import Header from '../components/Header'
import FeaturedPosts from '../components/FeaturedPosts'
import PostsList from '../components/PostsList'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="max-w-3xl w-full mx-auto px-4">
        <FeaturedPosts />
        <PostsList />
      </main>
    </div>
  )
}
