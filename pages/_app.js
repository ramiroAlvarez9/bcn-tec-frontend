import { Inter } from "next/font/google";
import "../src/app/globals.scss";
import Header from "@/app/components/Header";
import FooterUpArrow from "@/app/components/FooterUpArrow";
const inter = Inter({ subsets: ["latin"] });

export default function MyApp({ Component, pageProps }) {
  
  return (
    <main className={inter.className}>
      <Header />
      <Component {...pageProps} />
      < FooterUpArrow />     
    </main>
  );
}
