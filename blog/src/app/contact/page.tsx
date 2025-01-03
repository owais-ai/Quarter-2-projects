

const ContactPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
  

      <main className="flex-grow bg-gray-100 py-12">
        <div className="max-w-md mx-auto px-4 bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Contact Us</h2>
          <form className="space-y-4" action="/api/contact" method="POST">
            <div>
              <label htmlFor="name" className="block text-gray-700">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700">
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </main>

    </div>
  );
};

export default ContactPage;
