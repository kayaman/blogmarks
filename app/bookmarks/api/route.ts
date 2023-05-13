import {NextResponse} from 'next/server'

export async function GET(request: Request) {
  const {searchParams} = new URL(request.url)
  console.log(request)
  const id = searchParams.get('id')
  const res = await fetch(`https://kayaman.free.beeceptor.com/${id}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const product = await res.json()

  return NextResponse.json({status: 'OK', data: []})
}
