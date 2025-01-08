import Image from "next/image"

export default function About() {
    return (
        <div className="container mx-auto px-6 md:px-20 py-10">
            <div className="flex flex-col-reverse md:flex-row items-center gap-10">
                {/* Text Content Section */}
                <div className="md:w-1/2">
                    <h1 className="text-3xl font-semibold mb-4">Our Story</h1>
                    <p className="text-gray-700 leading-relaxed">
                        Launched in 2015, Exclusive is South Asia's premier online shopping marketplace with an active presence in Bangladesh. Supported by a wide range of tailored marketing, data, and service solutions, Exclusive has 10,500 sellers and 300 brands and serves 3 million customers across the region.
                        <br /><br />
                        Exclusive offers more than 1 million products, growing rapidly. Our diverse assortment spans categories ranging from consumer electronics to fashion, home essentials, and more, ensuring that our customers find exactly what they're looking for.
                    </p>
                </div>

                {/* Image Section */}
                <div className="md:w-1/2">
                    <Image 
                        src="/about.webp" 
                        alt="Our Story Image" 
                        width={650} 
                        height={400} 
                        className="w-full h-auto object-cover rounded" 
                        priority
                    />
                </div>
            </div>
        </div>
    )
}
