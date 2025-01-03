
import { blogs, Blog } from '@/app/data/blog';
import Link from 'next/link';
import Head from 'next/head';
import CommentsSection from '@/app/components/CommentsSection';



interface BlogPostProps {
  params: {
    slug: string;
  };
}

const BlogPost = ({ params }: BlogPostProps) => {
  const { slug } = params;
  const blog: Blog | undefined = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <div className="flex flex-col min-h-screen">

        <main className="flex-grow flex items-center justify-center bg-gray-100">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Blog Post Not Found</h2>
            <p className="text-gray-600">Sorry, the blog post you are looking for does not exist.</p>
            <Link
              href="/blog"
              className="mt-4 inline-block text-blue-500 hover:underline"
            >
              Back to Blog
            </Link>
          </div>
        </main>
        <footer className="bg-gray-800 py-6">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} My Blog. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* SEO Metadata */}
      <Head>
        <title>{blog.title} | My Blog</title>
        <meta name="description" content={blog.excerpt} />
      </Head>


      <main className="flex-grow bg-gray-50 py-12">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{blog.title}</h1>
          <p className="text-gray-500 mb-8">Published on {new Date(blog.date).toLocaleDateString()}</p>
          <div
            className="prose prose-lg text-gray-700"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          ></div>

          {/* Comments Section */}
          <CommentsSection />
          
          <Link
            href="/blog"
            className="mt-8 inline-block text-blue-500 hover:underline"
          >
            ← Back to Blog
          </Link>
        </div>
      </main>



    </div>
  );
};

export default BlogPost;