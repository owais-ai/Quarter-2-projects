"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-gray-900 text-white fixed w-full z-10 top-0 shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <span className="text-2xl font-bold text-white hover:text-gray-300 cursor-pointer">
                Muhammad Owais Khan
              </span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex gap-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium ${pathname === link.path
                    ? "bg-gray-700 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu */}

          <div className="md:hidden mt-1 ml-auto">
            <Sheet>
              <SheetTrigger>
                <Menu />
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Navigate to?</SheetTitle>
                  <SheetDescription>
                    <div className="mt-10">
                      <ul className="flex flex-col items-center gap-10 font-semibold">
                        <Link
                          href={"/"}
                          className="border-b-2 border-transparent text-xl w-12 hover:border-slate-200"
                        >
                          Home
                        </Link>
                        <Link
                          href={"/about"}
                          className="hover:border-b-2 w-12 text-xl hover:border-slate-200"
                        >
                          About
                        </Link>
                        <Link
                          href={"/contact"}
                          className="hover:border-b-2 w-16 text-xl hover:border-slate-200"
                        >
                          Contact
                        </Link>
                      </ul>
                    </div>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
