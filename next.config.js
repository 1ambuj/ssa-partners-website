/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/index-two",
        permanent: false,
      },
    ];
  },
}

module.exports = nextConfig
