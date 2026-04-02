"use client"
import { SessionProvider } from 'next-auth/react'
import React, { ReactNode } from 'react'
import CartContextProvider from './app/lib/context/CartContext'
import WhishlistContext from './app/lib/context/WhishlistContext'

export default function Providers({children}:{children:ReactNode}) {
  return (
    <SessionProvider>
      <CartContextProvider>
        <WhishlistContext>
{children}
        </WhishlistContext>

      </CartContextProvider>
      
      
      </SessionProvider>
  )
}
