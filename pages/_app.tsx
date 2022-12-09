import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Antonio } from "@next/font/google";

const antonio = Antonio({ subsets: ["latin"] });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={antonio.className}>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
