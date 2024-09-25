import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Providers from "./Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shopest",
  description: "Encuentra todo lo que necesitas en tu ciudad",
};

export default function RootLayout({ children }) {
  return (
    <html className="h-full" lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
        </Providers>

        <main>
          <Providers>{children}</Providers>
        </main>

        <Footer />
      </body>
    </html>
  );
}
