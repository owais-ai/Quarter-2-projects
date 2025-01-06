import Image from "next/image"


export default function About() {
    return (
        <div className="flex justify-center gap-44 py-10 mx-28">

            <div className="flex flex-col mt-4 w-2/3">
                <h1 className="text-3xl">Our Story</h1><br />
                <p className="">Launced in 2015, Exclusive is South Asia's premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. <br /> <br /> Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging from consumer.</p>
            </div>

            <div>
                <Image src={"/about.webp"} alt="" width={650} height={400} />
            </div>

        </div>
    )
};