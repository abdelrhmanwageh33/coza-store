"use client"
import { getloggedUserCart } from "@/app/lib/services/cartService"
import { IProduct, Product } from "@/app/lib/type/product.type"
import CartGrid from "./CartGrid"
import { useCart } from "@/app/lib/context/CartContext"
import { useEffect } from "react"
import CartPrice from "./CartPrice"

export default  function TotalCart() {
  

    const {cart}=useCart()
  const product=cart?.data?.products
  const price=cart?.data?.totalCartPrice
  const discount=price-(price*.2)
  const allDiscount=price-discount
  const Fee=15
   
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 relative">
      
<div className="md:col-span-8">
  {product?.map((p:Product)=> <CartGrid products={p} key={p._id}/>)}
  </div>
<div className="md:col-span-4">
   <div className="bg-white rounded-xl shadow p-6 h-fit  w-fit">
          <CartPrice/>
        </div>
</div>
    </div>
  )
}
