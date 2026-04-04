"use server"

import { decode, JWT } from "next-auth/jwt"
import { cookies } from "next/headers"

export async function getTokenUser() {

  const cookieStore = await cookies()

  // production + development
  const tokenCookie =
    cookieStore.get("__Secure-next-auth.session-token")?.value ??
    cookieStore.get("next-auth.session-token")?.value
  if (!tokenCookie) {
    return null
  }

  
  const decoded = await decode({ token: tokenCookie, secret: process.env.NEXTAUTH_SECRET! });
  return decoded?.token as string | null;
}

