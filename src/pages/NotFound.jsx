import { Link } from 'react-router-dom';

export function NotFound() {
   return (
    <section className="min-h-screen flex items-center justify-center px-4 bg-white dark:bg-gray-900">
      <div className="text-center max-w-2xl">
        <h1 className="text-8xl md:text-9xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-blue-500 animate-pulse">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link 
          to="/"
          className="px-8 py-3 bg-linear-to-r from-purple-600 to-blue-500 text-white rounded-full font-medium hover:shadow-lg transition-all inline-block"
        >
          Go Home
        </Link>
      </div>
    </section>
  );
}

export default NotFound
