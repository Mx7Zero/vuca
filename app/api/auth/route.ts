import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function POST(request: Request) {
  const { password } = await request.json()
  
  // Get password from environment variable, default to 'vuca2026' for development
  const correctPassword = process.env.VUCA_PASSWORD || 'vuca2026'
  
  if (password === correctPassword) {
    // Set authentication cookie
    const cookieStore = await cookies()
    cookieStore.set('vuca-auth', 'authenticated', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 * 7, // 7 days
    })
    
    return NextResponse.json({ success: true })
  }
  
  return NextResponse.json({ success: false }, { status: 401 })
}

export async function DELETE() {
  // Logout endpoint
  const cookieStore = await cookies()
  cookieStore.delete('vuca-auth')
  return NextResponse.json({ success: true })
}
