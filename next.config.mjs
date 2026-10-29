const basePath = process.env.NODE_ENV === "production" ? "/Hackathon-Moscow-2026" : "";

const nextConfig = {
  output: "export",
  basePath,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
