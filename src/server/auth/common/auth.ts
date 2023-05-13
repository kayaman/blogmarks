import {NextAuthOptions} from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import CredentialsProvider from 'next-auth/providers/credentials'

export const nextAuthOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: {label: 'Username', type: 'text', placeholder: 'jsmith'},
        password: {label: 'Password', type: 'password'},
      },
      async authorize(credentials, req) {
        const res = await fetch('/api/trpc/ok', {
          method: 'POST',
          body: JSON.stringify(credentials),
          headers: {'Content-Type': 'application/json'},
        })
        const user = await res.json()
        if (res && user) {
          return user
        }
        // TODO:
        return true
      },
    }),
  ],
}
