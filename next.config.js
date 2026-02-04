/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  // swcMinify: true,
    sassOptions: {
    includePaths: ['node_modules'],
  },
}

module.exports = nextConfig
