import React from 'react'

export default function WishHeader() {
  return (
    <>
      {/* Header Title */}
      <div className="text-center mb-10 px-4">
        <p className="text-gray-400 text-sm mb-2">HOME / WISHLIST</p>
        <div className="text-4xl mb-2">♡</div>
        <h1 className="text-3xl md:text-5xl font-semibold">My Wishlist</h1>
      </div>

      {/* Table Header */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 text-gray-500 border-b pb-3 mb-6 px-4 items-center">
        {/* Product Name */}
        <span className="truncate font-medium">Product name</span>

        {/* Unit Price */}
        <span className="hidden md:block">Unit price</span>

        {/* Stock Status */}
        <span className=" hidden md:block">Stock status</span>

        {/* Actions */}
        <span className="hidden text-right md:text-left font-medium">Actions</span>
      </div>
    </>
  )
}