import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import Navbar from '../layout/Navbar';


export function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <section className="min-h-screen py-20 px-4 bg-white dark:bg-gray-900">
        <Navbar />
        <div className="container mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Article Not Found
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            The article you're looking for doesn't exist.
          </p>
          <Link 
            to="/blog"
            className="px-6 py-3 bg-linear-to-r from-purple-600 to-blue-500 text-white rounded-full font-medium hover:shadow-lg transition-all"
          >
            Back to Blog
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen py-20 px-4 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto max-w-3xl">
        {/* Back Button */}
        <Link 
          to="/blog"
          className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors mb-6"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Articles
        </Link>

        {/* Header Image */}
        <div className="rounded-xl overflow-hidden mb-6">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-64 md:h-96 object-cover"
          />
        </div>

        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="px-3 py-1 bg-purple-600/20 text-purple-700 dark:text-purple-300 text-xs font-semibold rounded-full">
            {post.category}
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400">{post.date}</span>
          <span className="w-1 h-1 bg-gray-300 dark:bg-gray-600 rounded-full"></span>
          <span className="text-sm text-gray-500 dark:text-gray-400">{post.readTime}</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {post.title}
        </h1>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {post.tags.map((tag) => (
            <span 
              key={tag}
              className="text-xs px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Content */}
        <div 
          className="prose prose-lg dark:prose-invert max-w-none
            prose-headings:text-gray-900 dark:prose-headings:text-white
            prose-p:text-gray-700 dark:prose-p:text-gray-300
            prose-strong:text-gray-900 dark:prose-strong:text-white
            prose-a:text-purple-600 dark:prose-a:text-purple-400
            prose-code:bg-gray-100 dark:prose-code:bg-gray-800 prose-code:px-1 prose-code:py-0.5 prose-code:rounded
            prose-pre:bg-gray-900 dark:prose-pre:bg-gray-800 text-gray-800 dark:text-gray-100"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </section>
  );
}

export default BlogPost
