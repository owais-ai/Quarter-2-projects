
import Link from 'next/link';
import { blogs } from './data/blog';

const HomePage = () => {
  // Select featured blogs (the latest 3)
  const featuredBlogs = blogs.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gray-100 py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Welcome to My Blog
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Your go-to place for web development tutorials and articles.
            </p>
            <Link
              href="/blog"
              className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg hover:bg-blue-700 transition inline-block"
            >
              Read Our Blogs
            </Link>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8">
              Featured Posts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredBlogs.map((blog) => (
                <div key={blog.id} className="border rounded-lg shadow-md hover:shadow-lg transition">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-blue-600 mb-2">
                      {blog.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                    <Link
                      href={`/blog/${blog.slug}`}
                      className="text-blue-500 hover:underline"
                    >
                      Read More &rarr;
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

          </div>
  );
};

export default HomePage;