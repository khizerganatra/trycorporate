import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Include Google Fonts links here */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script&family=EB+Garamond&family=Caveat&family=Montserrat&family=Merienda&family=Roboto&family=Martel+Sans:wght@200&display=swap"
          rel="stylesheet"
        />
        
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
