import "../styles/globals.css";
import type { AppProps } from "next/app";

import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <div>
        <Component {...pageProps} />
      </div>
    </RecoilRoot>
  );
}

export default MyApp;
