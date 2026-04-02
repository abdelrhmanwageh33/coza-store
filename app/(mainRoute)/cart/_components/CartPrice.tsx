import { useCart } from '@/app/lib/context/CartContext'
import Link from 'next/link'
import React from 'react'

export default function CartPrice() {
  const { cart } = useCart()
  const product = cart?.data?.products
  const price = cart?.data?.totalCartPrice || 0
  const discount = price * 0.2
  const allDiscount = discount
  const Fee = 15

  return (
    <div className="bg-white rounded-xl shadow p-6 w-full max-w-sm mx-auto lg:mx-0 lg:w-80">
      
      <h2 className="text-lg font-semibold mb-6">Order Summary</h2>

      <div className="space-y-4 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-500">Subtotal</span>
          <span>{price}</span>
        </div>

        <div className="flex justify-between text-red-500">
          <span>Discount (-20%)</span>
          <span>{Math.round(allDiscount) || 0}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">Delivery Fee</span>
          <span>{Fee}$</span>
        </div>

        <hr />

        <div className="flex justify-between font-semibold text-base">
          <span>Total</span>
          <span>{(price + Fee - allDiscount) || 0}</span>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-2 mt-6">
        <input
          type="text"
          placeholder="Add promo code"
          className="flex-1 border rounded-full px-4 py-2 text-sm focus:outline-none w-full sm:w-auto"
        />
        <button className="bg-gray-200 px-4 py-2 rounded-full text-sm w-full sm:w-auto">
          Apply
        </button>
      </div>

      <Link href={'/Payment'}>
        <button className="w-full mt-6 bg-black text-white py-3 rounded-full flex items-center justify-center gap-2">
          Go to Checkout →
        </button>
      </Link>

    </div>
  )
}