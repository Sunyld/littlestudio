/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    // Permitir imagens não otimizadas para arquivos locais com caracteres especiais
    unoptimized: false,
  },
};

module.exports = nextConfig;
