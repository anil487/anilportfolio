import { NextResponse } from "next/server"
import { cookies } from "next/headers"

export async function POST() {
  const cookieStore = await cookies()

  // Set a cookie that expires in 24 hours
  cookieStore.set("lastEmailSent", Date.now().toString(), {
    maxAge: 24 * 60 * 60, // 24 hours in seconds
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
  })

  return NextResponse.json({ success: true })
}

