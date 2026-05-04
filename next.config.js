/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'vercel.com', 'github.com', 'avatars.githubusercontent.com'],
  },
}

module.exports = nextConfig
