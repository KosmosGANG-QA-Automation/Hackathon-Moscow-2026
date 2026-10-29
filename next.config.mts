import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/Hackathon-Moscow-2026', // Добавляем имя репозитория для картинок
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
