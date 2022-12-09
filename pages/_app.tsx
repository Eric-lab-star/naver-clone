import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Antonio } from "@next/font/google";

const antonio = Antonio({ subsets: ["latin"] });

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
