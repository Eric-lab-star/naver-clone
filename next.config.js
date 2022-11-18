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
        port: "",
        pathname: "/img/wn/**",
      },
      {
        protocol: "https",
        hostname: "image.imnews.imbc.com",
        port: "",
        pathname: "**/*",
      },
      {
        protocol: "https",
        hostname: "img.sbs.co.kr",
        port: "",
        pathname: "**/*",
      },
    ],
  },
};

module.exports = nextConfig;
