import { getTokenUser } from "./Servir-utis";

export async function getloggedUserWhislist() {
  const finalToken = await getTokenUser();
  
  if (!finalToken) {
    throw new Error("Token not found");
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/wishlist`,
    {
      headers: {
        token: finalToken,
        'Content-Type':'application/json'
      },
      cache: "no-store",
    }
  );

  if (!res.ok) {
    const text = await res.text();
    console.log("Get wishlist Error:", text);
    throw new Error("Failed to fetch wishlist");
  }

  return await res.json();
}

export async function addProductToWishlist(productId:string) {
    const finalToken = await getTokenUser();
  
  if (!finalToken) {
    throw new Error("Token not found");
  }
const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/wishlist`,{
    method:'POST',
    headers:{
       token: finalToken,
        'Content-Type':'application/json'  
    },
    body:JSON.stringify({
        productId
    })
});
if(!res.ok){
   const text = await res.text();
    console.log("Get wishlist Error:", text);
    throw new Error("Failed to fetch wishlist");   
}
return await res.json()
}

export async function removeProduct(id:string) {
   const finalToken = await getTokenUser();
  
  if (!finalToken) {
    throw new Error("Token not found");
  }
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/wishlist/${id}`,{
    method:'DELETE',
    headers:{
       token: finalToken,
        'Content-Type':'application/json'  
    },
   
});
if(!res.ok){
   const text = await res.text();
    console.log("Get wishlist Error:", text);
    throw new Error("Failed to DELETE wishlist");   
}
return await res.json()   
}