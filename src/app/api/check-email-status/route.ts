import { NextResponse } from "next/server"
import { cookies } from "next/headers"

export async function GET() {
  const cookieStore = await cookies()
  const lastEmailSent = cookieStore.get("lastEmailSent")

  const now = Date.now()
  const canSendEmail = !lastEmailSent || now - Number.parseInt(lastEmailSent.value) > 24 * 60 * 60 * 1000 // 24 hours

  return NextResponse.json({ canSendEmail })
}

