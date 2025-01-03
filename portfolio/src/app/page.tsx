import Image from 'next/image';
import Link from 'next/link';



export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-10 flex flex-col md:flex-row items-center">
        {/* Profile Picture */}
        <div className="mb-8 md:mb-0 md:mr-10">
          <Image
            src="/profile.jpg" 
            alt="Your Name"
            width={550}
            height={250}
            className="rounded-full object-cover border-4 border-gray-300"
            priority 
          />
          
        </div>

        {/* Personal Information */}
        <div className="text-center md:text-left">
          <h1 className="text-5xl font-bold mb-4 text-gray-800">Muhammad Owais Khan</h1>
          <p className="text-lg text-gray-600 mb-6">
            I'm a Full Stack Developer proficient in TypeScript, Next.js, React.js, Python, and MERN stack development. With a background in Civil Engineering from NED UET and 3 years of development experience, I'm passionate about learning agentic AI and building innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/about" className="px-6 py-3 bg-blue-600 text-white rounded-md text-lg font-medium hover:bg-blue-700 transition">
              About Me
            </Link>
            <Link href="/contact" className="px-6 py-3 bg-gray-200 text-gray-800 rounded-md text-lg font-medium hover:bg-gray-300 transition">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
