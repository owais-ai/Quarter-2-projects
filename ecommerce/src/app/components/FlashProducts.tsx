import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "HAVIT HV-G92 Gamepad",
    image: "/g92-2-500x500 1.svg",
    alt: "HAVIT HV-G92 Gamepad",
    discount: "-40%",
    price: "$120",
    originalPrice: "$160",
    link: "#",
  },
  {
    id: 2,
    name: "AK-900 Wired Keyboard",
    image: "/keyboard.png",
    alt: "AK-900 Wired Keyboard",
    discount: "-35%",
    price: "$120",
    originalPrice: "$160",
    link: "#",
  },
  {
    id: 3,
    name: "IPS LCD Gaming Monitor",
    image: "/lcd.png",
    alt: "IPS LCD Gaming Monitor",
    discount: "-30%",
    price: "$120",
    originalPrice: "$160",
    link: "#",
  },
  {
    id: 4,
    name: "S-Series Comfort Chair",
    image: "/chair.png",
    alt: "S-Series Comfort Chair",
    discount: "-40%",
    price: "$120",
    originalPrice: "$160",
    link: "#",
  },
];

const FlashProducts = () => {
  return (
    <div>
      <div className="mt-20 w-5 h-10 rounded-md bg-[#DB4444] font-semibold flex items-center">
        <span className="ml-8 text-[#DB4444]">Today's</span>
      </div>

      <div className="Today's mb-20 mt-6 flex justify-between gap-20 items-baseline">
        <div className="">
          <div className="1-1">
            <div className="text-3xl font-semibold">Flash Sales</div>
          </div>
        </div>

        <div className="1-2">
          <Image src={"/flashSale.svg"} alt="" width={280} height={100} />
        </div>

        <div className="1-3">
          <Image
            src={"/arrows.svg"}
            alt=""
            width={100}
            height={100}
            className="ml-80"
          />
        </div>
      </div>

      {/* Flash Products */}

      <div className="flashProducts flex justify-around flex-wrap">
        {products.map((product) => (
          <div
            key={product.id}
                        className="w-[270px] h-[350px] flex flex-col gap-3 items-center text-center"
                      >
                        <div className="w-[270px] h-[250px] hover:scale-105 bg-[#F5F5F5] rounded transition-transform duration-300 relative">
                          <div className="h-[26px] w-[55px] bg-[#DB4444] absolute top-3 left-3 text-white flex items-center justify-center rounded">
                            {product.discount}
                          </div>
                          <div className="w-full h-[200px] flex justify-center items-center">
                            <Image
                              src={product.image}
                              alt={product.alt}
                              width={200}
                              height={180}
                              className="object-contain"
                            />
                          </div>
                        </div>
                        <div>
                          <p className="font-semibold">{product.name}</p>
                          <p className="flex gap-5 justify-center">
                            <span className="text-[#DB4444] text-[18px] font-semibold">
                              {product.price}
                            </span>
                            <span className="text-gray-500 font-semibold">
                              <s>{product.originalPrice}</s>
                            </span>
                          </p>
                        </div>
                      </div>
                    ))}
      </div>

      <div className="flex justify-center my-6">
        <button className="border-[1px] py-4 px-8 rounded text-white bg-[#DB4444]">
          View All Products
        </button>
      </div>
    </div>
  );
};

export default FlashProducts;
