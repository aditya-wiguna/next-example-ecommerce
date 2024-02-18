/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    currencyIcon: process.env.CURRENCY_ICON || 'IDR',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.dummyjson.com'
      },
    ],
  },
};
export default nextConfig;
