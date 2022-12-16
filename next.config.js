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
        hostname: "i.annihil.us",
        pathname: "/u/prod/marvel/i/mg/e/30/**/*",
      },
      {
        protocol: "https",
        hostname: "i.imgur.com",
        pathname: "**/*",
      },
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
      {
        protocol: "https",
        hostname: "photo.jtbc.co.kr",
        pathname: "**/*",
      },
      {
        protocol: "https",
        hostname: "image.ytn.co.kr",
        pathname: "**/*",
      },
      {
        protocol: "https",
        hostname: "ssl.pstatic.net",
        pathname: "**/*",
      },
    ],
  },
};

module.exports = nextConfig;
