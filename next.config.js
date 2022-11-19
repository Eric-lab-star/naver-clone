/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    forceSwcTransforms: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "openweathermap.org",

        pathname: "/img/wn/**",
      },
      {
        protocol: "https",
        hostname: "image.imnews.imbc.com",

        pathname: "**/*",
      },
      {
        protocol: "https",
        hostname: "img.sbs.co.kr",

        pathname: "**/*",
      },
      {
        protocol: "https",
        hostname: "news.kbs.co.kr",

        pathname: "**/*",
      },
    ],
  },
};

module.exports = nextConfig;
