import { Link } from 'react-router-dom'
import posts from '../blog/posts.json'

export default function BlogList() {
  const sorted = [...posts].sort((a, b) => new Date(b.date) - new Date(a.date))

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full z-50 bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="text-2xl font-light text-slate-800 tracking-wide">
              Xue Wen Tan
            </Link>
            <div className="hidden md:flex space-x-10">
              <Link to="/" className="inline-flex items-center h-10 text-sm font-medium text-slate-600 hover:text-slate-900 capitalize">Home</Link>
              <Link to="/blog" className="inline-flex items-center h-10 text-sm font-medium text-slate-900 border-b-2 border-slate-900 pb-1 capitalize">Blog</Link>
            </div>
            {/* Mobile: show a direct Home link */}
            <div className="md:hidden">
              <Link
                to="/"
                aria-label="Go to home"
                className="inline-flex items-center h-10 text-sm font-medium text-slate-600 hover:text-slate-900 capitalize"
              >
                Home
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="px-6 pt-28 pb-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-light text-slate-900 mb-2">Blog</h1>
          <p className="text-slate-600 mb-10">Articles and notes.</p>

          <div className="divide-y divide-slate-200 border-y border-slate-200">
            {sorted.map((post) => (
              <article key={post.slug} className="py-6">
                <h2 className="text-xl md:text-2xl font-medium text-slate-900 mb-1">
                  <Link to={`/blog/${post.slug}`} className="hover:underline">
                    {post.title}
                  </Link>
                </h2>
                {post.date && (
                  <div className="text-sm text-slate-500">{new Date(post.date).toLocaleDateString()}</div>
                )}
                {post.summary && (
                  <p className="text-slate-600 mt-3">{post.summary}</p>
                )}
              </article>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
