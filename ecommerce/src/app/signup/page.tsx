import Image from "next/image"


export default function Signup() {
    return (
        <div className="flex gap-44 py-10 mx-28">
            <div>
                <Image src={"/signup.webp"} alt="" width={580} height={400} />
            </div>

            <div className="flex flex-col gap-4 mt-4">
                <h1 className="text-3xl">Create an account</h1><br />
                <p>Enter your details below</p>
                <input type="text" placeholder="Name" className="border-b-2 px-3 mt-5 outline-none" />
                <input type="email" placeholder="Email or Phone Number" className="border-b-2 px-3 mt-5 outline-none" />
                <input type="password" placeholder="Password" className="border-b-2 px-3 mt-5 outline-none" />
                <button className="bg-[#DB4444] py-2 px-12 text-white rounded mt-12 mr-1">Send Message</button>

            </div>
        </div>
    )
};