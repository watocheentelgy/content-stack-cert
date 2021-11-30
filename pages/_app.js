import ContentstackLivePreview from "@contentstack/live-preview-utils";

import '../styles/globals.css'
import '../styles/responsive.css'

function MyApp({ Component, pageProps }) {
  ContentstackLivePreview.init({
    enable: true,
    stackDetails: {
      apiKey: "bltdd864dc0907fe3cc",
    },
  });

  return <Component {...pageProps} />
}

export default MyApp
