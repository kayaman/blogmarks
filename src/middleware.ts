import {NextResponse} from 'next/server'
import type {NextRequest} from 'next/server'

export async function middleware(request: NextRequest) {
  if (request.url === 'https://admin.blogmarks.dev') {
    return NextResponse.redirect('https://blogmarks.dev/admin')
  }
  return NextResponse.next()
}
