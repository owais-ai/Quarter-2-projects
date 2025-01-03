
'use client';

import { useState } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // State to manage form submission status
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you can integrate with an API route or a third-party service to handle form submissions
    console.log('Form Data:', formData);
    // Reset form fields
    setFormData({ name: '', email: '', message: '' });
    // Update submission status
    setIsSubmitted(true);
    // Optionally, add a timeout to hide the success message after a few seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="flex flex-col items-center justify-center py-20 px-4">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-10">
        <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Contact Me</h1>

        {/* Success Message */}
        {isSubmitted && (
          <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-md text-center">
            Thank you for your message! I'll get back to you soon.
          </div>
        )}

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Your Name"
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="your.email@example.com"
            />
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
              Message<span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Your message here..."
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white rounded-md text-lg font-medium hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </div>
        </form>

        {/* Alternative Contact */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">Or Reach Out Via</h2>
          <div className="flex flex-wrap justify-center space-x-6 md:space-x-20">
            <a
              href="mailto:ranaowais118@gmail.com"
              className="flex items-center text-blue-600 hover:text-blue-800 transition"
              aria-label="Email"
            >
              <FaEnvelope className="h-6 w-6 mr-2" />
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-owais-8000182bb/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-600 hover:text-blue-800 transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="h-6 w-6 mr-2" />
              LinkedIn
            </a>
            <a
              href="https://github.com/owais-ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-600 hover:text-blue-800 transition"
              aria-label="GitHub"
            >
              <FaGithub className="h-6 w-6 mr-2" />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
