/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "**/*",
        pathname: "**/*",
      },
      {
        protocol: "https",
        hostname: "**/*",
        pathname: "**/*",
      },
    ],
  },
};

module.exports = nextConfig;
