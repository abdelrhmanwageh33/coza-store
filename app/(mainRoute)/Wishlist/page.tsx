// app/wishlist-table/page.tsx   //447
"use client"
import { useWhishList } from "@/app/lib/context/WhishlistContext";
import { Whishlist } from "@/app/lib/type/Wishlist.type";
import Image from "next/image";
import WishTable from "./-components/WishTable";
import WishHeader from "./-components/WishHeader";


export default function WishlistTable() {
  const {whish} =useWhishList()
const product=whish?.data
  return (
    <div className="mx-auto w-[90%] bg-white px-4 md:px-10 py-14 my-10 ">
    <WishHeader/>
      

      {/* Items */}
     
      {product?.map((product:Whishlist)=><WishTable key={product?._id} wishProducts={product}/>)}
     
    </div>
  );
}


