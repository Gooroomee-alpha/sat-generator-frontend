/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  rewrites: async () => [
    {
      source: '/api/:path*',
      destination:
        'http://52.231.111.15:8000/:path*',
    },
  ],
};

module.exports = nextConfig;
