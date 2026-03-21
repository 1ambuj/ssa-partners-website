/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,  // Fix: Images not showing on Windows (bypasses Sharp)
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
