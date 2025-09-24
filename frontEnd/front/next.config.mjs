/** @type {import('next').NextConfig} */
// Configuración de imágenes remotas para Next.js
const nextConfig = {
  images: {
    remotePatterns: [{
        protocol: 'https',
        hostname: process.env.REMOTE_HOSTNAME || 'readdy.ai',
        // Si no hay puerto, omitir la propiedad
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: process.env.LOCAL_HOSTNAME || 'localhost',
        port: process.env.LOCAL_PORT || '5000',
        pathname: '/imgs/**',
      },
      {
        protocol: 'http',
        hostname: process.env.LOCAL_HOSTNAME || 'localhost',
        port: process.env.LOCAL_PORT || '5000',
        pathname: '/promos/**',
      },
    ],
  },
};

export default nextConfig;