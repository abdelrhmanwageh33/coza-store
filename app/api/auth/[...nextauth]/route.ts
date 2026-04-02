import { authOptions } from "@/app/auth"
import NextAuth from "next-auth"
import { getToken } from "next-auth/jwt"
import { NextResponse } from "next/server"

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }

