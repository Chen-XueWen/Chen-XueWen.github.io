import { Link, useParams } from 'react-router-dom'
import posts from '../blog/posts.json'
import ReactMarkdown from 'react-markdown'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import remarkGfm from 'remark-gfm'
import 'katex/dist/katex.min.css'

export default function BlogPost() {
  const { slug } = useParams()
  const post = posts.find((p) => p.slug === slug)

  if (!post) {
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
                <Link to="/blog" className="inline-flex items-center h-10 text-sm font-medium text-slate-600 hover:text-slate-900 capitalize">Blog</Link>
              </div>
            </div>
          </div>
        </nav>
        <main className="px-6 pt-28 pb-24">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-2xl font-medium text-slate-900 mb-4">Post not found</h1>
            <Link to="/blog" className="text-slate-600 hover:text-slate-900 underline">Back to blog</Link>
          </div>
        </main>
      </div>
    )
  }

  const md = post.body ? post.body : Array.isArray(post.content) ? post.content.join('\n\n') : ''

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
          </div>
        </div>
      </nav>

      <main className="px-6 pt-28 pb-24">
        <article className="max-w-3xl mx-auto">
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-light text-slate-900 mb-2">{post.title}</h1>
            {post.date && (
              <div className="text-sm text-slate-500">{new Date(post.date).toLocaleDateString()}</div>
            )}
          </header>

          <section className="prose prose-slate max-w-none">
            <ReactMarkdown
              remarkPlugins={[remarkGfm, remarkMath]}
              rehypePlugins={[rehypeKatex]}
            >
              {md}
            </ReactMarkdown>
          </section>

          <footer className="mt-10">
            <Link to="/blog" className="text-slate-600 hover:text-slate-900 underline">← Back to blog</Link>
          </footer>
        </article>
      </main>
    </div>
  )
}
