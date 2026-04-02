'use client'
import { useCart } from '@/app/lib/context/CartContext'
import { useWhishList } from '@/app/lib/context/WhishlistContext'
import { addToCart } from '@/app/lib/services/cartService'
import { removeProduct } from '@/app/lib/services/whishlistService'
import { Whishlist } from '@/app/lib/type/Wishlist.type'
import React from 'react'
import { toast } from 'sonner'
import { ShoppingCart, Trash } from 'lucide-react'

export default function WishTable({ wishProducts }: { wishProducts: Whishlist }) {

    const { getWhishListData } = useWhishList()
    const { getCartData } = useCart()

    async function deleteItem() {
        await toast.promise(removeProduct(wishProducts?._id), {
            loading: 'Deleting item...',
            success: 'Deleted successfully',
            error: 'Failed'
        })
        getWhishListData()
    }

    async function addtocart() {
        await toast.promise(addToCart(wishProducts?._id), {
            loading: 'Adding to cart...',
            success: 'Added successfully',
            error: 'Failed'
        })
        getCartData()
    }

    return (
        <div className="space-y-4 px-4">
            <div
                key={wishProducts.id}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 items-center bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition"
            >
                {/* Product */}
                <div className="flex items-center gap-3 sm:col-span-2 md:col-span-1">
                    <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                        <img
                            src={wishProducts?.imageCover}
                            alt={wishProducts?.brand?.name}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <span className="text-sm md:text-base font-medium text-gray-800 truncate">
                        {wishProducts?.brand?.name}
                    </span>
                </div>

                {/* Price */}
                <div className="text-sm md:text-base text-green-600 font-semibold">
                    ${wishProducts?.price}
                </div>

                {/* Category */}
                <div className="text-sm md:text-base text-gray-500">
                    {wishProducts?.category?.name}
                </div>

                {/* Actions */}
                <div className="flex justify-start items-center gap-3">
                    <button
                        onClick={addtocart}
                        className="p-2 rounded-lg bg-emerald-100 hover:bg-emerald-600 hover:text-white transition"
                    >
                        <ShoppingCart size={20} />
                    </button>

                    <button
                        onClick={deleteItem}
                        className="p-2 rounded-lg bg-red-100 hover:bg-red-600 hover:text-white transition"
                    >
                        <Trash size={20} />
                    </button>
                </div>
            </div>
        </div>
    )
}