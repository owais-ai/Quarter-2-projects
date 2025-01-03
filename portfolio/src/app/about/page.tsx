'use client';

import Image from 'next/image';
import { FaGraduationCap, FaBriefcase, FaTools } from 'react-icons/fa';

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-10">
        <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">About Me</h1>

        {/* Profile Section */}
        <div className="flex flex-col md:flex-row items-center mb-10">
          <div className="mb-6 md:mb-0 md:mr-10">
            <Image
              src="/profile.jpg" // Ensure your image is placed in the public folder
              alt="Your Name"
              width={550}
              height={350}
              className="rounded-full object-cover border-4 border-gray-300"
              priority // Ensures the image loads quickly
            />
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-semibold mb-4 text-gray-800">Hello! I'm Muhammad Owais Khan</h2>
            <p className="text-lg text-gray-600 text-justify">
              I'm a passionate Full Stack Developer with expertise in TypeScript, Next.js, React.js, Python, and the MERN stack. Holding a degree in Civil Engineering from NED University of Engineering & Technology (NED UET), I have over 3 years of experience in web development. Currently, I'm exploring the fascinating world of agentic AI to enhance my skill set and contribute to innovative projects.
            </p>
          </div>
        </div>

        {/* Education Section */}
        <section className="mb-10">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
            <FaGraduationCap className="mr-2 text-blue-600" />
            Education
          </h3>
          <div className="bg-gray-100 p-4 rounded-md">
            <h4 className="text-xl font-medium mb-2">Bachelor of Civil Engineering</h4>
            <p className="text-gray-700">
              NED University of Engineering & Technology (NED UET), 2019
            </p>
          </div>
        </section>

        {/* Professional Experience */}
        <section className="mb-10">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
            <FaBriefcase className="mr-2 text-green-600" />
            Professional Experience
          </h3>
          <div className="space-y-6">
            {/* Experience 1 */}
            <div className="bg-gray-100 p-4 rounded-md">
              <h4 className="text-xl font-medium mb-2">Full Stack Developer</h4>
              <p className="text-gray-700 mb-2">Envision Technologies, Sep 2019 - Oct 2024</p>
              <ul className="list-disc list-inside text-gray-700">
                <li>Developed and maintained web applications using Next.js, React.js, and TypeScript.</li>
                <li>Collaborated with cross-functional teams to define, design, and ship new features.</li>
                <li>Implemented RESTful APIs and integrated third-party services.</li>
                <li>Optimized applications for maximum speed and scalability.</li>
              </ul>
            </div>
            {/* Experience 2 */}
            <div className="bg-gray-100 p-4 rounded-md">
              <h4 className="text-xl font-medium mb-2">Junior Developer</h4>
              <p className="text-gray-700 mb-2">ABC Company, Jun 2018 - Sep 2019</p>
              <ul className="list-disc list-inside text-gray-700">
                <li>Assisted in the development of web applications using the MERN stack.</li>
                <li>Participated in code reviews and contributed to improving code quality.</li>
                <li>Worked closely with designers to implement user-friendly interfaces.</li>
                <li>Maintained documentation for various projects and features.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-10">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
            <FaTools className="mr-2 text-purple-600" />
            Skills
          </h3>
          <div className="flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-2">

            <span className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full">TypeScript</span>
            <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full">Next.js</span>
            <span className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full">React.js</span>
            <span className="bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full">Python</span>
            <span className="bg-red-200 text-red-800 px-3 py-1 rounded-full">MERN Stack</span>
            <span className="bg-purple-200 text-purple-800 px-3 py-1 rounded-full">Agentic AI</span>

          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-10">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
            <FaBriefcase className="mr-2 text-blue-600" />
            Projects
          </h3>
          <div className="space-y-6">
            {/* Project 1 */}
            <div className="bg-gray-100 p-4 rounded-md">
              <h4 className="text-xl font-medium mb-2">Project One</h4>
              <p className="text-gray-700 mb-2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat quam natus eaque earum, esse doloribus doloremque commodi ducimus sint harum eligendi ullam nulla atque totam facere, voluptate eius hic blanditiis?
              </p>
              <a
                href="https://github.com/owais-ai" // Replace with actual link
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                View on GitHub
              </a>
            </div>
            {/* Project 2 */}
            <div className="bg-gray-100 p-4 rounded-md">
              <h4 className="text-xl font-medium mb-2">Project Two</h4>
              <p className="text-gray-700 mb-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam dicta dignissimos dolor non sapiente odit quos corrupti nesciunt cumque? Itaque, saepe. Earum deleniti eligendi quod a consequuntur aperiam similique placeat obcaecati voluptates.
              </p>
              <a
                href="https://github.com/owais-ai" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                View on GitHub
              </a>
            </div>
           </div>
        </section>

      </div>
    </div>
  );
}
