import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Header() {
  return (
    <div>
      {/* Top Bar */}
      <div className="relative flex flex-col md:flex-row justify-center px-4 text-white items-center bg-black py-2 md:py-4 md:pr-28">
        <div className="flex flex-col md:flex-row gap-2 md:gap-6 text-center">
          <p className="text-sm md:text-base">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
          <span className="font-semibold cursor-pointer underline hidden md:flex">
            ShopNow
          </span>
        </div>
        <div className="absolute md:flex items-center gap-2 mt-2 md:mt-0 hidden md:right-28">
          <span className="text-sm">English</span>
          <Image
            src={"/dropdown.png"}
            alt={"dropdown"}
            width={16}
            height={16}
          />
        </div>
      </div>

      {/* Main Navigation */}
      <div className="flex flex-col md:flex-row justify-between px-4 md:px-28 mt-4 md:my-6 items-center">
        {/* Logo */}
        <div className="mb-4 md:mb-0">
          <Link href="/">
            <Image src="/logo.png" alt="logo" width={68} height={48} />
          </Link>
        </div>

        <div>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger>
                <Menu />
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Navigate to?</SheetTitle>
                  <SheetDescription>
                    <ul className="flex flex-col gap-4 ">
                      <li className="border-b-2 hover:border-slate-300">
                        <Link href="/">Home</Link>
                      </li>
                      <li className="hover:border-b-2 hover:border-slate-300">
                        <Link href="/contact">Contact</Link>
                      </li>
                      <li className="hover:border-b-2 hover:border-slate-300">
                        <Link href="/about">About</Link>
                      </li>
                      <li className="hover:border-b-2 hover:border-slate-300">
                        <Link href="/signup">Signup</Link>
                      </li>
                    </ul>
                    <div className="flex gap-3 justify-center mt-6">
                      <button>
                        <Image
                          src="/wishlist.svg"
                          alt="wishlist"
                          width={16}
                          height={16}
                        />
                      </button>
                      <button>
                        <Image
                          src="/cart.svg"
                          alt="cart"
                          width={20}
                          height={16}
                        />
                      </button>
                    </div>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>

          {/* Navigation Links */}
          <ul className="md:flex flex-col md:flex-row gap-4 md:gap-10 text-center hidden">
            <li className="border-b-2 hover:border-slate-300">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:border-b-2 hover:border-slate-300">
              <Link href="/contact">Contact</Link>
            </li>
            <li className="hover:border-b-2 hover:border-slate-300">
              <Link href="/about">About</Link>
            </li>
            <li className="hover:border-b-2 hover:border-slate-300">
              <Link href="/signup">Signup</Link>
            </li>
          </ul>
        </div>

        {/* Search and Icons */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center mt-4 md:mt-0">
          <div className="flex items-center bg-slate-100 rounded w-full md:w-[243px] h-10">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="bg-slate-100 text-sm p-2 w-full outline-none"
            />
            <button className="px-2">
              <Image
                src="/search.svg"
                alt="search icon"
                width={16}
                height={16}
              />
            </button>
          </div>
          <div className="md:flex gap-5 hidden">
            <button>
              <Image
                src="/wishlist.svg"
                alt="wishlist"
                width={16}
                height={16}
              />
            </button>
            <button>
              <Image src="/cart.svg" alt="cart" width={20} height={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-slate-200 my-4 mx-4 md:mx-28" />
    </div>
  );
}
