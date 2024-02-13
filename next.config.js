/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx"],
  async redirects() {
    return [
      {
        source: "/",
        destination: "/card-page",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
