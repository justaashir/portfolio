module.exports = {
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