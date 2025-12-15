import { type NextRequest, NextResponse } from 'next/server';


export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
    
    return NextResponse.redirect(new URL('/sign-in', request.url))
}

export const config = {
    matcher: '/',
}
