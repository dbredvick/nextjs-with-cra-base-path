/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
   async rewrites() {
    return [
      {
        "source": "/react",
        "destination": "https://create-react-app-base-path.vercel.zone/"
      },
      {
        "source": "/react/:match*",
        "destination": "https://create-react-app-base-path.vercel.zone/:match*"
      }
    ]
  },
}

module.exports = nextConfig
