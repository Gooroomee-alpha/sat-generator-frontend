/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  rewrites: async () => [
    {
      source: '/api/:path*',
      destination:
        'http://ec2-13-125-208-31.ap-northeast-2.compute.amazonaws.com/:path*',
    },
  ],
};

module.exports = nextConfig;
