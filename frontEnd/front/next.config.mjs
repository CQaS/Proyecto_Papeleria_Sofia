/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{
        protocol: 'https',
        hostname: 'readdy.ai',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '5000',
        pathname: '/imgs/**',

      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '5000',
        pathname: '/promos/**',
      },
    ],
  },
};

export default nextConfig;