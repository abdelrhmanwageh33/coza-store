// lib/cart.ts

import { getTokenUser } from "./Servir-utis";

async function fetchWithToken(url: string, options: RequestInit = {}) {
  const token = await getTokenUser();
  if (!token) throw new Error("Token not found");

  const res = await fetch(url, {
    ...options,
    headers: {
      ...(options.headers || {}),
      "Content-Type": "application/json",
      token,
    },
    cache: "no-store",
  });

  if (!res.ok) {
    const text = await res.text();
    console.error("Fetch Error:", text); 
    throw new Error(`Request failed: ${res.status}`);
  }
  return res.json();
}

// ===== Get Cart =====
export async function getLoggedUserCart() {
  return fetchWithToken(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/cart`);
}

// ===== Add to Cart =====
export async function addToCart(productId: string) {
  return fetchWithToken(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/cart`, {
    method: "POST",
    body: JSON.stringify({ productId }),
  });
}

// ===== Update Cart Item =====
export async function updateCartItem(id: string, count: number) {
  return fetchWithToken(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/cart/${id}`, {
    method: "PUT",
    body: JSON.stringify({ count }),
  });
}

// ===== Remove Cart Item =====
export async function removeCartItem(id: string) {
  return fetchWithToken(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/cart/${id}`, {
    method: "DELETE",
  });
}

// ===== Payment Cash =====
export async function paymentCash(orderId: string, data: any) {
  return fetchWithToken(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/orders/${orderId}`, {
    method: "POST",
    body: JSON.stringify({ data }),
  });
}