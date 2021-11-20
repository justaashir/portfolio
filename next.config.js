module.exports = {
  env: {
    GRAPHQL_URL_ENDPOINT: process.env.GRAPHQL_URL_ENDPOINT,
  },
  async redirects() {
    return [
      {
        source: "/blog/:path*",
        destination: "https://justaashir.netlify.app/blog/:path*",
        permanent: true,
      },
    ];
  },
};