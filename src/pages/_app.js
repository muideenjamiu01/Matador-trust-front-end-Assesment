import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* This ways to add css on global website use css @import property and you also paste Link tag also */}
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');
        </style>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
