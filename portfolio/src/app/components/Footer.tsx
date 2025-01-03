
'use client'; 

import Link from 'next/link';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Contact Information */}
          <div className="mb-4 md:mb-0">
            <p className="text-sm">
              © {new Date().getFullYear()} Muhammad Owais Khan. All rights reserved.
            </p>
            <p className="text-sm">
              Email: <a href="mailto:ranaowais118@gmail.com" className="text-blue-400 hover:underline">ranaowais118@gmail.com</a>
            </p>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-4">
            <Link href="https://www.linkedin.com/in/muhammad-owais-8000182bb/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin className="h-6 w-6 text-blue-400 hover:text-blue-600" />
            </Link>
            <Link href="https://github.com/owais-ai/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub className="h-6 w-6 text-gray-400 hover:text-white" />
            </Link>
            <Link href="mailto:ranaowais118@gmail.com" aria-label="Email">
              <FaEnvelope className="h-6 w-6 text-red-400 hover:text-red-600" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
