/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

// module.exports = nextConfig
module.exports = {
  i18n: {
    locales: ["en-GB", "ka"],
    defaultLocale: "en-GB"
  },
  images: {
    domains: ['raw.githubusercontent.com']
  }
};
// raw.githubusercontent.com