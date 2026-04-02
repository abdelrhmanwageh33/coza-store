"use client"
import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { getloggedUserCart } from '../services/cartService'
import { useSession } from 'next-auth/react'
import { toast } from 'sonner'
interface CartContextType{
  getCartData:()=>Promise<void>
  cart:any;
  cartNums:number
}
export const cartContext=createContext<CartContextType | undefined>(undefined)
export default function CartContextProvider({children}:{children:ReactNode}) {
  const [cart,setCart]=useState({})
  const [cartNums,setCartNums]=useState(0)
  const {status}=useSession()
async function  getCartData(){
  try {
    const cartItem= await getloggedUserCart()
    setCart(cartItem)
    setCartNums(cartItem?.numOfCartItems)
   
  } catch (error) {
    console.log(error);
    
  }
}
useEffect(() => {
  if (status === "authenticated") {
    getCartData()
  }
}, [status, getCartData])
  const value={cart,cartNums,getCartData}

    return (

    <cartContext.Provider value={value}>{children}</cartContext.Provider>
  )
}
  export const useCart=()=>{
    
    const context=useContext(cartContext)
    if(context===undefined){
          throw new Error("CartContext is missing. Did you wrap your component with CartContextProvider?");

      toast.error('must login ')
    }
    return context
  
  }
