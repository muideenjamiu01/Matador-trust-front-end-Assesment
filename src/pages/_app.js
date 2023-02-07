import "@/styles/globals.css";
import Head from "next/head";
import React from "react";
// import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

export default function App({ Component, pageProps }) {
  const [queryClient] = React.useState(() => new QueryClient());
  return (
    <>
      <Head>
        {/* This ways to add css on global website use css @import property and you also paste Link tag also */}
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');
        </style>
      </Head>
      // Provide the client to your App
      <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
    </>
  );
}
