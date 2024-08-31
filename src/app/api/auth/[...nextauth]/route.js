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
    //it is used to store token
    async jwt({ token, user }) {
      //it does not work first of all we do something
      //after that it works
      if (user) {
        token._id = user._id?.toString();
        token.isVerified = user.isVerified;
        token.isAcceptingMessage = user.isAcceptingMessage;
        token.username = user.username;
      }

      return token;
    },

    async session({ session, token }) {
      if (token) {
        session.user._id = token._id;
        session.user.isVerified = token.isVerified;
        session.user.isAcceptingMessage = token.isAcceptingMessage;
        session.user.username = token.username;
      }
      return session;
    },
  },
});

export { handler as GET, handler as POST };
