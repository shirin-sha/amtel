import { NextResponse } from 'next/server'

const COOKIE_NAME = 'admin_session'

export function middleware(request) {
  const { nextUrl, cookies } = request
  const isAdminPath = nextUrl.pathname.startsWith('/admin')
  if (!isAdminPath) return NextResponse.next()

  if (nextUrl.pathname === '/admin') {
    return NextResponse.next()
  }

  const token = cookies.get(COOKIE_NAME)?.value
  if (!token) {
    const url = new URL('/admin', request.url)
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*']
}


