/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
   async rewrites() {
    return [
      {
        source: '/react',
        destination: 'https://create-react-app-base-path.vercel.zone/',
      },
    ]
  },
}

module.exports = nextConfig
