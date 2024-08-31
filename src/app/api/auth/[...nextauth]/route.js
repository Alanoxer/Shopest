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
    jwt: async ({ token, user }) => {
      if (user) {
        token.uid = user;
      }

      return token;
    },
    session: async ({ session, token }) => {
      // here we put session.useData and put inside it whatever you want to be in the session
      // here try to console.log(token) and see what it will have
      // sometimes the user get stored in token.uid.userData
      // sometimes the user data get stored in just token.uid
      session.userData = {
        isAdmin: token.uid.userData.isAdmin,
        id: token.uid.userData._id,
        image: token.uid.userData.image,
        provider: token.uid.userData.provider,
        name: token.uid.userData.name,
      };

      return session;
    },
  },
});

export { handler as GET, handler as POST };
