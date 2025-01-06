import Image from "next/image";

const bestSellingProducts = [
  {
    id: 1,
    name: "The North Coat",
    image: "/shirt.png",
    alt: "The North Coat",
    discount: "-40%",
    price: "$120",
    originalPrice: "$160",
    imageWidth: 180,
    imageHeight: 180,
  },
  {
    id: 2,
    name: "Gucci Duffle Bag",
    image: "/purse.png",
    alt: "Gucci Duffle Bag",
    discount: "-40%",
    price: "$120",
    originalPrice: "$160",
    imageWidth: 180,
    imageHeight: 180,
  },
  {
    id: 3,
    name: "RGB Liquid CPU Cooler",
    image: "/speaker.png",
    alt: "RGB Liquid CPU Cooler",
    discount: "-40%",
    price: "$120",
    originalPrice: "$160",
    imageWidth: 200,
    imageHeight: 180,
  },
  {
    id: 4,
    name: "Small BookSelf",
    image: "/table.png",
    alt: "Small BookSelf",
    discount: "-40%",
    price: "$120",
    originalPrice: "$160",
    imageWidth: 250,
    imageHeight: 180,
  },
];

const BestSellingProducts = () => {
  return (
    <div>
      <div className="Month">
        <div className="flex mt-20 items-center">
          <div className=" w-5 h-10 rounded-md bg-[#DB4444] flex items-center"></div>
          <p className="ml-3 text-[#DB4444] font-semibold ">This Month</p>
        </div>

        <div className="Today's mb-14 mt-6 flex justify-between gap-20 items-baseline">
          <div className="text-3xl font-semibold">Best Selling Products</div>
          <div className="">
            <button className="border-[1px] py-4 px-12 rounded text-white bg-[#DB4444]">
              View All
            </button>
          </div>
        </div>
      </div>
      <div className="BestSellingProducts flex justify-around flex-wrap">
        {bestSellingProducts.map((product) => (
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
                  width={product.imageWidth}
                  height={product.imageHeight}
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
    </div>
  );
};

export default BestSellingProducts;
