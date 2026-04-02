import { log } from "console";
import { getTokenUser } from "./Servir-utis";
import { json, number } from "zod";

/* ===============================
   Get Logged User Cart
================================ */
export async function getloggedUserCart() {
  const finalToken = await getTokenUser();
  
  if (!finalToken) {
    throw new Error("Token not found");
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/cart`,
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
    console.log("Get Cart Error:", text);
    throw new Error("Failed to fetch cart");
  }

  return await res.json();
}

/* ===============================
   Remove Item From Cart
================================ */
export async function rempveCartItem(id:string) {
  const finalToken = await getTokenUser();

  if (!finalToken) {
    throw new Error("Token not found");
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/cart/${id}`,
    {
      method: "DELETE",
      headers: {
        token: finalToken,
      },
    }
  );

  if (!res.ok) {
    const text = await res.text();
    console.log("Remove Cart Item Error:", text);
    throw new Error("Failed to remove cart item");
  }

  return await res.json();
}

export async function UpdateItem(id:string,count:string|number) {
  const finalToken = await getTokenUser();

  if (!finalToken) {
    throw new Error("Token not found");
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/cart/${id}`,
    {
      method: "PUT",
      headers: {
        token: finalToken,
                "Content-Type": "application/json",

      },
     body: JSON.stringify({
       count:String(count)
      }),
    }
  );

  if (!res.ok) {
    const text = await res.text();
    console.log("update Cart Item Error:", text);
    throw new Error("Failed to update cart item");
  }

  return await res.json();
}


/* ===============================
   Add Product To Cart
================================ */
export async function addToCart(productId: string) {
  const finalToken = await getTokenUser();

  if (!finalToken) {
    throw new Error("Token not found");
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/cart`,
    {
      method: "POST",
      headers: {
        token: finalToken,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        productId,
      }),
    }
  );

  if (!res.ok) {
    const text = await res.text();
    console.log("Add To Cart Error:", text);
    throw new Error("Failed to add product to cart");
  }

  return await res.json();
}

/* ===============================
  payment casj
================================ */
export async function paymentCash(productId: string,data:any) {
  const finalToken = await getTokenUser();

  if (!finalToken) {
    throw new Error("Token not found");
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/orders/${productId}`,
    {
      method: "POST",
      headers: {
        token: finalToken,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
       data
      }),
    }
  );

  if (!res.ok) {
    const text = await res.text();
    console.log("Add To Cart Error:", text);
    throw new Error("Failed to add product to cart");
  }

  return await res.json();
}

