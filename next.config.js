/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '/',
  },
}
process.env.NODE_ENV === 'production' && ( nextConfig.assetPrefix = './' );
module.exports = nextConfig;
