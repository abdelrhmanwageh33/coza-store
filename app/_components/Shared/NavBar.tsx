'use client'

import CartSheat from "@/app/(mainRoute)/cart/_components/CartSheat";
import { useCart } from "@/app/lib/context/CartContext";
import { useWhishList } from "@/app/lib/context/WhishlistContext";
import { Product } from "@/app/lib/type/product.type";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import {
  Avatar,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { Heart, Login, Logout, SearchNormal, ShoppingCart } from "iconsax-reactjs";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export function NavBar() {
  const { status } = useSession()
  const { cartNums, cart } = useCart()
  const { whishNums } = useWhishList()
  const product = cart?.data?.products

  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <Navbar
      fluid
      rounded
      className={`fixed top-0 w-full z-50 transition-all duration-300
        ${isScrolled ? "bg-white/95 backdrop-blur-md border-b border-gray-200" : "bg-transparent"}
      `}
    >
      {/* Logo */}
      <NavbarBrand as={Link} href="/" className="flex items-center gap-2">
        <Image
          src="/assets/logo-01.webp"
          alt="logo"
          width={110}
          height={40}
          className="object-contain"
        />
      </NavbarBrand>

      {/* Right Icons */}
      <div className="flex items-center gap-5 md:order-2">

        <SearchNormal
          size="22"
          className="cursor-pointer text-gray-600 hover:text-black transition"
        />

        {/* Cart */}
        <div className="relative cursor-pointer">
          <Sheet>
            <SheetTrigger asChild>
              <button>
                <ShoppingCart
                  size={22}
                  className="text-gray-600 hover:text-black transition"
                />
              </button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[380px] h-screen flex flex-col">
              <SheetHeader>
                <SheetTitle>Cart</SheetTitle>
              </SheetHeader>

              <div className="mt-6 flex-1 overflow-y-auto pr-2">
                {product?.map((p: Product) => (
                  <CartSheat product={p} key={p._id} />
                ))}
              </div>

              <Link href="/cart">
                <button className="bg-black text-white p-2 w-full rounded-lg mt-2">Go to Cart</button>
              </Link>
            </SheetContent>
          </Sheet>

          <span
            className="absolute -top-2 -right-2 min-w-[18px] h-[18px] flex items-center justify-center
                       bg-red-600 text-white text-[11px] rounded-full font-semibold"
          >
            {cartNums}
          </span>
        </div>

        {/* Wishlist */}
        <Link href="/Wishlist" className="relative inline-block">
          <Heart
            size={22}
            className="cursor-pointer text-gray-600 hover:text-red-500 transition"
          />
          <span
            className="absolute -top-2 -right-2 min-w-[18px] h-[18px] flex items-center justify-center
                       bg-red-600 text-white text-[11px] rounded-full font-semibold"
          >
            {whishNums}
          </span>
        </Link>

        {/* Auth */}
        {status === "loading" ? (
          <span className="text-sm text-gray-400">...</span>
        ) : status === "authenticated" ? (
          <Logout
            size="22"
            className="cursor-pointer text-red-600 hover:scale-110 transition"
            onClick={() => signOut({ callbackUrl: "/Login" })}
          />
        ) : (
          <Login
            size="22"
            className="cursor-pointer text-gray-600 hover:text-black transition"
            onClick={() => signIn()}
          />
        )}

        <NavbarToggle />
      </div>

      {/* Links */}
      <NavbarCollapse>
        {[
          { name: "Home", href: "/" },
          { name: "Products", href: "/products" },
          { name: "Cart", href: "/cart" },
          { name: "About", href: "/about" },
          { name: "Contact", href: "/contact" },
        ].map((link) => (
          <NavbarLink
            key={link.name}
            as={Link}
            href={link.href}
            className="text-gray-700 font-medium hover:text-black hover:bg-gray-100 rounded-lg px-3 py-2 transition"
          >
            {link.name}
          </NavbarLink>
        ))}
      </NavbarCollapse>
    </Navbar>
  )
}