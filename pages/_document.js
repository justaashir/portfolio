import Document, { Html, Head, Main, NextScript } from "next/document";

let description = `Head of Product at Kiwify — focused on creating the best experience for digital creators & consumers. The platform allows users to sell their courses, e-books, community, and physical events. It's one of the biggest platform in 🇧🇷 Brazil with millions of users`;
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta property="og:title" content="Aashir Khan - I work at Kiwify" />
          <meta property="og:description" content={description} />
          <meta property="og:image" content="/meta-img-2.png" />
          <meta property="og:url" content="https://justaashir.com" />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://justaashir.com/" />
          <meta property="twitter:title" content="Aashir Aamir Khan - Ash" />
          <meta property="twitter:description" content={description} />
          <meta property="twitter:image" content="/meta-img-2.png" />

          <meta name="description" content={description} />
          <link rel="icon" href="/favicon.png" type="image/png" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
          <link href="https://fonts.googleapis.com/css2?family=Kalam:wght@300&display=swap" rel="stylesheet"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
