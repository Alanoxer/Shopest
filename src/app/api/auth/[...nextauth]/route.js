// import NextAuth from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import GoogleProvider from "next-auth/providers/google";
// import FacebookProvider from "next-auth/providers/facebook";
// import bcrypt from "bcrypt";
// import { conn } from "@/libs/mysql";

// const handler = NextAuth({
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     }),
//     FacebookProvider({
//       clientId: process.env.FACEBOOK_CLIENT_ID,
//       clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
//     }),
//     CredentialsProvider({
//       name: "Credentials",
//       id: "credentials",
//       credentials: {
//         email: {
//           label: "Email",
//           type: "email",
//           placeholder: "test@test.com",
//         },
//         password: {
//           label: "password",
//           type: "password",
//           placeholder: "*******",
//         },
//       },
//       async authorize(credentials) {
//         const email = credentials?.email;
//         const password = credentials?.password;

//         const userFound = await conn.query(
//           `SELECT id, email, password FROM user WHERE email = ?`,
//           [email]
//         );
//         console.log(userFound[0][0].email);

//         const passwordMatch = await bcrypt.compare(
//           password,
//           `${userFound[0][0].password}`
//         );

//         console.log(passwordMatch);
//         if (!passwordMatch) throw new Error("Invalid Credentials");

//         console.log(userFound[0][0]);

//         return userFound[0][0];
//       },
//     }),
//   ],

//   pages: {
//     signIn: "/login",
//   },
//   session: {
//     strategy: "jwt",
//   },

//   callbacks: {
//     // it is used to store token
//     async jwt({ token, account }) {
//       // Persist the OAuth access_token to the token right after signin
//       if (account) {
//         token.accessToken = account.access_token;
//       }
//       return token;
//     },

//     async session({ session, token, user }) {
//       // Send properties to the client, like an access_token from a provider.
//       session.accessToken = token.accessToken;
//       return session;
//     },
//   },
// });

// export { handler as GET, handler as POST };


import { handlers } from "@/auth" // Referring to the auth.ts we just created
export const { GET, POST } = handlers
