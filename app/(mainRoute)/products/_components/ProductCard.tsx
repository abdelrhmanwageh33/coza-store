"use client"

import { useCart } from '@/app/lib/context/CartContext'
import { useWhishList } from '@/app/lib/context/WhishlistContext'
import { addToCart } from '@/app/lib/services/cartService'
import { addProductToWishlist } from '@/app/lib/services/whishlistService'
import { IProduct } from '@/app/lib/type/product.type'
import { Heart } from 'iconsax-reactjs'
import Link from 'next/link'
import { toast } from 'sonner'
import { ShoppingCart } from 'lucide-react'

export default function ProductCard({product}:{product:IProduct}) {

  const {cartNums,getCartData} = useCart()
  const {getWhishListData}=useWhishList()

  async function addtocart(){
   await toast.promise( addToCart(product?._id),{
    loading:'adding to cart ....',
    success:'added to cart succesfully',
    error:'faild '
   })
     getCartData()
  }

  async function addTOWhishList() {
    await toast.promise(addProductToWishlist(product?._id),{
      loading:'adding to whishlist ....',
      success:'added to whishlist succesfully',
      error:'faild ' 
    })
    getWhishListData()
  }

  return (

    <div className="border rounded-xl overflow-hidden bg-white hover:shadow-lg transition duration-300 flex flex-col">

      {/* Image */}
      <Link href={`/products/${product._id}`} className="relative bg-gray-50 flex justify-center items-center p-6">

        {/* Wishlist */}
        <Heart
          size="22"
          className="absolute top-3 right-3 text-gray-400 hover:text-red-600 transition cursor-pointer"
          onClick={(e)=>{
            e.preventDefault()
            addTOWhishList()
          }}
        />

        <img
          src={product.imageCover}
          alt={product.title}
          className="h-40 object-contain transition group-hover:scale-105"
        />

      </Link>


      {/* Content */}
      <div className="p-4 flex flex-col gap-2">

        {/* Title */}
        <Link href={`/products/${product._id}`}>
          <h3 className="font-semibold text-gray-800 line-clamp-1 hover:text-emerald-600 transition">
            {product.title}
          </h3>
        </Link>

        {/* Price */}
        <p className="text-emerald-600 text-lg font-bold">
          {product?.price} EGP
        </p>

        {/* Button */}
        <button
          onClick={(e)=>{
            e.preventDefault()
            addtocart()
          }}
          className="mt-2 flex items-center justify-center gap-2 bg-gray-100 hover:bg-emerald-600 hover:text-white transition py-2 rounded-full font-medium"
        >
          <ShoppingCart size={18}/>
          Add To Cart
        </button>

      </div>

    </div>

  )
}