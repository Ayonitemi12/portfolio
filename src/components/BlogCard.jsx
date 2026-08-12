

export function BlogCard({ post, onClick }) {
    return (
    <article 
      className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
      onClick={onClick}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {/* Category Badge */}
        <span className="absolute top-3 left-3 px-3 py-1 bg-purple-600/90 text-white text-xs font-semibold rounded-full">
          {post.category}
        </span>
        {/* Read Time Overlay */}
        <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
          {post.readTime}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-xs text-gray-500 dark:text-gray-400">{post.date}</span>
          <span className="w-1 h-1 bg-gray-300 dark:bg-gray-600 rounded-full"></span>
          <span className="text-xs text-purple-600 dark:text-purple-400">{post.readTime}</span>
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
    </article>
  );
}

export default BlogCard
