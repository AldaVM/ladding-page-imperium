import Head from "next/head";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
import "../reset.css";

config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/png" href="favicon.ico" />
        <meta name="author" content="Aldair Valencia <aldairvm95@gmail>" />
        <meta name="keywords" content="Imperium Cross WebSite" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Imperium Cross WebSite" />
        <meta property="og:image" content="/assets/logo-imperium-cross.png" />
      </Head>
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
