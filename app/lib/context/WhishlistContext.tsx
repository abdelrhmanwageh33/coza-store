"use client"
import { useSession } from "next-auth/react";
import React, { useContext, useEffect } from "react";
import { createContext, ReactNode, useState } from "react";
import { getloggedUserWhislist } from "../services/whishlistService";

interface WhishListtType{
  getWhishListData:()=>Promise<void>
whish:any
whishNums:number

};
export const wishlistContext=createContext<WhishListtType | undefined>(undefined)


export default function WhishlistContext({children}:{children:ReactNode}) {
     const [whish,setwhish]=useState({})
  const [whishNums,setwhishNums]=useState(0)
  const {status}=useSession()
    async function getWhishListData(){
       try {
         const res= await getloggedUserWhislist()
        setwhish(res)
        setwhishNums(res?.count)
       } catch (error) {
        console.log(error)
       }
    
  }
  useEffect(()=>{
    if (status === "authenticated") {
    getWhishListData()
  }
  },[status,getWhishListData])
  const value={getWhishListData,whish,whishNums}
    return (
    <wishlistContext.Provider value={value}>{children}</wishlistContext.Provider>
  )


}

export const useWhishList=()=>{
    const context=useContext(wishlistContext)
      if(context===undefined){
          throw new Error("CartContext is missing. Did you wrap your component with CartContextProvider?");

    }
    return context
}


