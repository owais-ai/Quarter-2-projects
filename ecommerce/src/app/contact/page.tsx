import Image from "next/image"


export default function Contact() {
    return (
        <div className="flex justify-around py-14 mx-28">

            <div className="1">
                <div className="flex items-center gap-2">
                    <Image src={"/icons-phone.svg"} alt="" width={50} height={40} />
                    <span className="text-[20px] font-semibold">Call to Us</span>
                </div>
                <div className="ml-5 mt-3">We are available 24/7, 7 days a week. <br />
                    Phone: +92-000-1234567</div>
                <div className="w-80 border-b-2 my-6" />
                <div className="flex items-center gap-2 mt-10">
                    <Image src={"/icons-mail.svg"} alt="" width={50} height={40} />
                    <span className="text-[20px] font-semibold">Write To US</span>
                </div>
                <div className="ml-5 mt-3">Fill out our form and we will contact <br /> you within 24 hours. <br /> <br />
                    Phone: +92-000-1234567</div>
                <div className="ml-5 mt-3">Emails: customer@exclusive.com <br />
                    Emails: support@exclusive.com</div>
            </div>

            <div className="2">
                <div className="flex gap-4">
                <input type="text" placeholder="Your Name" className="border-b-2 px-3 py-2 mt-5 outline-none bg-slate-100" />
                <input type="email" placeholder="Your Email" className="border-b-2 px-3 py-2 mt-5 outline-none bg-slate-100" />
                <input type="text" placeholder="Your Phone" className="border-b-2 px-3 py-2 mt-5 outline-none bg-slate-100" />
                </div>
                <div>
                <input type="text" placeholder="Your Message" className="border-b-2 px-3 mt-5 outline-none bg-slate-100 h-48 min-w-full" />
                </div>

                <div className="flex justify-end">
                    <button className="bg-[#DB4444] py-2 px-12 text-white rounded mt-12 mr-1">Send Message</button>
                </div>
            </div>


        </div>
    )
};