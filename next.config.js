/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  // swcMinify: true,
  sassOptions: {
    includePaths: ["node_modules"],
  },
  turbopack: {
    enabled: false,
  },
};

module.exports = nextConfig;
