import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <script src="https://cdn.ckeditor.com/4.9.2/standard/ckeditor.js"></script>
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
