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
        email: {
          label: "email",
          type: "email",
          placeholder: "test@test.com",
        },
        password: {
          label: "password",
          type: "password",
          placeholder: "*******",
        },
      },
      async authorize(credentials) {
        const email = credentials?.email;
        const password = credentials?.password;

        const userFound = await conn.query(
          `SELECT id, email, password FROM user WHERE email = ?`,
          [email]
        );
        console.log(userFound[0][0].email);

        const passwordMatch = await bcrypt.compare(
          password,
          `${userFound[0][0].password}`
        );

        console.log(passwordMatch);
        if (!passwordMatch) throw new Error("Invalid Credentials");

        console.log(userFound[0][0], credentials);

        const user = {
          id: userFound[0][0].id,
          name: userFound[0][0].name,
          email: userFound[0][0].email,
        };

        return user;
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

      if (user) {
        token.id = user.id?.toString();
        token.isVerified = user.isVerified;
        token.name = user.name;
      }

      return token;
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      if (token) {
        session.user.id = token.id;
        session.user.isVerified = token.isVerified;
        session.user.name = token.name;
      }
      return session;
    },
  },
});

export { handler as GET, handler as POST };
