import Image from "next/image"
import Link from "next/link"

function Footer() {
    return (
        <footer className="bg-black text-[#FAFAFA]">
            <div className="container flex flex-col md:flex-row justify-between mx-auto px-4 md:px-16 pt-5 pb-10 md:pb-20">
                {/* Subscribe Section */}
                <div className="flex flex-col gap-4 mb-8 md:mb-0">
                    <div>
                        <Image src="/logo.png" alt="Logo" width={60} height={60} />
                    </div>
                    <div className="text-xl">Subscribe</div>
                    <div>Get 10% off your first order</div>
                    <div>
                        <input
                            type="email"
                            placeholder="Enter Your Email"
                            className="bg-black text-[#FAFAFA] border-[#FAFAFA] border-2 rounded p-2 w-full"
                        />
                    </div>
                </div>

                {/* Support Section */}
                <div className="flex flex-col gap-4 mb-8 md:mb-0">
                    <div className="text-xl">Support</div>
                    <div>
                        Phase 2, DHA, Karachi,<br /> Pakistan
                    </div>
                    <div>exclusive@gmail.com</div>
                    <div>+92-000-1234567</div>
                </div>

                {/* Account Section */}
                <div className="flex flex-col gap-4 mb-8 md:mb-0">
                    <div className="text-xl">Account</div>
                    <div>My Account</div>
                    <div>Login / Register</div>
                    <div>Cart</div>
                    <div>Wishlist</div>
                    <div>Shop</div>
                </div>

                {/* Quick Link Section */}
                <div className="flex flex-col gap-4 mb-8 md:mb-0">
                    <div className="text-xl">Quick Link</div>
                    <div>Privacy Policy</div>
                    <div>Terms of Use</div>
                    <div>FAQ</div>
                    <div>Contact</div>
                </div>

                {/* Download App Section */}
                <div className="flex flex-col gap-4">
                    <div className="text-xl">Download App</div>
                    <div className="text-xs">Save $3 with App New User Only</div>
                    <div>
                        <Image src="/Footer code.svg" alt="Footer Code" width={150} height={50} />
                    </div>
                    <div className="flex gap-4">
                        <Link href="#" aria-label="Facebook">
                            <Image src="/fb.svg" alt="Facebook" width={10} height={20} />
                        </Link>
                        <Link href="#" aria-label="Twitter">
                            <Image src="/twitter.svg" alt="Twitter" width={20} height={20} />
                        </Link>
                        <Link href="#" aria-label="Instagram">
                            <Image src="/insta.svg" alt="Instagram" width={20} height={20} />
                        </Link>
                        <Link href="#" aria-label="LinkedIn">
                            <Image src="/linkedin.svg" alt="LinkedIn" width={18} height={20} />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Footer Bottom Text */}
            <div className="border-t border-slate-200 py-2 text-slate-300 text-center">
                <span className="text-[24px]">&copy;</span> Copyright Owais 2024. All rights reserved
            </div>
        </footer>
    )
}

export default Footer
