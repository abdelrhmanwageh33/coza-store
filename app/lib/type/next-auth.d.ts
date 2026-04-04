import NextAuth from "next-auth"

declare module "next-auth" {
  interface Session {
    user: {
      name: string
      email: string
      role: string
      id: string
    }
    accessToken: string // ✅
  }

  interface User {
    name: string
    email: string
    role: string
    id: string
    accessToken: string // ✅
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    user: {
      name: string
      email: string
      role: string
      id: string
    }
    accessToken: string // ✅
  }
}