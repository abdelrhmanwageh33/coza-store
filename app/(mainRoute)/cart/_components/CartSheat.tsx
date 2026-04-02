import { Product } from '@/app/lib/type/product.type'
import React from 'react'

export default function CartSheat({product}:{product:Product}) {
  return (
  <>
    <div className='flex items-start justify-between'>

<div className='w-[20%]'>
    <img src={product?.product?.imageCover} alt={product?.product?.title} className='w-full' />

    </div>
    
     <div className='w-[50%]'>
                <h3 className="font-semibold">{product?.product?.title}</h3>
                <p className="text-sm text-gray-500">{product?.product?.category?.name}</p>
                <p className="text-sm text-gray-500">{product?.product?.brand?.name}</p>
                <p className="font-semibold mt-2">{product?.price}</p>
              </div>
    </div>
<hr className='my-5' />     
  </>
  )
}
