import Image from "next/image"

export default function Contact() {
    return (
        <div className="container mx-auto px-4 py-14">
            <div className="flex md:mx-16 flex-col md:flex-row justify-between gap-10">
                {/* Contact Information Section */}
                <div className="flex-1">
                    {/* Call to Us */}
                    <div className="flex items-center gap-2">
                        <Image src="/icons-phone.svg" alt="Phone Icon" width={50} height={40} />
                        <span className="text-xl font-semibold">Call to Us</span>
                    </div>
                    <div className="ml-5 mt-3 text-sm md:text-base">
                        We are available 24/7, 7 days a week.<br />
                        Phone: <a href="tel:+920001234567" className="text-blue-400">+92-000-1234567</a>
                    </div>
                    <div className="w-full border-b-2 my-6" />
                    
                    {/* Write To Us */}
                    <div className="flex items-center gap-2 mt-10">
                        <Image src="/icons-mail.svg" alt="Mail Icon" width={50} height={40} />
                        <span className="text-xl font-semibold">Write To Us</span>
                    </div>
                    <div className="ml-5 mt-3 text-sm md:text-base">
                        Fill out our form and we will contact you within 24 hours.<br /><br />
                        Phone: <a href="tel:+920001234567" className="text-blue-400">+92-000-1234567</a>
                    </div>
                    <div className="ml-5 mt-3 text-sm md:text-base">
                        Emails: <a href="mailto:customer@exclusive.com" className="text-blue-400">customer@exclusive.com</a><br />
                        Emails: <a href="mailto:support@exclusive.com" className="text-blue-400">support@exclusive.com</a>
                    </div>
                </div>

                {/* Contact Form Section */}
                <div className="flex-1">
                    <form className="flex flex-col gap-4">
                        {/* Name and Email Fields */}
                        <div className="flex flex-col md:flex-row gap-4">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#DB4444] bg-slate-100 w-full"
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#DB4444] bg-slate-100 w-full"
                            />
                        </div>

                        {/* Phone Field */}
                        <input
                            type="text"
                            placeholder="Your Phone"
                            className="border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#DB4444] bg-slate-100"
                        />

                        {/* Message Field */}
                        <textarea
                            placeholder="Your Message"
                            className="border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#DB4444] bg-slate-100 h-40 resize-none"
                        ></textarea>

                        {/* Submit Button */}
                        <div className="flex justify-center md:justify-end">
                            <button
                                type="submit"
                                className="bg-[#DB4444] hover:bg-[#c43333] text-white py-2 px-6 rounded transition duration-300 my-4"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
