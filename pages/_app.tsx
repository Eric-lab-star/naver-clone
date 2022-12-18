import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Antonio } from "@next/font/google";
import { RecoilRoot } from "recoil";

const antonio = Antonio({ subsets: ["latin"] });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <main className={antonio.className}>
        <Component {...pageProps} />
      </main>
    </RecoilRoot>
  );
}

export default MyApp;
