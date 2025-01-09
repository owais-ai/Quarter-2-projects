import Image from "next/image";
import Link from "next/link";
import ProductCategories from "./components/ProductCategories";
import FlashProducts from "./components/FlashProducts";
import BestSellingProducts from "./components/BestSellingProducts";

export default function Home() {
  // components/FlashProducts.js

  return (
    <div className="Main">
      <div className="Hero mt-10 flex justify-between mx-28">
        {/* Category Section */}
        <div className="Hero1 hidden md:block">
          <ul className="flex flex-col justify-between h-[344px]">
            <Link href="#">
              <li className="hover:underline">Woman's Fashion</li>
            </Link>
            <Link href="#">
              <li className="hover:underline">Man's Fashion</li>
            </Link>
            <Link href="#">
              <li className="hover:underline">Electronics</li>
            </Link>
            <Link href="#">
              <li className="hover:underline">Home & Electronics</li>
            </Link>
            <Link href="#">
              <li className="hover:underline">Medicine</li>
            </Link>
            <Link href="#">
              <li className="hover:underline">Sports & Outdoor</li>
            </Link>
            <Link href="#">
              <li className="hover:underline">Baby & Toys</li>
            </Link>
            <Link href="#">
              <li className="hover:underline">Grocery & Pets</li>
            </Link>
            <Link href="#">
              <li className="hover:underline">Heath & Beauty</li>
            </Link>
          </ul>
        </div>

        {/* Hero section */}
        <div className="Hero2 w-[894px] h-[344px] hidden md:flex md:flex-col items-center justify-center gap-10 bg-black overflow-hidden">
          <div className="hero1 flex gap-44">
            <div className="flex flex-col gap-8 pt-10">
              <div>
                <Image
                  src={"/iphone-frame.svg"}
                  alt="iphoneImg"
                  width={190}
                  height={49}
                />
              </div>
              <div className="text-white text-5xl">
                Up to 10% <br /> off Voucher
              </div>

              <div className="flex gap-2">
                <div className="text-white text-[18px] font-semibold">
                  <button>Shop Now</button>
                </div>
                <div>
                  <button>
                    <Image
                      src={"/icons arrow-right.svg"}
                      alt="iphoneImg"
                      width={24}
                      height={24}
                    />
                  </button>
                </div>
              </div>
            </div>
            <div className="HeroiphoneImage relative top-10 left-14">
              <Image
                src={"/HeroIphone.svg"}
                alt="iphoneHeroImg"
                width={400}
                height={24}
              />
            </div>
          </div>
          <div className="dots">
            <Image
              src={"/dotFrame.svg"}
              alt="iphoneImg"
              width={100}
              height={24}
            />
          </div>
        </div>
      </div>

      {/* Flash Products */}
      <div className="md:mx-20">
        <FlashProducts />
      </div>

      {/* Product Categories */}
      <div className="md:mx-20">
      <ProductCategories /></div>

      {/* Best Selling products of Month */}
      <div className="md:mx-20"><BestSellingProducts /></div>
    </div>
  );
}
