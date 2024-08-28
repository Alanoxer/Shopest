import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { conn } from "@/libs/mysql";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      id: "credentials",
      credentials: {
        user_email: {
          label: "user_email",
          type: "email",
          placeholder: "test@test.com",
        },
        user_password: {
          label: "user_password",
          type: "password",
          placeholder: "*******",
        },
      },
      async authorize(credentials) {
        const user_email = credentials?.user_email;
        const user_password = credentials?.user_password;

        const userFound = await conn.query(
          `SELECT user_email, user_password FROM user WHERE user_email = ?`,
          [user_email]
        );
        console.log(userFound[0][0].user_email);

        const passwordMatch = await bcrypt.compare(
          user_password,
          `${userFound[0][0].user_password}`
        );

        console.log(passwordMatch);
        if (!passwordMatch) throw new Error("Invalid Credentials");

        console.log(userFound, credentials);

        return userFound;
      },
    }),
  ],

  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },

  callbacks: {
    async jwt({ token, account, user, profile, session }) {
      // Persist the OAuth access_token to the token right after signin
      console.log(token, account, user, profile, session);

      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      session.accessToken = token.accessToken;
      return session;
    },
  },
});

export { handler as GET, handler as POST };
