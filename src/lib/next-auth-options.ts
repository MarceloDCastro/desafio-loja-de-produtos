import { NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export const nextAuthOptions: NextAuthOptions = {
  secret: process.env.NEXT_PUBLIC_AUTH_SECRET,

  pages: {
    signIn: '/login',
  },

  session: {
    maxAge: 5 * 24 * 60 * 60, // 5 days,
  },

  providers: [
    GoogleProvider({
      name: 'google',
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
}
