import Image from "next/image";

export default function Signup() {
  return (
    <div className="container mx-auto px-4 py-14">
      <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:px-16">
        {/* Form Section */}
        <div className="md:w-1/2 w-full">
          <form className="flex flex-col gap-6 items-center md:items-start">
            <h1 className="text-3xl font-semibold">Create an Account</h1>
            <p className="text-gray-700">Enter your details below</p>

            {/* Name, Email Fields and Password Field  */}

            <input
              type="text"
              placeholder="Name"
              className="border border-gray-300 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-[#DB4444] bg-slate-100 w-2/3"
            />
            <input
              type="email"
              placeholder="Email or Phone Number"
              className="border border-gray-300 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-[#DB4444] bg-slate-100 w-2/3"
            />

            <input
              type="password"
              placeholder="Password"
              className="border border-gray-300 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-[#DB4444] bg-slate-100 w-2/3"
            />

            {/* Submit Button */}
            <div className="flex justify-center md:justify-start mt-4">
              <button
                type="submit"
                className="bg-[#DB4444] hover:bg-[#c43333] text-white py-2 px-16 rounded transition duration-300"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 w-full">
          <Image
            src="/signup.webp"
            alt="Signup Image"
            width={580}
            height={400}
            className="w-full h-auto object-cover rounded"
            priority
          />
        </div>
      </div>
    </div>
  );
}
