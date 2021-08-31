import Document, { Html, Head, Main, NextScript } from "next/document";

let description = `I lead the front-end team who designed, coded and nurtured the dashboard being used by
                200,000+ users. currently serving as Head of Product at Kiwify — focused on creating the best experience for digital products seller & buyers.`;
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* META TAGS */}
          <meta property="og:title" content="Aashir Aamir Khan - Ash" />
          <meta property="og:description" content={description} />
          <meta property="og:image" content="/meta-img-2.png" />
          <meta property="og:url" content="https://justaashir.com" />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://justaashir.com/" />
          <meta property="twitter:title" content="Aashir Aamir Khan - Ash">
          <meta property="twitter:description" content={description} />
          <meta property="twitter:image" content="/meta-img-2.png" />

          <meta
            name="description"
            content={description}
          />
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
          <script async src="https://cdn.splitbee.io/sb.js"></script>
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
