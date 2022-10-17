/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

// module.exports = nextConfig
module.exports = {
  images: {
    domains: ['raw.githubusercontent.com']
  }
};
// raw.githubusercontent.com