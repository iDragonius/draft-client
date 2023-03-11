import { NextRequest, NextResponse } from 'next/server'
import { verifyAuth } from './lib/auth'

export default async function middleware(req: NextRequest) {
	const token = req.cookies.get('token')?.value
	const verifiedToken =
		token && (await verifyAuth(token).catch(err => console.log(err)))

	if (verifiedToken) {
		if (
			req.nextUrl.pathname.startsWith('/login') ||
			req.nextUrl.pathname.startsWith('/registration')
		) {
			return NextResponse.redirect(new URL('/', req.url))
		}
	}
	if (!verifiedToken) {
		req.cookies.delete('token')
	}
}

export const config = {
	matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
