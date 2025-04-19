/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development", //disable  pwa in dev mode
});
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["localhost"],
    // domains:['torino-api-production.up.railway.app']
    // remotePatterns: [
    //     {
    //       protocol: "https",
    //       hostname: "torino-api-production.up.railway.app",
    //       pathname: "/static/images/**",
    //     },
    //   ],
  },
};

module.exports = withPWA(nextConfig);
