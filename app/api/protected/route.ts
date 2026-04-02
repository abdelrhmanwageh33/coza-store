import { getToken } from "next-auth/jwt"
import { NextResponse, NextRequest } from "next/server"

export async function GET(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET })

  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  return NextResponse.json({ user: token.user, token: token.token })
}