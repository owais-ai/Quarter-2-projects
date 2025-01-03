
import Link from 'next/link';
import { blogs } from '../data/blog';

const BlogPage = () => {
  return (
    <div className="flex flex-col min-h-screen">


      <main className="flex-grow bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">Blog Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <div key={blog.id} className="bg-white border rounded-lg shadow-md hover:shadow-lg transition">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-blue-600 mb-2">{blog.title}</h3>
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
      </main>

    </div>
  );
};

export default BlogPage;