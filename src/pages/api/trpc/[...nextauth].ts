import NextAuth, {NextAuthOptions} from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import type User from 'next-auth/core/types'

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: {label: 'Username', type: 'text', placeholder: 'jsmith'},
        password: {label: 'Password', type: 'password'},
      },
      async authorize(creds, req) {
        console.log('AUTH==============================================')
        return null
      },
      // async authorize(credentials, req) {
      //   const res = await fetch('/your/endpoint', {
      //     method: 'POST',
      //     body: JSON.stringify(credentials),
      //     headers: {'Content-Type': 'application/json'},
      //   })
      //   const user = await res.json()

      //   // If no error and we have user data, return it
      //   if (res.ok && user) {
      //     return user
      //   }
      //   // Return null if user data could not be retrieved
      //   return null
      // },
    }),
  ],
  callbacks: {
    async jwt({token}) {
      token.userRole = 'admin'
      return token
    },
  },
}

export default NextAuth(authOptions)
