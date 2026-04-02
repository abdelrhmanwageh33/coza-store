"use client"

import { useCart } from "@/app/lib/context/CartContext";
import { addToCart } from "@/app/lib/services/cartService";
import { IProduct } from "@/app/lib/type/product.type";
import ProductSlider from "./ProductSlider";

export default function ProductDetails({ product }: { product: IProduct }) {
  const { getCartData } = useCart();

  async function addtocart() {
    await addToCart(product?._id);
    getCartData();
    console.log('add');
  }

  return (
    <section className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 bg-white rounded-2xl shadow-lg p-4 md:p-6">

        {/* Slider */}
        <div className="col-span-1 md:col-span-5">
          <ProductSlider product={product} />
        </div>

        {/* Details */}
        <div className="col-span-1 md:col-span-7 flex flex-col gap-4">
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            {product?.title}
          </h1>

          <div className="flex flex-wrap items-center gap-2 text-sm sm:text-base text-gray-500">
            <span>{product?.category?.name}</span>
            <span>|</span>
            <span>{product?.brand?.name}</span>
          </div>

          <div className="text-gray-600 leading-relaxed">
            <h3 className="text-black capitalize mb-2">Description</h3>
            <p>{product?.description}</p>
          </div>

          <div className="text-2xl sm:text-3xl md:text-3xl font-semibold text-emerald-600">
            {product?.price} EGP
          </div>
          
          <button
            onClick={addtocart}
            className="mt-4 w-full md:w-auto px-6 sm:px-8 py-2 sm:py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-all duration-300"
          >
            Add To Cart
          </button>

          <div className="flex flex-col items-start text-sm text-gray-500 mt-4 gap-1">
            <p>Updated: {product?.updatedAt}</p>
            <p>Created: {product?.createdAt}</p>
          </div>

        </div>
      </div>
    </section>
  );
}