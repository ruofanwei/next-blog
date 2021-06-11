import '../styles/global.css'
import { AppProps } from 'next/app'
import { Provider } from '@lyket/react';
import "prismjs/themes/prism-tomorrow.css";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider
    apiKey="acc0dbccce8e557db5ebbe6d605aaa"
    theme={{
      colors: {
        background: "#b8fff3",
        text: "violet",
        primary: "rgba(255, 224, 138, 0.4)"
          }
        }}
      >
      <Component {...pageProps} />
  </Provider>
  )
}

