import NextAuth from 'next-auth'
import AppleProvider from 'next-auth/providers/apple'
import FacebookProvider from 'next-auth/providers/facebook'
import GoogleProvider from 'next-auth/providers/google'
import EmailProvider from 'next-auth/providers/email'
import CredentialsProvider from "next-auth/providers/credentials"

import db from '../../../models'
import bcrypt from "bcryptjs";

let U = ''

export default NextAuth({
  providers: [
    CredentialsProvider({
        // The name to display on the sign in form (e.g. 'Sign in with...')
        name: 'Credentials',
        // The credentials is used to generate a suitable form on the sign in page.
        // You can specify whatever fields you are expecting to be submitted.
        // e.g. domain, username, password, 2FA token, etc.
        // You can pass any HTML attribute to the <input> tag through the object.
        credentials: {
          username: { label: "Username", type: "text", placeholder: "jsmith" },
          password: { label: "Password", type: "password" }
        },
        async authorize(credentials, req) {
          // You need to provide your own logic here that takes the credentials
          // submitted and returns either a object representing a user or value
          // that is false/null if the credentials are invalid.
          // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
          // You can also use the `req` object to obtain additional parameters
          // (i.e., the request IP address)

        //   const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }

        //   if (user) {
        //     // Any object returned will be saved in `user` property of the JWT
        //     return user
        //   } else {
        //     // If you return null then an error will be displayed advising the user to check their details.
        //     return null
        //   }

          const creds = {
            username: credentials.username,
            password: credentials.password,
          };

      

          let user = await db.users.findOne({
            where: {
                username: creds.username 
            }
          })



          if (user) {
            const pass = await bcrypt.compare(creds.password, user.password)
            console.log(pass)
              if (pass) {
                U = user
                return user
            
    

        }  else {
            return null
          }
 }
}
      })
    // OAuth authentication providers...
    // AppleProvider({
    //   clientId: process.env.APPLE_ID,
    //   clientSecret: process.env.APPLE_SECRET
    // }),
    // FacebookProvider({
    //   clientId: process.env.FACEBOOK_ID,
    //   clientSecret: process.env.FACEBOOK_SECRET
    // }),
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_ID,
    //   clientSecret: process.env.GOOGLE_SECRET
    // }),
    // // Passwordless / email sign in
    // EmailProvider({
    //   server: process.env.MAIL_SERVER,
    //   from: 'NextAuth.js <no-reply@example.com>'
    // }),
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
    
      if (user) {
         token.email = user.email;
        token.username = user.username;

      }

      

      return token;
    },
    session: ({ session, token, user }) => {
      if (token) {
        session.user.email = token.email;
        session.user.username = token.username;
        session.user.accessToken = token.accessToken;
      }
      return session;
    },
  }
})