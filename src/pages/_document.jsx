import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="stylesheet" href="/assets/css/vendor/icomoon.css" />
        <link rel="stylesheet" href="/assets/css/vendor/remixicon.css" />
        <link rel="stylesheet" href="/assets/css/app.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
