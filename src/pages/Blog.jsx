import { useState } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';

export function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Get unique categories
  const categories = ['All', ...new Set(blogPosts.map(post => post.category))];

  // Filter posts
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="min-h-screen py-20 px-4 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
        
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="bg-linear-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">Blog</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Thoughts, tutorials, and insights on web development, design, and more.
          </p>
        </div>

        {/* Search & Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <input
            type="text"
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-linear-to-r from-purple-600 to-blue-500 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Grid */}
        {filteredPosts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No articles found. Try adjusting your search.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

// Blog Card Component
function BlogCard({ post }) {
  return (
    <Link 
      to={`/blog/${post.slug}`}
      className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 block"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <span className="absolute top-3 left-3 px-3 py-1 bg-purple-600/90 text-white text-xs font-semibold rounded-full">
          {post.category}
        </span>
        <span className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
          {post.readTime}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="text-xs text-gray-500 dark:text-gray-400 mb-2">
          {post.date}
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
          {post.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2 mb-3">
          {post.excerpt}
        </p>
        <div className="flex flex-wrap gap-2">
          {post.tags.slice(0, 3).map((tag) => (
            <span 
              key={tag}
              className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full"
            >
              #{tag}
            </span>
          ))}
          {post.tags.length > 3 && (
            <span className="text-xs text-gray-400 dark:text-gray-500">
              +{post.tags.length - 3}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}

export default Blog
