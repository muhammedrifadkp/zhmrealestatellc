import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export default function proxy(request: NextRequest) {
  const adminAuth = request.cookies.get('admin_auth')?.value;
  const isLoginPage = request.nextUrl.pathname === '/admin/login';

  // Protect all /admin routes except /admin/login
  if (request.nextUrl.pathname.startsWith('/admin') && !isLoginPage) {
    if (adminAuth !== 'authenticated') {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }

  // Redirect authenticated users away from login page
  if (isLoginPage && adminAuth === 'authenticated') {
    return NextResponse.redirect(new URL('/admin', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
